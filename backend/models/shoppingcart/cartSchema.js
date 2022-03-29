const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({

    userId: { type: String, required: true},
    cart: { type: Array, required: true}
    
}, { timestamps: true})

module.exports = mongoose.model('Cart', cartSchema)