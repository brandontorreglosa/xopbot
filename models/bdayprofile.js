const mongoose = require('mongoose');

const bdaySchema = new mongoose.Schema({
    _id: String,
    data: {
    birthday: String,
    }
})

const model = mongoose.model('bday', bdaySchema)

module.exports = model;