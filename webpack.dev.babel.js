/*
* @Author: KenyLiangwc
* @Date:   2018-03-27 15:01:57
* @Last Modified time: 2018-03-28 16:52:45
*/
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
	// optimization: {
	//    	splitChunks: {
	//      	chunks: 'all',
	//      	name: 'common',
	//    	},
	//    	runtimeChunk: {
	//      	name: 'manifest',
	//    	}
	// },
	output: {
		publicPath: "dist/",
		chunkFilename: "c.[name].[chunkhash:4].js",
		filename: "main.js"
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				options: {
					presets: ["env"]
				}
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.html?$/,
				loader: "raw-loader"
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: "url-loader?limit=8192"
			}
		]
	},
	resolve: {
		extensions: ['.js','.vue','.json']
	},
	devtool: "source-map",
	// plugins: [
	// 	new HtmlWebpackPlugin({
	// 		template: './index.html',
	// 		filename: 'aaa.html'
	// 	})
	// ]
}