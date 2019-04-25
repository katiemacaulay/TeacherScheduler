const scheduleModel = require("../models/scheduleModel")


exports.list = function list(request, response) {
    scheduleModel.find().exec().then((classes)=>{
        classes.filter(user => {
            // I need to filter through each class for the same id
            if(user.id){
                return response.json(classes);
            } else {
                console.log('this user has no courses made')
            }
        })
    })
}

exports.create = function create(request, response) {
    console.log(request.body)
    const newclass = new scheduleModel({
        courseName: request.body.courseName,
        days: request.body.days,
        rotation: request.body.rotation,
        startTime: request.body.startTime,
        endTime: request.body.endTime,
        id: request.body.id
    })
    newclass.save().then(saveclass => {
        console.log(saveclass)
    })
    response.send(200)
}


