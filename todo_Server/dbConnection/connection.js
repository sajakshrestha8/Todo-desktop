const { Sequelize } = require("sequelize");

const dbConnectin = new Sequelize(
  "task_Management",
  "root",
  "sajak",
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: true,
    dialectOptions: {
      ssl: false,
    },
  }
);

module.exports = dbConnectin;