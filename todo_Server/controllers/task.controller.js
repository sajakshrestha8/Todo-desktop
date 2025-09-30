const { where } = require("sequelize");
const Task = require("../models/task");

const TaskController = {
  AddTask: async (req, res) => {
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
      const id = parseInt(req.params.id, 10);

      console.log("-------id", id);

      if(!id) return;

      const { title, description, priority, status, dueDate } = req.body;

      console.log("Request bodyyy -------->", req.body);

      if (!title || !description || !priority || !status || !dueDate) {
        return res.status(400).json({ message: "All fields are required." });
      }

      console.log("Yeta bata chai return vayo jasto xa lamoo");

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

      console.log({updatedTask});

      res.status(200).send({message: "Task Updated Successfully", updatedTask});
    } catch (error) {
      console.log("Lamo pakkai catch ma aako hunxa parxa randi ko ban");
      res.status(404).send({message: "Something went wrong", error});
    }
  },

  DeleteTask: async (req,res) => {
    try {
      const { id } = req.params;

      if (!id) res.status(400).send({ message: "Task ID is required" });

      const deletedTask = await Task.destroy({where: {id}});
      
      if (deletedTask === 0) res.status(404).send({ message: "Task not found" });

      res.status(200).send({message: "Task deleted Successfully"});
    } catch (error) {
      res.send({message: error})
    }
  }
};

module.exports = TaskController;
