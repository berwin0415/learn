module.exports = {
    entry: './modules/main.js',
    output: {
        filename: './pack/index.js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}