/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

var majorityElement = function (nums) {
    const arr = nums.sort((a, b) => a - b);
    return arr[(Math.floor(arr.length / 2))]
};

const num1 = [2, 1, 2];

console.log(majorityElement(num1));