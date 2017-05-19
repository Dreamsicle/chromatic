var requireDirectory = require('require-directory'),
    os = require('os')

if (process.platform == 'linux') {
    var appInstallFolder = os.homedir() + '/.chromaticApps'
}

if (process.platform == 'darwin') {
    var appInstallFolder = os.homedir() + '/.chromaticApps'
}

if (process.platform == 'win32') {
    var appInstallFolder = os.homedir() + '/Chromatic Apps'
}

module.exports = requireDirectory(module, appInstallFolder)