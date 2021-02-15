"use strict";
function loggingIdentity5(arg) {
    console.log(arg.length); // OK
    return arg;
}
loggingIdentity5({ length: 10, value: 3 }); // OK
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a'); // okay
//getProperty(x, 'm') // error
