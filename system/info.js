var pjson = require('../package.json')

module.exports = function (requestType) {
  if (requestType === 'version') {
    return pjson.version
  }
}
// TODO: add more info fields, such as OS, codename, node version, system specs, etc.
