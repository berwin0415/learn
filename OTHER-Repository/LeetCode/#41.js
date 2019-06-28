//缺失的第一个正数

const firstMissingPositive = nums => {
    // 先过滤掉非正数
    nums = nums.filter(item => item > 0);
    // 选择排序
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
            }
        }
        // 判断有没有缺失正数，先判断nums第一项是否为1
        if (i > 0) {
            // 再判断nums中其他项之间是否有缺失
            if (nums[i] - nums[i - 1] > 1) {
                return nums[i - 1] + 1
            }
        } else {
            if (nums[i] !== 1) {
                return 1
            }
        }
    }
    //如果没有缺失或者nums为空
    return nums.length ? nums.pop() + 1 : 1;
};

console.log(firstMissingPositive([3, 4, -1, 1]), "should be", 2)
console.log(firstMissingPositive([1, 2, 0]), "should be", 3)
console.log(firstMissingPositive([2]), "should be", 1)
console.log(firstMissingPositive([0, 2, 2, 1, 1]), "should be", 3)