const mongoose = require("mongoose");

const invschema = new mongoose.Schema({
    Guild: String,
    User: String,
    Inventory: Object
});

const model = mongoose.model("InvSchema", invschema);

module.exports = model;