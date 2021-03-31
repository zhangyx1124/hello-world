const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset']

}
