const express = require("express");
const router = express.Router();
const Game = require("../models/Game");
const uploadCloud = require("../config/cloudinary.js");

// This is a comment !

router.get("/games/addGame", (req, res) => {
    res.render("addGame");
});

router.post("/", uploadCloud.single("photo"), (req, res, next) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    const bootcamp = req.body.bootcamp;
    const github = req.body.githubprofile;
    const link = req.body.link;
    const imgPath = req.file.url;
    const imgName = req.file.originalname;

    Game.create({
        title: title,
        gameUrl: link,
        author: author,
        description: description,
        bootcamp: bootcamp,
        gitHubUrl: github,
        imgPath: imgPath,
        imgName: imgName
    })
        .then(game => {
            console.log(`Success ${game} was added to the database`);
            res.redirect(`games/${game._id}`);
        })
        .catch(err => {
            res.render("something went wrong");
        });
});

router.get("/", (req, res) => {
    console.log("games route");
    console.log("games");

    Game.find().then(games => {
        //console.log(games);
        res.render("index", { gamesList: games });
    });
});

router.get("/games/:gamesId", (req, res) => {
    const gamesId = req.params.gamesId;
    console.log("gamedateail route");

    Game.findById(gamesId).then(game => {
        console.log(game);
        res.render("gameDetail", { game: game });
    });
});

module.exports = router;
