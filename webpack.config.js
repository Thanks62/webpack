const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin
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
    }
},
  entry: {
    main:'./src/index.js'
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:'start'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:"production",
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
      },
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          query:{presets:['es2015','react','stage-0']}
        }
      }
    ]
  }
};