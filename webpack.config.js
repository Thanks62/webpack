const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    main:'./src/index.js',
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'start'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:"production",
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist',
    hot:true
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|jpg|svg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
};