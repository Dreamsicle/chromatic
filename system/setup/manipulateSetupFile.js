var checkSetupFile = require('../utils/startup/checkSetupFile.js'),
    setupFileLocation = checkSetupFile("location"),
    setupFile = require(setupFileLocation)

console.log(setupFile)