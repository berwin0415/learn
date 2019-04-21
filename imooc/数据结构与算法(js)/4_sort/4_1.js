// 冒泡排序
const bubble = arr => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            count++;
            console.log(i,j,count);
            if (arr[j] > arr[j+1]) {
                
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(bubble([1,2,3,4,5]));
