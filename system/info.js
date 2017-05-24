var pjson = require('../package.json'),
  os = require('os')

exports.chromatic = pjson.version
exports.chrome = process.versions.chrome
exports.OS = os.release()
// TODO: add more info fields, such as OS, codename, node version, system specs, etc.
