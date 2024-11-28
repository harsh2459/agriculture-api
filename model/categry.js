var mongoose = require('mongoose');


var categary = new mongoose.Schema({
    name: {
        type: String
    }
})

module.exports = mongoose.model('categary', categary)