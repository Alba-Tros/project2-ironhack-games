require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const flash = require("connect-flash");
const githubStrategy = require("passport-github").Strategy;
hbs.registerPartials(__dirname + "/views/partials");

// User model
const User = require("./models/user");

mongoose.Promise = Promise;
mongoose
    .connect(
        process.env.MONGODB_URI || "mongodb://localhost/project2-ironhackgames",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(x => {
        console.log(
            `Connected to Mongo! Database name: "${x.connections[0].name}"`
        );
    })
    .catch(err => {
        console.error("Error connecting to mongo", err);
    });

const app_name = require("./package.json").name;
const debug = require("debug")(
    `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup ****************************
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: { maxAge: 24 * 60 * 60 * 1000 },
        saveUninitialized: true,
        resave: true,
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
            ttl: 24 * 60 * 60 * 1000
        })
    })
);

passport.serializeUser((user, cb) => {
    cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
passport.use(
    new LocalStrategy(
        {
            passReqToCallback: true
        },
        (req, username, password, next) => {
            User.findOne({ username }, (err, user) => {
                if (err) {
                    return next(err);
                }
                if (!user) {
                    return next(null, false, { message: "Incorrect username" });
                }
                if (!bcrypt.compareSync(password, user.password)) {
                    return next(null, false, { message: "Incorrect password" });
                }
                return next(null, user);
            });
        }
    )
);

passport.use(
    new githubStrategy(
        {
            clientID: process.env.CLIENT_ID_GITHUB,
            clientSecret: process.env.CLIENT_SECRET_GITHUB,
            callbackURL:
                "https://ironhack-games.herokuapp.com/auth/github/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ githubID: profile.id })
                .then(user => {
                    if (user) {
                        done(null, user);
                        return;
                    }

                    User.create({ githubID: profile.id })
                        .then(newUser => {
                            done(null, newUser);
                        })
                        .catch(err => done(err)); // closes User.create()
                })
                .catch(err => done(err)); // closes User.findOne()
        }
    )
);

// End Middleware Setup ****************************
//
//
// Express View engine setup

app.use(
    require("node-sass-middleware")({
        src: path.join(__dirname, "public"),
        dest: path.join(__dirname, "public"),
        sourceMap: true
    })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
// app.locals.title = "This Project 2 v2";

/*
const index = require("./routes/index");
app.use("/", index); */

// app.use(function(req,res,next){
//     res.local.req = req;
//     next();
// });

// require('./hbsHelper/hbsHelper');

const router = require("./routes/auth-routes");
app.use("/", router);

const index = require("./routes/games");
app.use("/", index);

const searchBarHandler = require("./routes/search-bar-handler");
app.use("/", searchBarHandler);

const searchRez = require("./routes/searchRez");
app.use("/", searchRez);

module.exports = app;
