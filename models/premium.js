const mongoose = require("mongoose");

module.exports = mongoose.model(
    "premium",
    new mongoose.schema({
        User: String,
    })
);