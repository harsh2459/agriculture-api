var mongoose = require('mongoose');

var cart = new mongoose.Schema({
    user_id: {
        type: String,
        ref: "agriuser"
    },   
    product_id: {
        type: String,
        ref: "agriitem"
    },
    price:{
        type: Number

    },
    total_item: {
        type: Number
    },
    total: {
        type: Number
    }
})

module.exports = mongoose.model('cart', cart)