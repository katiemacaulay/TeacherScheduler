const express = require("express");
const router = express.Router();
const { list, show, login, create } = require("../controllers/userController");
const { coursesGet, coursesAdd, remove } = require("../controllers/scheduleController");
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

router.get("/api/user:id", isAuthenticated, list);
router.get("/api/users", isAuthenticated, show);
router.post("/api/user", create);
router.post("/api/login", login);
router.get('/api/schedule', isAuthenticated, coursesGet);
router.post('/api/schedule/add', isAuthenticated, coursesAdd);
router.delete('/api/schedule/:id', isAuthenticated, remove);

module.exports = router;