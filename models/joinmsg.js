const mongoose = require('mongoose');

const JoinMsgSchema = new mongoose.Schema({
  JoinMsg: {
    type: String
  },
  GuildID: String
});

const MessageModel = mongoose.model('joinmsg', JoinMsgSchema);

module.exports = MessageModel;