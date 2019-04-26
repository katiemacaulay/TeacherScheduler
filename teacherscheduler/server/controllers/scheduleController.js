const scheduleModel = require("../models/scheduleModel")


exports.coursesGet = function courses(request, response) {
    scheduleModel.find().exec().then((classes)=>{
        const c = classes.filter(course => {
            return course.userid === request.cookies.userid
        }) 
        if (!c) {
            return response.send(404)
        }
        return response.json(c);
    })
}

exports.coursesAdd = function add(request, response) {
    console.log(request.body)
    const newclass = new scheduleModel({
        courseName: request.body.courseName,
        days: request.body.days,
        rotation: request.body.rotation,
        startTime: request.body.startTime,
        endTime: request.body.endTime,
        userid: request.cookies.userid
    })
    newclass.save().then(saveclass => {
        console.log(saveclass)
        response.send(200)
    }).catch(err => {
        response.send(500)
    })
}


