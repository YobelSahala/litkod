### Best Time to Buy and Sell Stock: Step-by-Step Solution

This problem asks for the maximum profit from a single buy and sell transaction. The main constraint is that you must buy the stock before you can sell it.

#### 1. Understanding the Problem

We need to find two days, a `buyDay` and a `sellDay`, where `buyDay` comes before `sellDay`, such that `prices[sellDay] - prices[buyDay]` is maximized. If no profitable transaction is possible, the profit is 0.

#### 2. Brute-Force Approach

The simplest way is to consider every possible pair of buy and sell days. We could use two nested loops. The outer loop iterates through all possible buy days, and the inner loop iterates through all subsequent sell days. We would calculate the profit for each pair and keep track of the maximum profit found. This would have a time complexity of O(n^2), which is too slow given the constraint of `10^5` prices.

#### 3. Optimal Approach: One Pass

A much more efficient solution can be achieved in a single pass through the `prices` array. The core idea is to keep track of two key pieces of information as we iterate:

1.  `minPrice`: The lowest stock price encountered so far.
2.  `maxProfit`: The maximum profit we could have made so far.

Here is the algorithm:

1.  Initialize `minPrice` to a very large number (`Number.POSITIVE_INFINITY`) or the price on the first day.
2.  Initialize `maxProfit` to `0`.
3.  Iterate through the `prices` array, one price at a time:
    a. For the current `price`, first check if it's lower than our `minPrice`. If it is, we have found a new best day to buy, so we update `minPrice = price`.
    b. If the current `price` is not lower than `minPrice`, it's a potential day to sell. We calculate the potential profit: `currentProfit = price - minPrice`.
    c. We then update our `maxProfit` if this `currentProfit` is greater than the existing `maxProfit`: `maxProfit = Math.max(maxProfit, currentProfit)`.
4.  After the loop finishes, `maxProfit` will hold the best possible profit.

This approach works because it essentially calculates the profit for each day as if we were selling on that day, using the lowest buy price found *before* that day. This guarantees we are always buying before selling and finds the optimal profit in a single pass.

This has a time complexity of O(n) and a space complexity of O(1).

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Number.POSITIVE_INFINITY;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};
```
