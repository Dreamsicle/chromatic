var os = require('os'),
    fs = require('fs')

if (process.platform == 'linux') {
    var setupFile = os.homedir() + '/.chromaticApps' + '/setup.json'
}

if (process.platform == 'darwin') {
    var setupFile = os.homedir() + '/.chromaticApps' + '/setup.json'
}

if (process.platform == 'win32') {
    var setupFile = os.homedir() + '\Chromatic Apps' + '\setup.json'
}

if (fs.existsSync(setupFile)) {
    var status = "setupFileExists"
}

if (!fs.existsSync(setupFile)){
    fs.writeFile(setupFile, "this is working", function(err) {
        if(err) {
            console.log(err)
            console.log('check if check-appInstallFolder.js was run, and the apps directory is writeable')
            return
        }
        console.log("hopefully that's working")
        var status = "setupFileCreated"
    }) 
} 

module.exports = function(requestType) {
    if (requestType == "status") {
        return status
    }

    if (requestType == "location") {
        return setupFile
    }
}