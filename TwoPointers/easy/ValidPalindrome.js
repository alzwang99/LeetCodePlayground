'use strict'

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/*
 * @param {string} s
 * @return {boolean}
 */

//Step 1, filter out any commas, symbols, spaces, and convert to lowercase. 
//Step 2, figure out how to split in the middle and check between left and right using i and j
var isPalindrome = function (s) {
    const string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().trim()
    if (string === "") return true;
    let j = string.length - 1
    for (let i = 0; i < (string.length / 2); i++) {
        if (string[j] !== string[i]) return false;
        j--
    }
    return true;
};

console.log(isPalindrome("0P"));

// Other Way to solve it
var isPalindrome1 = function (s) {
    const string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().trim()
    const rstring = string.split("").reverse().join("");
    return rstring === string;
};

console.log(isPalindrome1("ra!!!!ce    car"))