const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, maxLength: 255 },
    img: { type: String, maxLength: 255 },
    type: { type: String, maxLength: 255 },
    producer: { type: String, maxLength: 6 },
    price: { type: Number },
    createAt: { type: Date, default: Date.now },
    updateAt:  { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', Product);
