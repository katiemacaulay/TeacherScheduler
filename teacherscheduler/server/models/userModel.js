let mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,
    state: String,
    schoolType: String,
    schoolSchedule: String
})

module.exports = mongoose.model('user',  userSchema);
