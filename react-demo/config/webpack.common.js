const path = require('path');

const paths = require('./paths');
// 定义读取路径函数
const relativePath = relativeUrl => path.resolve(__dirname, `../src/${relativeUrl}`);
// const getCustomConfig = () => {}
module.exports = {
    // getCustomConfig,
    commonResolve: {
        // 设置模块寻找的先后机制
        modules:['node_modules', paths.appNodeModules].concat(process.env.NODE_PATH.split(path.delimiter).filter(Boolean)),
        extensions: ['.js','.json', '.jsx'],
        alias: {
            kClient: relativePath('client'),
            kComponents: relativePath('common/components'),
            kImages: path.resolve(__dirname, '../public/images'),
            kPages: relativePath('common/pages'),
            kUtils: relativePath('common/utils'),
            kActions: relativePath('common/actions'),
            kReducers: relativePath('common/reducers'),
            kApi: relativePath('common/api'),
        }
    }
}