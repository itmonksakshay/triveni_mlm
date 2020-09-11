const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports ={
  watch:true,
  mode:'development',
  entry:{
    app :['babel-polyfill','./src/index.js'],
    script : './public/js/script.js',
    style : './public/css/style.css',
    all: './public/css/all.min.css'
  },
  output:{
    publicPath:'/',
    filename:'js/[name].min.js',
    path:path.resolve(__dirname,'dist')
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './images/',
            esModule:false
          }
        }]       
      },      
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './webfonts/'
          }
        }]
      }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx','.css','.mjs']
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify:{    
        removeComments:true,    
        collapseWhitespace:false    
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]

};
