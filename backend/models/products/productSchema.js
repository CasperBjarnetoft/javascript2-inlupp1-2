const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    image:       { type: String, required: true },
    model:       { type: String, required: true, unique: true},
    year:        { type: Number, required: true},
    price:       { type: String, required: true },
    description: { type: String, required: true }
    
}, { timestamps: true })

module.exports = mongoose.model('Model', productSchema)