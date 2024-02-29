'use strict'


//Attempt 1 Brute Force
var lengthOfLastWord1 = function (s) {
    const bank = [];
    let word = ""
    let current;
    for (let i = 0; i < s.length; i++) {
        current = s[i];
        if (current !== " ") {
            word += current;
        }
        else if (word.length !== 0) {
            bank.push(word)
            word = "";
        }
    }
    if (word.length !== 0) {
        bank.push(word)
    }
    return bank[bank.length - 1].length;
};


//Attempt 2 Try to only focus on last word; Trimmed to remove excess " " before and after cluster of words. Split words in between " " and then returned last word;

var lengthOfLastWord = function (s) {
    let arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord("ABCD EFG"))