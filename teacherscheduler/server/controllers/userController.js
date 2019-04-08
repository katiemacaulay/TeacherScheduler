const userModel = require("../Models/userModel")


exports.list = function list(request, response) {
    userModel.find().exec().then((users)=>{
        return response.json(users);
    })
}

exports.show = function show(request, response) {
    userModel.findById(request.params.id).exec().then((user)=>{
        return response.json(user);
    })
}

exports.create = function create(request, response) {
    console.log(request.body)
    const newuser = new userModel({
        id: request.body.id,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        username: request.body.username,
        password: request.body.password,
        state: request.body.state,
        schoolType: request.body.schoolType,
        schoolSchedule: request.body.schoolSchedule
    })
    newuser.save().then(saveduser => {
        console.log(saveduser)
    })
    response.send(200)
}