const { DataTypes } = require("sequelize");
const dbConnection = require("../dbConnection/connection");

const Task = dbConnection.define(
  "Task",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    priority: {
      type: DataTypes.ENUM("Low", "Medium", "High", "Urgent"),
      defaultValue: "Low",
    },

    status: {
      type: DataTypes.ENUM("Pending", "In Progress", "Completed", "Blocked"),
      defaultValue: "Pending",
    },

    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    completedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "tasks",
  }
);

module.exports = Task;
