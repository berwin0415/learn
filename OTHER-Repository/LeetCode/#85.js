// 85 最大矩形

const maximalRectangle = matrix => {
    let result = [];
    const regForOne = /1{1,}/g;
    // 把二维数组重新表达
    matrix = matrix.map(item => {
        const str = item.join("")
        let resultReg = regForOne.exec(str);
        let resultItem = [];
        while (resultReg) {
            resultItem.push([resultReg.index, resultReg.index + resultReg[0].length - 1])
            resultReg = regForOne.exec(str);
        }
        return resultItem
    })

    //通过递归计算相邻矩阵
    // n : 对几行进行了处理
    const maxRect = (matrix, result, n = 1) => {
        //弹出第一行
        const top = matrix.pop()
        //弹出第二行
        const next = matrix.pop();
        //记录交叉起始点
        let start;
        //记录交叉截止点
        let end;
        //记录交叉宽度
        let width;
        //记录最大交叉宽度,用于判定矩形高度
        let maxWidth = 1;
        // 处理两行
        n++
        top.forEach(item => {
            next.forEach(element => {
                //计算交叉宽度
                width = Math.min(item[1], element[1]) - Math.max(item[0], element[0]);
                if (width > maxWidth) {
                    maxWidth = width;
                    start = Math.max(item[0], element[0])
                    end = Math.min(item[1], element[1])
                }
            })
        })
        //是否找打交叉点
        if (start === undefined || end === undefined) {
            if (n < 3) {
                return false;
            } else {
                width = top[0][1] - top[0][0] + 1
                if (width > 1) {
                    result.push((n - 1) * width)
                }
            }
        }else if(matrix.length === 0){
            width = top[0][1] - top[0][0] + 1
            result.push(n* width)
        } else {
            matrix.push([[start, end]])
            maxRect(matrix, result, n++)
        }
    }

    while (matrix.length > 1) {
        maxRect([...matrix], result);
        matrix.pop()
    }
    //取最大值
    let max = Math.max(...result) || 0
    return max > 0 ? max : 0
};

console.log(maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]))
console.log(maximalRectangle([["1", "1", "1", "1"], ["1", "1", "1", "1"], ["1", "1", "1", "1"]]))
console.log(maximalRectangle([]))
console.log(maximalRectangle([["1"]]))