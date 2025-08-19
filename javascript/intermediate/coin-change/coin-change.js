/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // dp[i] will store the minimum number of coins needed for amount i
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // 0 coins needed for amount 0

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                // If we can use this coin, update dp[i]
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    // If dp[amount] is still Infinity, it means the amount is not reachable
    return dp[amount] === Infinity ? -1 : dp[amount];
};

module.exports = coinChange;