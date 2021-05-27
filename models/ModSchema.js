const mongoose = require("mongoose");

const ModSchema = new mongoose.Schema({
  GuildID: String,
  UserID: String,
  Punishments: Array
});

const model = mongoose.model("Moderation", ModSchema);

module.exports = model;