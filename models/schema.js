const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: String,
  coins: Number
});

const model = mongoose.model("Schema", schema);

module.exports = model;