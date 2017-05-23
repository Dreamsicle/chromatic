var fs = require('fs'),
  path = require('path'),
  checkAppInstallFolder = require('../utils/startup/checkAppInstallFolder.js')

function getDirectories (srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.lstatSync(path.join(srcpath, file)).isDirectory())
}

console.log(getDirectories(checkAppInstallFolder()))

module.exports = getDirectories(checkAppInstallFolder())
