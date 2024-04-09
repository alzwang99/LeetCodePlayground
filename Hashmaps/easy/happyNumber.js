'use strict'

/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
*/

/*
 * @param {number} n
 * @return {boolean}
 */

//Works but inefficient

var isHappy = function (n) {
    const numMap = new Map();
    let numArray = [...n + ""].map((num) => Number(num));
    let numTarget = numArray.reduce((tot, num) => Math.pow(num, 2) + tot)

    while (numTarget != 1) {
        console.log(numArray)
        console.log(numTarget)
        if (numMap.get(numTarget)) {
            return false;
        }
        numMap.set(numTarget, 1);
        numArray = [...numTarget + ""].map((num) => Number(num));
        console.log(numArray)
        numTarget = numArray.reduce((tot, num) => Math.pow(num, 2) + tot, 0)
        console.log(numTarget)
    }
    return true
};

// console.log(isHappy(19))

const bruh = [4, 2];

console.log(bruh.reduce((tot, num) => tot + Math.pow(num, 2), 0))

console.log(Math.pow(4, 2))