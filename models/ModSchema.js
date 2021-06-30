const mongoose = require("mongoose");

const ModSchema = new mongoose.Schema({
  guildID: String,
  userID: String,
  punishments: Array,
  warnings: Array,
});

const model = mongoose.model("Moderation", ModSchema);

module.exports = model;