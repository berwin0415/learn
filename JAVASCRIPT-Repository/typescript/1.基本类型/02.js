"use strict";
var list = [1, 2, 2, 3];
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var cc = Color.green;
create({ prop: 0 });
create(null);
create(Color);
// create(333) 
