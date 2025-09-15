const express = require("express");
const TaskController = require("../controllers/task.controller");
const router = express.Router();

router.post("/addtask", TaskController.AddTask);
router.get("/alltasks", TaskController.GetAllTask);

module.exports = router;
