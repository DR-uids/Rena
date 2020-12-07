const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  target: 'electron-renderer',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[hash].bundle.js'
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
              "presets": ["@babel/preset-react"],
              plugins: ["@babel/plugin-transform-runtime"]
            }
          }
        ],
        exclude: /node_modules/
      },{
        test: /.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 7000,
    // hot: true,
    // open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello React',
      template: path.join(__dirname,'../index.html')
    })
  ]
}
