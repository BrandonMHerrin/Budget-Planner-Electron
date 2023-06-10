const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const dbTest = require("./db/db-test");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "dist/budget-planner-electron/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
}

app.whenReady().then(() => {
  createWindow();
  dbTest.createTable;
  dbTest.closeDb;
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
