/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Create a 2D array (m rows, n columns) filled with 0s
    const dp = Array(m).fill(0).map(() => Array(n).fill(0));

    // Base cases: first row and first column are all 1s
    for (let r = 0; r < m; r++) {
        dp[r][0] = 1;
    }
    for (let c = 0; c < n; c++) {
        dp[0][c] = 1;
    }

    // Fill the rest of the DP table
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
        }
    }

    return dp[m - 1][n - 1];
};

module.exports = uniquePaths;