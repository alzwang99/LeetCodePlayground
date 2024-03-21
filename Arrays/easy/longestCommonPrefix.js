'use strict'

//Brute Force
var longestCommonPrefix = function (strs) {
    let common = "";
    if (strs.length === 1) return strs[0]
    else if (strs[0][0] !== strs[1][0]) return common;
    else {
        for (let i = 0; i < strs[0].length; i++) {
            for (let j = 1; j < strs.length; j++) {
                if (strs[0][i] !== strs[j][i]) return common;
            }
            common += strs[0][i];
        }
        return common;
    }
};


const test = ["", ""]

console.log(longestCommonPrefix(test));