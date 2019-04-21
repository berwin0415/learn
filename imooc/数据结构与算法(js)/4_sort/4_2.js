const selectSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j <arr.length; j++) {
            if (arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
        
    }
    return arr;
}
console.log(selectSort([3,4,5,1,2]));
