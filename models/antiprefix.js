const mongoose = require("mongoose");

const antiprefixSchema = new mongoose.Schema({
    GuildID: String,
});

const model = mongoose.model('antiprefix', antiprefixSchema);

module.exports = model;