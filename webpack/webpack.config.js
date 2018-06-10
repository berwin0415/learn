var webpack = require('webpack');
var UglifyJsPlugins = webpack.optimize.UglifyJsPlugin;

module.exports = {
    // 入口文件
    entry: './js/main.js',
    // 发布文件
    output: {
        // 匹配多个文件
        filename: './pack/ickt.js'
    },
    // 配置css加载机
    module: {
        // 通过rules定义加载机
        rules: [{
            // 定义特征
            test: /\.css$/,
            // 加载机顺序不要写反
            loader: 'style-loader!css-loader'
        },
        {
            //图片加载机
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader?limit=4096'
        },
        {
            //ts加载机
            test: /\.ts$/,
            loader: 'ts-loader'
        },
        {
            //es6加载机
            test: /\.es$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new UglifyJsPlugins({
            mangle: false
        })
    ]
};