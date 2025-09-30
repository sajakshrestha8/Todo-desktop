const express = require("express");
const TaskController = require("../controllers/task.controller");
const router = express.Router();

router.post("/addtask", TaskController.AddTask);
router.get("/alltasks", TaskController.GetAllTask);
router.put("/updatetasks/:id", TaskController.EditTask);
router.delete("/deletetasks/:id", TaskController.DeleteTask);

module.exports = router;
