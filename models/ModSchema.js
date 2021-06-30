const mongoose = require("mongoose");

const ModSchema = new mongoose.Schema({
  guildID: String,
  userID: String,
  punishments: Array
});

const model = mongoose.model("Moderation", ModSchema);

module.exports = model;