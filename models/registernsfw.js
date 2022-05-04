const mongoose = require("mongoose");

    const nsfwSchema = new mongoose.Schema({
        User: String,
    });

const model = mongoose.model("nsfw", nsfwSchema);

module.exports = model;