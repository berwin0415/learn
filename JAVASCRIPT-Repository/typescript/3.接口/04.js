"use strict";
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare = createSquare({ colour: 'red', width: 100 }) // error: 'colour' 不存在于类型 'SquareConfig' 中
// interface SquareConfig {
//     color?: string
//     width?: number
//     [propName: string]: any
// }
