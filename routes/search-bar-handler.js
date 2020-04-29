const express = require("express");
const router = express.Router();
const Game = require("../models/Game");
const uploadCloud = require("../config/cloudinary.js");

router.post("/search-bar-handler", (req, res, next) => {
    //console.log("Hello I'm search bar handler", req.body);
    Game.find({}).then(wholeGameDB => {
        //console.log(wholeGameDB);
        const searchTerms = req.body.searchBar;

        const gamesFound = wholeGameDB.filter(game => {
            //if (game.title && game.title.includes(searchTerms)) {
            //console.log("found something", game.title);
            //return true;
            //}

            //console.log(Object.keys(game.toJSON()));
            //const gameClean = game.toJSON();
            ////for (let key in game.toJSON()) {
            //for (let key in gameClean) {
            //    //console.log(key);
            //    //const testing = game.toJSON()[key];
            //    console.log(gameClean[key]);
            //    //console.log(gameClean[key], gameClean);
            //    return (
            //        typeof gameClean[key] == "string" &&
            //        gameClean[key] &&
            //        gameClean[key]
            //            .toLowerCase()
            //            .includes(searchTerms.toLowerCase())
            //    );
            //}
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
        //console.log(gamesFound);
        res.render("index", { gamesList: gamesFound });
    });
});

module.exports = router;
