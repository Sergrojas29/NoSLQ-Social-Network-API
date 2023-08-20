const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/SocialAppDB');

module.exports = mongoose.connection;