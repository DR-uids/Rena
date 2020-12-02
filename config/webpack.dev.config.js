const path = require('path');

module.exports = {
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '1.bundle.js'
  }
}