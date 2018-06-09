module.exports = {
    entry : './Module/main.es',
    output :{
        filename : './pack/ickt.js'
    },
    module: {
        rules: [
            {
                test: /\.es$/,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};