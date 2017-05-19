var requireDirectory = require('require-directory'),
    os = require('os'),
    fs = require('fs')

if (process.platform == 'linux') {
    var appInstallFolder = os.homedir() + '/.chromaticApps'
}

if (process.platform == 'darwin') {
    var appInstallFolder = os.homedir() + '/.chromaticApps'
}

if (process.platform == 'win32') {
    var appInstallFolder = os.homedir() + '/Chromatic Apps'
}

if (!fs.existsSync(appInstallFolder)){
    fs.mkdirSync(appInstallFolder);
}

module.exports = requireDirectory(module, appInstallFolder)