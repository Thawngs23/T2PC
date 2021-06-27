const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Event = new Schema({
    name: String,
    index: Number,
    img: String,
    link: String,
    createAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', Event);
