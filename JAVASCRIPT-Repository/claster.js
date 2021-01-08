const os = require('os')
const cp = require("child_process");
const path = require("path");
const len = os.cpus().length;
for (let i = 0; i < len; i++) {
  cp.fork(path.join(__dirname, "nodePackageTest.js"));
}
