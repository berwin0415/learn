// 复原IP地址

const restoreIpAddresses = s => {
    let result = [];

    //递归函数
    const search = (lastArr, subStr) => {
        // 边界条件：分割数组长度为4且所组成字符串和原字符串相等时
        if (lastArr.length === 4 && lastArr.join("") === s) {
            result.push(lastArr.join("."))
        } else if (lastArr.length < 5) {
            // 一个ip位置最大为3位，因此最多取3位数
            const len = Math.min(3, subStr.length)
            for (let i = 0; i < len; i++) {
                const temp = subStr.substr(0, i + 1);
                if ((temp > 0 && temp < 256 && temp[0] != 0) || temp === "0") {
                    search(lastArr.concat([temp]), subStr.substr(i + 1))
                }
            }
        }
    }
    search([], s)
    return result
};

const IP1 = restoreIpAddresses("25525511135")
const IP2 = restoreIpAddresses("010010")

console.log(IP1)
console.log(IP2)
