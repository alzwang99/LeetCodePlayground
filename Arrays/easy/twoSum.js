const twoSum = function (nums, target) {
    const result = [];
    let targetNumber;
    for (let i = 0; i < nums.length; i++) {
        targetNumber = target - nums[i];
        console.log(targetNumber);
        console.log(nums[i])
        for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[j] === targetNumber);
            if (nums[j] === targetNumber) {
                result.push(i, j);
                console.log(result)
                return result
            }
        }
    }
};

const nums1 = [3, 2, 4]

twoSum(nums1, 6);