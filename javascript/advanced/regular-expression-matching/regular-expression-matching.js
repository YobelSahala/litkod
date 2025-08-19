/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    // dp[i][j] will be true if s[0...i-1] matches p[0...j-1]
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    // Base case: empty string matches empty pattern
    dp[0][0] = true;

    // Initialize first row (empty string s) for patterns like a*, a*b*, .* etc.
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Case 1: Current characters match (or pattern has '.')
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } 
            // Case 2: Pattern has '*'
            else if (p[j - 1] === '*') {
                // Option A: '*' matches zero occurrences of the preceding element
                dp[i][j] = dp[i][j - 2];
                
                // Option B: '*' matches one or more occurrences of the preceding element
                // This is possible if the preceding character matches s[i - 1]
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
};

module.exports = isMatch;