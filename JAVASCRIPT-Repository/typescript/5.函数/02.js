"use strict";
// 函数类型
function add(x, y) {
    return x + y;
}
// const myAdd = (x: number, y: number): number => x + y
//书写完整函数类型
// const myAdd: (baseValue: number, increment: number) => number = (x: number, y: number): number => x + y;
//推断类型
var myAdd = function (x, y) { return x + y; };
