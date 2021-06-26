const mongoose = require('mongoose');

const goodbyeSchema = new mongoose.Schema({
  Bye: {
    type: String,
  },
  GuildID: String
});

const MessageModel = mongoose.model('goodbye', goodbyeSchema);

module.exports = MessageModel;