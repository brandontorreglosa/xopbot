const mongoose = require("mongoose");

const bankschema = new mongoose.Schema({
  id: String,
  bank: Number
});

const model = mongoose.model("BankSchema", bankschema);

module.exports = model;