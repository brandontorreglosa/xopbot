const mongoose = require("mongoose");

const antiwordsSchema = new mongoose.Schema({
    GuildID: String,
});

const model = mongoose.model('anitlink', antiwordsSchema);

module.exports = model;