// routes/auth-routes.js
const express = require("express");
const router = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");
const Game = require("../models/Game");

// User model
const User = require("../models/user");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

// getting info from the form username and password

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "" || password === "") {
    res.render("auth/signup", {
      message: "Please enter a username and a password",
    });
    return;
  } else if (username === "") {
    res.render("auth/signup", {
      message: "Please enter a username",
    });
    return;
  } else if (password === "") {
    res.render("auth/signup", {
      message: "Please enter a password",
    });
    return;
  }

  // if it allready existsts

  User.findOne({ username })
    .then((user) => {
      if (user !== null) {
        res.render("auth/signup", {
          message: "This username already exists",
        });
        return;
      }

      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);

      const newUser = new User({
        username,
        password: hashPass,
      });

      newUser.save((err) => {
        if (err) {
          res.render("auth/signup", {
            message: "Something went wrong",
          });
        } else {
          // privat page !
          res.redirect("/private");
        }
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    // private page
    successRedirect: "/private",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true,
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

//router.get("/account-settings", (req, res) => {
//  Game.findById(req.user._id).then((games) => {
//   res.render("account-settings", { gamesList: games });
// });
// });

router.get("/private", ensureLogin.ensureLoggedIn(), (req, res) => {
  Game.find({ owner: req.user._id }).then((games) => {
    console.log(games);
    console.log(req.user);
    res.render("private", { gamesList: games, user: req.user });
  });
});

router.get("/auth/github", passport.authenticate("github"));
router.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    successRedirect: "/private",
    failureRedirect: "/",
  })
);

router.get("/get-user", (req, res) => {
  const user = req.user;
  return res.status(200).json({ loggedInUser: user });
});

module.exports = router;
