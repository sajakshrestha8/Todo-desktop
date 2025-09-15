const app = require("express");
const route = app.Router();
const TaskRoute = require("./task.route");

route.use("/task", TaskRoute);

module.exports = route;