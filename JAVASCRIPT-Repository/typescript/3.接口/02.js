"use strict";
//可选属性
function createSquare(config) {
    var newSquare = { color: "red", area: 10 };
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ width: 50 });
