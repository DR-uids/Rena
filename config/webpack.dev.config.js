const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '1.bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              "presets": ["@babel/preset-env"],
              "presets": ["@babel/preset-react"]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
}