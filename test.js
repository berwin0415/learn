const cp = require("child_process");
for (let i = 0; i < 10; i++) {
  cp.fork("./test1.js");
}
