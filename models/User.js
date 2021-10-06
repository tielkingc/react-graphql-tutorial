const { model, Schema } = require('mongoose');

const userScheama = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
});

module.exports = model('User', userScheama);