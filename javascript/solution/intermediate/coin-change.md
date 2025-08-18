### Coin Change: Step-by-Step Solution

This is a classic dynamic programming problem. We are given a set of coin denominations and a target amount. We need to find the minimum number of coins required to make up that amount. If the amount cannot be made, we return -1.

#### 1. Understanding the Problem

This problem has optimal substructure and overlapping subproblems, which are hallmarks of dynamic programming. The minimum number of coins to make amount `X` depends on the minimum number of coins to make `X - coin_denomination` for each available coin.

#### 2. Dynamic Programming Approach

We can use a DP array (or table) to store the minimum number of coins needed for each amount from 0 up to the target `amount`.

Let `dp[i]` be the minimum number of coins needed to make up amount `i`.

Here is the algorithm:

1.  Create a `dp` array of size `amount + 1`. Initialize `dp[0]` to `0` (0 coins needed for amount 0). Initialize all other `dp[i]` values to `Infinity` (or a very large number) to represent that these amounts are not yet reachable.
2.  Iterate through each `i` from `1` to `amount` (representing the current amount we are trying to make).
3.  For each `i`, iterate through each `coin` in the `coins` array:
    a. If the current `coin` denomination is less than or equal to `i` (meaning we can use this coin for the current amount):
        i. Calculate the number of coins needed if we use this `coin`: `1 + dp[i - coin]`.
        ii. Update `dp[i]` with the minimum of its current value and `1 + dp[i - coin]`. This means `dp[i] = Math.min(dp[i], 1 + dp[i - coin])`.
4.  After the nested loops complete, `dp[amount]` will contain the minimum number of coins needed for the target amount.
5.  If `dp[amount]` is still `Infinity` (or the very large number we initialized it with), it means the amount is not reachable. Return `-1`.
6.  Otherwise, return `dp[amount]`.

This approach has a time complexity of O(amount * num_coins) because of the nested loops. The space complexity is O(amount) for the `dp` array.

### JavaScript Code Solution

```javascript
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
```
