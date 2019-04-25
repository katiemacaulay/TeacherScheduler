let mongoose = require('mongoose');


let scheduleSchema = new mongoose.Schema({
        courseName: String,
        days: String,
        rotation: Number,
        startTime: String,
        endTime: String,
        id: Number
})

module.exports = mongoose.model('schedule',  scheduleSchema);
