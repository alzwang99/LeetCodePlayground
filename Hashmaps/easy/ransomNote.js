'use strict'

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Input ransomNote = "aab", magazine = "baa";
Output: true

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const magMap = new Map();

    for (const char of magazine) {
        magMap.set(char, (magMap.get(char) ?? 0) + 1)
    }
    for (const char of ransomNote) {
        console.log(magMap.get(char));
        const magCheck = magMap.get(char);
        if (magCheck === 0 || !magCheck) return false
        magMap.set(char, magMap.get(char) - 1);
    }
    return true
}

console.log(canConstruct("aaabaa", "aaaaa"))