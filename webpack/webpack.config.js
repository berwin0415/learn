module.exports = {
    // 入口文件
    entry: {
        ickt: './js/main.js',
        hello: './js/demo.js'
    },
    // 发布文件
    output: {
        // 匹配多个文件
        filename: './pack/[name].js'
    },
    // 配置css加载机
    module: {
        // 通过rules定义加载机
        rules: [{
            // 定义特征
            test: /\.css$/,
            // 加载机顺序不要写反
            loader: 'style-loader!css-loader'
        }]
    }
};