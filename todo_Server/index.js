const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const express = require("express");

const appApi = express();
const cors = require("cors");

appApi.use(cors());

appApi.get("/apiTest", (req, res) => res.send("hello testing from the server"));
appApi.listen(8001, () => console.log("Server running on 8001"));

function createWindow() {
  const window = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  window.loadURL("http://localhost:5173");
}

ipcMain.handle("ping", async () => "pong from Server");

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
