/*
* @Author: KenyLiangwc
* @Date:   2018-03-27 15:01:57
* @Last Modified time: 2018-03-27 18:07:22
*/
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export default {
	output: {
		publicPath: "dist/"
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
				use: "vue-loader"
			},
			{
				test: /\.css$/,
				use: "style-loader!css-loader"
			},
			{
				test: /\.html?$/,
				use: "raw-loader"
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
	devtool: "source-map"
}