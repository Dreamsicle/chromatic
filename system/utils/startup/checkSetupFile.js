var os = require('os'),
  fs = require('fs')


// get location of the setup file
if (process.platform === 'linux') {
  var setupFile = os.homedir() + '/.chromaticApps' + '/setup.json'
}

if (process.platform === 'darwin') {
  var setupFile = os.homedir() + '/.chromaticApps' + '/setup.json'
}

if (process.platform === 'win32') {
  var setupFile = os.homedir() + '\Chromatic Apps' + '\setup.json'
} // TODO: this is broken right now


// if it exists alreay, set the status (to be returned later) to say "it exists already"
if (fs.existsSync(setupFile)) {
  var status = 'setupFileExists'
}

// if it doesn't exist, make it and set the status (to be returned later) to say "I just made this right now"
if (!fs.existsSync(setupFile)) {
  fs.writeFile(setupFile, '{"readyForSetup": "true"}', function (err) { // prepopulate the file to keep node happy
    if (err) {
      console.log(err)
      console.log('check if check-appInstallFolder.js was run, and the apps directory is writeable')
      return
    }
    console.log("hopefully that's working")
    var status = 'setupFileCreated'
  })
}

module.exports = function (requestType) {
  if (requestType === 'status') {
    return status
  }

  if (requestType === 'location') {
    return setupFile
  }
}
