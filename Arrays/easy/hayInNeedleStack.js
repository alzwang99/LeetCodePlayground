'use strict'

var strStr = function (haystack, needle) {
    const nLength = needle.length;

    for (let i = 0; i < haystack.length - (nLength - 1); i++) {
        if (haystack.slice(i, (nLength + i)) === needle) return i
    }
    return -1;
};

const bruh = "bruhmoment";
const moment = "moment";

console.log(strStr(bruh, moment))

//CheatCode
var strStr1 = function (haystack, needle) {
    return haystack.search(needle);
};

//CheatCode 2

var strStr2 = function (haystack, needle) {
    return haystack.indexOf(needle);
};