const mongoose = require('mongoose');

const GiveawaySchema = new mongoose.Schema({
    guildId: String,
    channelId: String,
    hostedBy: String,
    messageId: String,
    startsOn: Date,
    endsOn: Date,
    winners: Number,
    hasEnded: String,
    duration: Number,
    prize: String
});

module.exports = mongoose.model('Giveaway', GiveawaySchema);