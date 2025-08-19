/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    // Add 1s to the beginning and end of the nums array
    const points = [1, ...nums, 1];
    const n = points.length;

    // dp[i][j] stores the maximum coins from bursting balloons in (i, j)
    const dp = Array(n).fill(0).map(() => Array(n).fill(0));

    // length represents the length of the subarray (j - i)
    // Iterate from length 2 up to n-1 (since n is the length of points array)
    for (let length = 2; length < n; length++) {
        // i is the left boundary of the subarray
        for (let i = 0; i < n - length; i++) {
            // j is the right boundary of the subarray
            const j = i + length;

            // k is the last balloon to be burst in the interval (i, j)
            for (let k = i + 1; k < j; k++) {
                // coins if k is the last balloon burst in (i, j)
                // points[i] * points[k] * points[j] are coins from bursting k
                // dp[i][k] are coins from bursting (i, k)
                // dp[k][j] are coins from bursting (k, j)
                const currentCoins = points[i] * points[k] * points[j] +
                                     dp[i][k] + dp[k][j];
                
                dp[i][j] = Math.max(dp[i][j], currentCoins);
            }
        }
    }

    return dp[0][n - 1];
};

module.exports = maxCoins;