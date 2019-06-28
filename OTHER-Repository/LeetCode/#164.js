// 最大间距

const maximumGap = nums => {
    const len = nums.length - 1;

    if (len < 1) return 0 //单独判断长度小于2的情况

    //定义最大间距缓存变量
    let max = 0;
    //进行排序
    for (let i = len; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
            }
        }
        //内存循环结束后,在上层循环中判断最大值
        if (i < len) {
            const space = nums[i + 1] - nums[i]
            if (space > max) {
                max = space
            }
        }
    }
    // 由于外层循环在i=1时结束，但仍需比较
    return Math.max(max, nums[1] - nums[0])
};
console.log(maximumGap([5, 6, 9, 1]))