let mongoose = require('mongoose');


let scheduleSchema = new mongoose.Schema({
        courseName: String,
        days: Array,
        rotation: Number,
        startTime: String,
        endTime: String,
        id: Number
})

module.exports = mongoose.model('schedule',  scheduleSchema);
