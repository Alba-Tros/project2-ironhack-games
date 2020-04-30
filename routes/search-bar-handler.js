const express = require("express");
const router = express.Router();
const Game = require("../models/Game");
const uploadCloud = require("../config/cloudinary.js");

router.post("/search-bar-handler", (req, res, next) => {
    Game.find({}).then(wholeGameDB => {
        const searchTerms = req.body.searchBar;

        const gamesFound = wholeGameDB.filter(game => {
            return (
                (game.title &&
                    game.title
                        .toLowerCase()
                        .includes(searchTerms.toLowerCase())) ||
                (game.author &&
                    game.author
                        .toLowerCase()
                        .includes(searchTerms.toLowerCase())) ||
                (game.bootcamp &&
                    game.bootcamp
                        .toLowerCase()
                        .includes(searchTerms.toLowerCase())) ||
                (game.description &&
                    game.description
                        .toLowerCase()
                        .includes(searchTerms.toLowerCase())) ||
                (game.gameURL &&
                    game.gameURL
                        .toLowerCase()
                        .includes(searchTerms.toLowerCase())) ||
                (game.gitHubUrl &&
                    game.gitHubUrl
                        .toLowerCase()
                        .includes(searchTerms.toLowerCase()))
            );
        });
        res.render("index", { gamesList: gamesFound });
    });
});

module.exports = router;
