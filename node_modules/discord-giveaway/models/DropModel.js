const mongoose = require('mongoose');

const DropSchema = new mongoose.Schema({
    guildId: String,
    channelId: String,
    prize: String,
    createdBy: String,
    timeCreated: Date,
    position: Number
});

module.exports = mongoose.model('Drop', DropSchema);