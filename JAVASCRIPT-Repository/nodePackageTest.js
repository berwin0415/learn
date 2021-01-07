const os = require("os");
process.pid;
const run = (count) => {
  console.log("start:", count, "; ", process.pid);
  console.time();
  while (count) {
    count--;
  }
  console.timeEnd();
};
run(8*1e9);
