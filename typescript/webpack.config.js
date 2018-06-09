
// 配置
module.exports = {
    // 入口文件
    entry: './module/main.ts',
    // 发布文件
    output: {
        filename: './pack/ickt.js'
    },
    // 模块
    module: {
        // 加载机
        rules: [
            // ts加载机
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};