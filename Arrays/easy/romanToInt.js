'use strict'

//First attempt Brute force v1

var romanToInt = function (s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let future = s[i + 1]
        if (current === "I") {
            if (future === "V" || future === "X") result--
            else result++
        }
        else if (current === "X") {
            if (future === "L" || future === "C") result -= 10;
            else result += 10;
        }
        else if (current === "C") {
            if (future === "D" || future === "M") result -= 100;
            else result += 100;
        }
        else if (current === "V") result += 5
        else if (current === "L") result += 50
        else if (current === "D") result += 500;
        else if (current === "M") result += 1000;
    }
    return result;
};

const rom1 = "MCMXCIV";

//console.log(romanToInt(rom1));

//Second attempt Brute force v2

var romanToInt1 = function (s) {
    let result = 0;
    let current;
    let future;
    const roman = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    for (let i = 0; i < s.length; i++) {
        current = roman[s[i]];
        future = roman[s[i + 1]];
        if (current < future) result -= current;
        else result += current;
    }
    return result;
};

console.log(romanToInt1(rom1));