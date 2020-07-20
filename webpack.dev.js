/* eslint-disable*/
const {merge} =require('webpack-merge');
const webpack = require('webpack');
const common =require('./webpack.common.js')
module.exports=merge(common,{
	mode:"development",
	plugins:[
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		contentBase:'./dist',
		hot:true
	}
})