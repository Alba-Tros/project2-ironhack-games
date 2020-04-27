// routes/auth-routes.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");

// User model
const User = require("../models/user");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "" || password === "") {
        res.render("auth/signup", {
            message: "Please enter a username and a password"
        });
        return;
    } else if (username === "") {
        res.render("auth/signup", {
            message: "Please enter a username"
        });
        return;
    } else if (password === "") {
        res.render("auth/signup", {
            message: "Please enter a password"
        });
        return;
    }

    User.findOne({ username })
        .then(user => {
            if (user !== null) {
                res.render("auth/signup", {
                    message: "The username already exists"
                });
                return;
            }

            const salt = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(password, salt);

            const newUser = new User({
                username,
                password: hashPass
            });

            newUser.save(err => {
                if (err) {
                    res.render("auth/signup", {
                        message: "Something went wrong"
                    });
                } else {
                    res.redirect("/");
                }
            });
        })
        .catch(error => {
            next(error);
        });
});
router.get("/login", (req, res, next) => {
    res.render("auth/login", { message: req.flash("error") });
});

router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
        passReqToCallback: true
    })
);

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
});

router.get("/private-page", ensureLogin.ensureLoggedIn(), (req, res) => {
    res.render("private", { user: req.user });
});

router.get("/auth/slack", passport.authenticate("slack"));
router.get(
    "/auth/slack/callback",
    passport.authenticate("slack", {
        successRedirect: "/private-page",
        failureRedirect: "/" // here you would navigate to the classic login page
    })
);

module.exports = router;