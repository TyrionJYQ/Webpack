var path = require('path')
var webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')
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
                  require('autoprefixer')()
                  // require('postcss-cssnext')()

                ] 
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              outputPath: '/dist',
              useRelativePath: true
            }
          },
          {
            loader: 'img-loader',
            options: {
              pngquant: {
                quality: 40
              }
            }

          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',

    }),
    new PurifyCSS({
      paths: glob.sync([
        path.join(__dirname, './index.html'),
        path.join(__dirname, './src/*.js'),
        // path.join(__dirname, './src/css/*.css')
      ])
    }),
    new webpack.optimize.UglifyJsPlugin() 
  ]
}