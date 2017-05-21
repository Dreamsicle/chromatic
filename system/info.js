var pjson = require('../package.json')
module.exports = function(requestType) {
    if (requestType == "version") {
        return pjson.version
    }
}