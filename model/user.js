var mongoose = require('mongoose');

var userschma = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    purchage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "agriitem"
    }

})

module.exports = mongoose.model('user', userschma)