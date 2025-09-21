const { where } = require("sequelize");
const Task = require("../models/task");

const TaskController = {
  AddTask: async (req, res) => {
    console.log("Fuck this shit mannnnnnnnnn");
    try {
      console.log(req);
      const { title, description, priority, status, dueDate } = await req.body;

      const createdTask = await Task.create({
        title,
        description,
        priority,
        status,
        dueDate,
      });

      res
        .status(200)
        .send({ message: "Task added successfully", data: createdTask });
    } catch (error) {
      console.log(error);
    }
  },

  GetAllTask: async (req, res) => {
    try {
      const tasks = await Task.findAll();
      res.status(200).send({ data: tasks });
    } catch (error) {
      console.log("Get all task bata aako error aaile lai ", error);
    }
  },

  EditTask: async (req, res) => {
    try {
      const { id } = await req.params;

      if(!id) return;

      const { title, description, priority, status, dueDate } = await req.body;

      if (!title || !description || !priority || !status || !dueDate) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const updatedTask = await Task.update(
        {
          title,
          description,
          priority,
          status,
          dueDate,
        },
        { where: { id } }
      );

      console.log(updatedTask);
    } catch (error) {}
  },
};

module.exports = TaskController;
