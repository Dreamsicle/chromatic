var os = require('os'),
  fs = require('fs')

// get location of the stateful storage
if (process.platform === 'linux') {
  var appInstallFolder = os.homedir() + '/.chromaticApps'
}

if (process.platform === 'darwin') {
  var appInstallFolder = os.homedir() + '/.chromaticApps'
}

if (process.platform === 'win32') {
  var appInstallFolder = os.homedir() + '\\Chromatic Apps'
} // TODO: fix it


// if it doesn't exist, make it exist
if (!fs.existsSync(appInstallFolder)) {
  fs.mkdirSync(appInstallFolder)
}

module.exports = function () {
  return appInstallFolder
}
