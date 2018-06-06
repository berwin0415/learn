const fs = require("fs");

function del(path) {
    let arr = fs.readFileSync(path);
    arr.forEach((value, index) => {
        let stat = fs.statSync(`${path}/${value}`)
        if (stat.isDirectory()) {
            del(`${path}/${value}`)
        }else{
            fs.unlinkSync(`${patn}/${value}`)
        }
    });
    fs.rmdirSync(path);
}
module.exports = del;