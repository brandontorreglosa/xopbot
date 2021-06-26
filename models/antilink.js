const mongoose = require("mongoose");

const antilinkSchema = new mongoose.Schema({
    GuildID: String,
});

const model = mongoose.model('anitlink', antilinkSchema);

module.exports = model;