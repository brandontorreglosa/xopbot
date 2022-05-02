const mongoose = require('mongoose');

const welcomeSchema = new mongoose.Schema({
  Welcome: {
    type: String,
  },
  GuildID: String
});

const MessageModel = mongoose.model('welcome', welcomeSchema);

module.exports = MessageModel;