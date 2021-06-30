const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
    name: { type: String, maxLength: 255 },
    username: { type: String, maxLength: 255 },
    phone: { type: String, maxLength: 255 },
    sex: { type: String, maxLength: 6 },
    email: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 255 },
    role: { type: String, default: 'user' },
    img: { type: String, default: '/img/avt/user-default.png' },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Account', Account);
