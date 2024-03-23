'use strict'

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



    Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters ? How would you adapt your solution to such a case?
*/

/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const sMap = new Map()
    for (const char of s) {
        sMap.set(char, (sMap.has(char) ? sMap.get(char) : 0) + 1)
    }

    for (const char of t) {
        if (!sMap.has(char) || sMap.get(char) < 1) return false;
        sMap.set(char, (sMap.get(char) - 1))
    }

    return true;
};
const s = "abbbababaa"
const t = "bbabaabbac"
console.log(isAnagram(s, t))