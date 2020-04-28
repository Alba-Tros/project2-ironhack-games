const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    title: String,
    gameUrl: String,
    gitHubUrl: String,
    author: String,
    bootcamp: String,
    description: String,
    gameScreenshot: [{ String }],
    rating: Number,
    imgName: String,
    imgPath: String,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
