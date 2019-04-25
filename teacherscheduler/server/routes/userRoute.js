const express = require("express");
const router = express.Router();
const { list, show, login, create } = require("../controllers/userController");
const userModel = require("../models/userModel.js")


function isAuthenticated(req, res, next) {
    if (req.cookies.userid) {
        userModel.findById(req.cookies.userid, function(err, doc){
            if(err || !doc){
                res.sendStatus(403)
                return
            }
            next()
        })
    } else {
        res.sendStatus(403)
        return
    }
}

router.get("/users", isAuthenticated, list);
router.get("/user/:id", isAuthenticated, show);
router.post("/user", create);
router.post("/login", login);

// router.post("/schedule",  list); 
// router.get("/schedule/:id", show);
// 


module.exports = router;