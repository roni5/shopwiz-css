const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    teaser: String,
    body: String,
    status: {
        type: Number,
        default: 1
      },
    created: {
        type: Date,
        required: true,
        default: new Date()
    }
});

mongoose.model('Products', ProductSchema);

module.exports = mongoose.model('Products');