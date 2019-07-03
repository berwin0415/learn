const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './js/1.js',
    output: {
        path: __dirname + '/dist/js',
        filename: '1.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    // plugins:[new HtmlWebpackPlugin({
    //     template:__dirname + '/index.html',
    //     inject:true,
    //     minify:{
    //         minifyJS:false
    //     }
    // })]
    devtool: 'source-map'
};
