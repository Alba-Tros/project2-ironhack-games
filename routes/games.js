const express = require("express");
const router = express.Router();
const Game = require("../models/Game");
const uploadCloud = require("../config/cloudinary.js");

// This is a comment !

router.get("/games/edit/:gameId", (req, res, next) => {
  Game.findById(req.params.gameId).then((game) => {
    res.render("editGame", { game: game });
  });
});

router.get("/games/addGame", (req, res) => {
  res.render("addGame");
});

router.post("/games/delete/:gameId", (req, res, next) => {
  Game.findOneAndDelete({ _id: req.params.gameId, owner: req.user._id })
    .then((deletedGame) => {
      console.log(`Success ${deletedGame} was deleted from the database`);
      res.redirect(`/private`);
    })
    .catch((err) => {
      next(err);
    });
});

router.post(
  "/games/edit/:gameId",
  uploadCloud.single("photo"),
  (req, res, next) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const bootcamp = req.body.bootcamp;
    const github = req.body.githubprofile;
    const link = req.body.link;
    let imgPath = ``;
    let imgName = ``;
    if (req.file) {
      imgPath = req.file.url;
      imgName = req.file.originalname;
    }

    Game.findOneAndUpdate(
      { _id: req.params.gameId, owner: req.user._id },
      {
        title: title,
        gameUrl: link,
        author: author,
        description: description,
        bootcamp: bootcamp,
        gitHubUrl: github,
        imgPath: imgPath,
        imgName: imgName,
      }
    )
      .then((game) => {
        console.log(`Success ${game} was edited!`);
        if (game) {
          res.redirect(`../${game._id}`);
        }
        res.redirect(`/`);
      })
      .catch((err) => {
        res.render("something went wrong");
      });
  }
);

router.post("/", uploadCloud.single("photo"), (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect("/");
    return;
  }

  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const bootcamp = req.body.bootcamp;
  const github = req.body.githubprofile;
  const link = req.body.link;
  let imgPath = ``;
  let imgName = ``;
  if (req.file) {
    imgPath = req.file.url;
    imgName = req.file.originalname;
  } else if ((req.file = "")) {
    res.redirect(`games/${game._id}`);
  }

  Game.create({
    title: title,
    gameUrl: link,
    author: author,
    description: description,
    bootcamp: bootcamp,
    gitHubUrl: github,
    imgPath: imgPath,
    imgName: imgName,
    owner: req.user._id,
  })
    .then((game) => {
      console.log(`Success ${game} was added to the database`);
      res.redirect(`games/${game._id}`);
    })
    .catch((err) => {
      res.render("something went wrong");
    });
});

router.get("/", (req, res) => {
  Game.find().then((games) => {
    res.render("index", { gamesList: games });
  });
});

router.get("/games/:gamesId", (req, res) => {
  const gamesId = req.params.gamesId;

  Game.findById(gamesId).then((game) => {
    let gameOwner = false;
    if (req.user && req.user._id.equals(game.owner)) {
      gameOwner = true;
    }
    res.render("gameDetail", { game: game, user: gameOwner });
  });
});

module.exports = router;
