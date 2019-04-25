const express = require("express");
const router = express.Router();
const { list, create } = require("../controllers/scheduleController");

router.get('/schedule', list);
router.post('/schedule/add', create);

module.exports = router; 