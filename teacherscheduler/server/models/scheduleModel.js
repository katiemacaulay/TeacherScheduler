let mongoose = require('mongoose');


let scheduleSchema = new mongoose.Schema({
        courseName: String,
        days: String,
        rotation: Number,
        rotationDay: String,
        startTime: String,
        endTime: String,
        userid: String
})

module.exports = mongoose.model('schedule',  scheduleSchema);
