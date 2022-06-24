const mongoose = require("mongoose");

    const premiumSchema = new mongoose.Schema({
        User: String,
    });

const model = mongoose.model("premium", premiumSchema);

module.exports = model;