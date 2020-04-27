const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: String,
        password: String,
        githubID: String
    },
    {
        // also using for the Game Modell automatic created date
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
