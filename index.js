process.title = "Chromatic"

var system = require('./system/system.js')

system.startup.checkAppInstallFolder()

if (system.startup.checkSetupFile("status") == "setupFileExists") {
  system.start
} else {
  system.setup.setup
}