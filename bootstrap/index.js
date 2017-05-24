const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

process.title = 'Chromatic'

var system = require('../system/system.js')

system.utils.startup.checkAppInstallFolder() // check if the stateful data storage exists. if it doesn't, make it

// check if our preferences file exists
if (system.utils.startup.checkSetupFile('status') === 'setupFileExists') {
  // if it does, then continue to the main app
  var pagePath = '../Campus/index.html'
}

if (system.utils.startup.checkSetupFile('status') === 'setupFileCreated') {
  // if it didn't and was made, continue to setup
  var pagePath = '../system/setup/resources/index.html'
}


// bypass sandboxing restraints so we can read apps installed on the stateful storage
import { addBypassChecker } from 'electron-compile'
addBypassChecker((filePath) => {
  return filePath.indexOf(app.getAppPath()) === -1
})

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({backgroundColor: '#1c2e34', title: 'Chromatic'})
  // win.setMenu(null);

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, pagePath),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
