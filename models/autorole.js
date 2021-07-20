const mongoose = require("mongoose")

const roleSchema = new mongoose.Schema({
    Role: {
        type: String,
        unique: true,
        required: true,
    },
    GuildID: String,
});

const roleModel = mongoose.model("autorole", roleSchema)

module.exports = roleModel;