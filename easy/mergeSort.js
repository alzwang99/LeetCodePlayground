'use strict'

var merge = function (nums1, m, nums2, n) {
    while (nums1.length > m) {
        nums1.pop()
    };
    while (nums2.length > n) {
        nums2.pop();
    }
    nums2.forEach(num => nums1.push(num));
    nums1.sort((a, b) => a - b);
};

const nums1 = [1, 2, 3, 0, 0, 0];

const nums2 = [2, 4, 6]

merge(nums1, 3, nums2, 3);