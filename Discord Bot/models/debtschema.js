const mongoose = require("mongoose");

const debtschema = new mongoose.Schema({
  id: String,
  debt: Number
});

const model = mongoose.model("DebtSchema", debtschema);

module.exports = model;