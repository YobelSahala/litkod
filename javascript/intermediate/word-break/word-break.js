/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // Empty string can always be segmented

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            // Check if prefix s[0...j-1] is segmentable (dp[j] is true)
            // AND if the suffix s[j...i-1] is in the word dictionary
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                dp[i] = true;
                break; // Once dp[i] is true, no need to check further j's
            }
        }
    }

    return dp[n];
};

module.exports = wordBreak;