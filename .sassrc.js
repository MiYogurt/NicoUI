const { resolve } = require('path')
const cwd = process.cwd()

module.exports = {
  includePaths: [resolve(cwd, 'node_modules'), resolve(cwd, 'src')]
}
