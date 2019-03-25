const fs = require('fs')
const path = require("path")
path.resolve(process.cwd(),'aaa')
const paths = fs.readdirSync("./aaa")
let a = paths.filter(item => {
    let stat = fs.statSync(path.resolve("aaa",item));
    console.log(stat.isDirectory())
    return stat.isDirectory()
})
console.log(a);
