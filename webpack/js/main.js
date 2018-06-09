// 使用header和footer
var header = require('./header.js');
var footer = require('./footer.js');
// 引入css资源
require('./header.css');

// main中实现自己的逻辑
document.write('<h1>main 456</h1>');
// 使用header和footer
header();
footer.show();

var img1 = require('./arrows.png');
var img2 = require('./bg1.jpg');

var demo1 = new Image();
var demo2 = new Image();

document.body.appendChild(demo1);
document.body.appendChild(demo2);

demo1.src = img1;
demo2.src = img2;