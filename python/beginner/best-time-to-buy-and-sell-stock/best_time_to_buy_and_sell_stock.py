"""
Best Time to Buy and Sell Stock

This problem asks for the maximum profit from a single buy and sell transaction. 
The main constraint is that you must buy the stock before you can sell it.

Time Complexity: O(n)
Space Complexity: O(1)
"""

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