const mongoose = require('mongoose');

const LeaveMsgSchema = new mongoose.Schema({
  ByeMsg: {
    type: String
  },
  GuildID: String
});

const ByeModel = mongoose.model('leavemsg', LeaveMsgSchema);

module.exports = ByeModel;