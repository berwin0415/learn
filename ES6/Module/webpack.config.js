// 配置
module.exports = {
	// 入口文件
	entry: './module/main.js',
	// 发布文件
	output: {
		filename: './pack/ickt.js'
	},
	// 模块
	module: {
		rules: [
			// 加载机
			{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015'
				// loader: 'babel-loader',
				// query: {
				// 	presets: ['es2015']
				// }
			}
		]
	}
}