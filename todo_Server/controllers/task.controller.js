const Task = require("../models/task");

const TaskController = {
    AddTask: async (req, res) => {
        try {
            const {title, description, priority, status, dueDate} = req.body;

            const createdTask = Task.create({
                title,
                description,
                priority,
                status,
                dueDate
            })

            console.log(createdTask);

            res.status(200).send({message: "Task added successfully", data: createdTask});
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TaskController;