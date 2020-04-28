const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

// This is a comment !

router.get("/", (req, res) => {
  console.log("games route");
  console.log("games");

  Game.find().then((games) => {
    console.log(games);
    res.render("index", { gamesList: games });
  });
});

module.exports = router;
