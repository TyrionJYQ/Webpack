var path = require('path')
var webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader'
          },
          use:[
            {
              loader: 'css-loader'
              // options: {
              //   localIdentName: '[path][name]_[local]_[hash:base64:5]'
              // }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins:[
                  // require('autoprefixer')(),
                  require('postcss-cssnext')()

                ] 
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',

    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}