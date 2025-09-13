const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
    const window = new BrowserWindow({
      width: 1000,
      height: 700,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      }
    });

    window.loadURL("http://localhost:5173");
};

ipcMain.handle("ping", async () => {
    return "pong from Server";
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== 'darwin') app.quit(); 
});
