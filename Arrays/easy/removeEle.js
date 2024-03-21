'use strict'
var removeElement = function (nums, val) {
    return nums.filter(ele => ele !== val);
};

const nums1 = [1, 2, 2, 3, 4, 5, 6];

console.log(removeElement(nums1, 2));