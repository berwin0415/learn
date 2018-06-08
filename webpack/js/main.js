// 使用header和footer
var header = require('./header.js');
var footer = require('./footer.js')
// 引入css资源
require('./header.css');

// main中实现自己的逻辑
document.write('<h1>main 456</h1>')
// 使用header和footer
header();
footer.show();