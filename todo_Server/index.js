const express = require("express");
const route = require("./routes/index");

const appApi = express();
const cors = require("cors");
const dbConnection = require("./dbConnection/connection");

appApi.use(cors());
appApi.use(express.json());
appApi.use("/api", route);

dbConnection
  .authenticate()
  .then(() => console.log("connected"))
  .catch((err) => console.error("DB error", err));

dbConnection.sync();

appApi.get("/apiTest", (req, res) => res.send("hello testing from the server"));
appApi.listen(8001, () => console.log("Server running on 8001"));