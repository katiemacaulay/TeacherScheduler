const express = require("express");
const router = express.Router();
const { list, show, create, login } = require("../Controllers/userController");


router.get("/users", list);
router.get("/user/:id", show);
router.post("/user", create);
router.post("/user", create);
router.post("/login", login);


module.exports = router;