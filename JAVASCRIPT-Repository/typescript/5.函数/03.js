"use strict";
//三、可选参数和默认参数
var buildName = function (firstName, lastName) { return firstName + " " + lastName; };
var result1 = buildName('Bob');
// const result2 = buildName('Bob', 'Adams', 's')//error
var result3 = buildName('Bob', 'Adams');
