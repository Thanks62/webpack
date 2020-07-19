const {merge} = require('webpack-merge');
const webpack = require('webpack');
const common =require('./webpack.common.js')
// module.exports=merge(common,{
// 	mode:"production",
// 	plugins:[
// 		new webpack.DefinePlugin({
// 			'process.env.NODE_ENV':JSON.stringify('production')
// 		})
// 	]
// })
const proConfig={
	mode:"production",
		plugins:[
			new webpack.DefinePlugin({
				'process.env.NODE_ENV':JSON.stringify('production')
			})
		]
}
module.exports = merge(common, proConfig);