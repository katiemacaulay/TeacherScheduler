const userModel = require("../models/userModel")


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
        password: request.body.password
    })
    newuser.save().then(saveduser => {
        console.log(saveduser)
    })
    response.sendStatus(200)
}


exports.login = function login(request, response) {
    console.log('in login body', request.body)
    userModel.findOne({
        username: request.body.username, 
        password: request.body.password
    }, function(err, doc){
        console.log('in db callback')
        if(err || !doc){
            console.log("not a real user")
            response.sendStatus(403)
            return
        }
        response.cookie('userid', doc._id, { 
            maxAge: 1000 * 60 * 60, 
            httpOnly: true 
        });
        console.log("you're logged in")
        response.sendStatus(200)

    })
    
}

