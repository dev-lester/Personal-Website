const mongoose = require('mongoose');
// const marked = require('marked');
// const slugify = require('slugify');


// creating Schema models
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('User', UserSchema);