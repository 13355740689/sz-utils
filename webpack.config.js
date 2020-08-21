const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'sz-utils.js',
    globalObject: 'this',
    library: 'szutils',
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}
