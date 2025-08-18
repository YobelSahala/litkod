### Best Time to Buy and Sell Stock: Step-by-Step Solution

This problem asks for the maximum profit from a single buy and sell transaction. The main constraint is that you must buy the stock before you can sell it.

#### 1. Understanding the Problem

We need to find two days, a `buy_day` and a `sell_day`, where `buy_day` comes before `sell_day`, such that `prices[sell_day] - prices[buy_day]` is maximized. If no profitable transaction is possible, the profit is 0.

#### 2. Brute-Force Approach

The simplest way is to consider every possible pair of buy and sell days. We could use two nested loops. The outer loop iterates through all possible buy days, and the inner loop iterates through all subsequent sell days. We would calculate the profit for each pair and keep track of the maximum profit found. This would have a time complexity of O(n^2), which is too slow given the constraint of `10^5` prices.

#### 3. Optimal Approach: One Pass

A much more efficient solution can be achieved in a single pass through the `prices` array. The core idea is to keep track of two key pieces of information as we iterate:

1.  `min_price`: The lowest stock price encountered so far.
2.  `max_profit`: The maximum profit we could have made so far.

Here is the algorithm:

1.  Initialize `min_price` to a very large number (or the price on the first day).
2.  Initialize `max_profit` to `0`.
3.  Iterate through the `prices` array, one price at a time:
    a. For the current `price`, first check if it's lower than our `min_price`. If it is, we have found a new best day to buy, so we update `min_price = price`.
    b. If the current `price` is not lower than `min_price`, it's a potential day to sell. We calculate the potential profit: `current_profit = price - min_price`.
    c. We then update our `max_profit` if this `current_profit` is greater than the existing `max_profit`: `max_profit = max(max_profit, current_profit)`.
4.  After the loop finishes, `max_profit` will hold the best possible profit.

This approach works because it essentially calculates the profit for each day as if we were selling on that day, using the lowest buy price found *before* that day. This guarantees we are always buying before selling and finds the optimal profit in a single pass.

This has a time complexity of O(n) and a space complexity of O(1).

### Python Code Solution

```python
import math

def max_profit(prices):
    """
    Calculates the maximum profit that can be achieved from a single buy and sell.

    Args:
      prices: A list of stock prices for each day.

    Returns:
      The maximum possible profit.
    """
    min_price = math.inf
    max_profit = 0

    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
            
    return max_profit

```
