//  922 按奇偶排序数组
const sortArrayByParityII = A => {
    let sortA = A.sort((a, b) => a - b);
    let odd = 1;
    let even = 0;
    let result = [];
    sortA.forEach(element => {
        if (element % 2) {
            result[odd] = element;
            odd += 2;
        } else {
            result[even] = element;
            even += 2;
        }
    });
    return result;
};
console.log(sortArrayByParityII([4,2,5,7]));
