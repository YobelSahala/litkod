// Frequency Counter Approach
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCounts = {};

    // Count characters in s
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    // Decrement counts for characters in t
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        // If a character in t doesn't exist in s or its count is already zero
        if (!charCounts[char]) {
            return false;
        }
        charCounts[char]--;
    }

    return true;
};

module.exports = isAnagram;