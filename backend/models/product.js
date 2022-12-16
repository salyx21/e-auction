const mongoose = require('mongoose');

const prodSchema = mongoose.Schema({
    name: String,
    description: String,
    detailedDesc: String,
    category: String,
    price: Number,
    endDate: String,
    bidHistory: [{price: Number, name: String, email: String, mobile: String}]
});

module.exports = mongoose.model('Product', prodSchema); 