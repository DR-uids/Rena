const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '1.bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js|jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": ["@babel/preset-env"],
              "presets": ["@babel/preset-react"],
              "presets": ["@babel/preset-typescript"],
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}