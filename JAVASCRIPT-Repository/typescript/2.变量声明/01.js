"use strict";
// 1.闭包
var a1 = 1;
// 闭包
function f() {
    var fa = 1;
    return function () { return console.log(fa); };
}
f(); // 11 11.....
// 2.变量声明提升
console.log(b);
var b = 2;
/** 3. 覆盖重复声明  */
var c1 = 1;
// var c = "a"
console.log(c1);
/** 作用域*/
for (var d = 0; d < 10; d++) {
    setTimeout(function () {
        console.log(d);
    }, 10);
}
