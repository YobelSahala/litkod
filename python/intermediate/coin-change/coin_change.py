"""
Coin Change

Given a set of coin denominations and a target amount, find the minimum number of coins 
required to make up that amount. If the amount cannot be made, return -1.

Time Complexity: O(amount * num_coins)
Space Complexity: O(amount)
"""

import math


def coin_change(coins, amount):
    """
    Calculates the fewest number of coins needed to make up a given amount.

    Args:
      coins: A list of coin denominations.
      amount: The target amount.

    Returns:
      The fewest number of coins, or -1 if the amount cannot be made.
    """
    # dp[i] will store the minimum number of coins needed for amount i
    dp = [math.inf] * (amount + 1)
    dp[0] = 0  # 0 coins needed for amount 0

    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                # If we can use this coin, update dp[i]
                dp[i] = min(dp[i], 1 + dp[i - coin])

    # If dp[amount] is still infinity, it means the amount is not reachable
    return dp[amount] if dp[amount] != math.inf else -1