/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
*/

/*
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    const patternMap = new Map();
    const sSet = new Set();
    const sWords = s.split(" ")

    if (pattern.length !== sWords.length) {
        return false;
    }


    for (let i = 0; i < pattern.length; i++) {
        if (!patternMap.has(pattern[i]) && !sSet.has(sWords[i])) {
            patternMap.set(pattern[i], sWords[i])
            sSet.add(sWords[i])
        }
        if (patternMap.get(pattern[i]) !== sWords[i]) return false
    }

    return true;

};
const pattern = "abba"
const s = "dog dog dog dog"

console.log(wordPattern(pattern, s))