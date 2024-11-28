var mongoose = require('mongoose');

var itemschma = new mongoose.Schema({
    name: {
        type: String,
    },
    price: {
        type: Number
    },
    categary: {
        type: String,
        // ref: "agricategary"
    }
})

module.exports = mongoose.model('item', itemschma)