let mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
})

module.exports = mongoose.model('user',  userSchema);
