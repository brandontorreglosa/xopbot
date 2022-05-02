const mongoose = require("mongoose");

const antilinkSchema = new mongoose.Schema({
    GuildID: String,
});

const model = mongoose.model('antilink', antilinkSchema);

module.exports = model;