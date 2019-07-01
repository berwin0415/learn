// 682 棒球比赛

const calPoints = ops => {
    let temp = [];
    ops.forEach(element => {
        switch (element) {
            case "+":
                temp.push(temp[temp.length - 1] + temp[temp.length - 2])
                break;

            case "C":
                temp.pop()
                break;

            case "D":
                temp.push((temp[temp.length - 1]) * 2);
                break;

            default:
                temp.push(+element)
                break;
        }
    });
    return temp.reduce((last, item) => last + item, 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"]), 30)
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]), 27)