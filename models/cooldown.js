const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    userId: String,
    cmd: String,
    time: Number,
    cooldown: Number,
})
const model = mongoose.model('cooldown', schema);

module.exports = model;