const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const windowStateKeeper = require('electron-window-state');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow(mainWindowState) {
  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    icon: path.join(__dirname,'..assets/icons/png/application.png'),
    autoHideMenuBar: true
  });
  mainWindow.loadURL(
    isDev ?
      'http://localhost:3000' :
      url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
      })
  );
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', () => {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });
  createWindow(mainWindowState);
  mainWindowState.manage(mainWindow);
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });
  if (mainWindow === null) {
    createWindow();
  }
  mainWindowState.manage(mainWindow);
});
app.on('resize', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow.setSize(width,height);
});
app.on('maximize', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow.setSize(width,height);
});
app.on('enter-full-screen', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  mainWindow.setSize(width,height);
});
app.on('leave-full-screen', () => {
  const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
  if (process.platform === 'win32') {
    mainWindow.removeMenu();
  }
  mainWindow.setSize(width,height);
});