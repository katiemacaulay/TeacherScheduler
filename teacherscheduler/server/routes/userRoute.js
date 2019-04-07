const express = require("express");
const router = express.Router();
const { list, show, create } = require("../Controllers/userController");


router.get("/users", list);
router.get("/user/:id", show);
router.post("/user", create);


module.exports = router;