const express = require("express");
const TaskController = require("../controllers/task.controller");
const router = express.Router();

router.post("/addtask", TaskController.AddTask);

module.exports = router;
