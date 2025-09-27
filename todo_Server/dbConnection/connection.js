const { Sequelize } = require("sequelize");

const dbConnectin = new Sequelize(
  "task_Management",
  "root@localhost",
  "sajak",
  {
    host: "172.25.231.110",
    dialect: "mysql",
    port: 3306,
    logging: true,
    dialectOptions: {
      ssl: false,
    },
  }
);

module.exports = dbConnectin;