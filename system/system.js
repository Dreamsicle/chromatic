// get tree of all system components to avoid being a human compiler
var requireDirectory = require('require-directory')
module.exports = requireDirectory(module)
