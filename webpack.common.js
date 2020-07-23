/* eslint-disable*/
const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');  //自动生成页面文件
const {CleanWebpackPlugin}=require('clean-webpack-plugin'); //清除未使用模块
const webpack = require('webpack');
const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin //可视化bundle插件
const UglifyJsPlugin=require('uglifyjs-webpack-plugin') //压缩js 
const ExtractTextPlugin=require('extract-text-webpack-plugin') //分离css，webpack4.0以上需要使用beta版本
const miniCssExtractPlugin=require('mini-css-extract-plugin') //分离css,antd与index分开打包
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩CSS
module.exports = {
  optimization: {
    splitChunks: {
        cacheGroups: {
            react:{
              name:'react',
              test:(module)=>{
                return /react|redux|react-redux/.test(module.context);
              },
              chunks:'initial',
              priority:10
            },
            antd:{
              name:'antd',
              test:(module)=>{
                return /antd/.test(module.context)
              },
              chunks:'initial',
              priority:8
            },
            commons: {
              name: 'common',
              chunks: 'initial',
              priority: 2,
              minChunks: 2,
            },
        }
    },
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
},
devtool:'inline-source-map',
  entry: {
    index:'./src/index.js'
  },
  plugins:[
    //new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'start',
      filename:'../view/index.html'
    }),
    //new webpack.NamedModulesPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin,
    new miniCssExtractPlugin({filename: '[name].css'})
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/public')
  },
  // mode:"production",
  // devServer:{
  //   contentBase:'./dist',
  //   hot:true
  // },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[miniCssExtractPlugin.loader,
          {loader:'css-loader'}
        ]
      },
      {
        test:/\.(png|jpg|svg|gif)$/,
        use:[
          'file-loader'
        ]
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          query:{presets:['es2015','react','stage-0']}
        }
      }
    ]
  }
};