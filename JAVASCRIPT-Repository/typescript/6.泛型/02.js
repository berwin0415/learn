"use strict";
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var output = loggingIdentity(["1"]);
