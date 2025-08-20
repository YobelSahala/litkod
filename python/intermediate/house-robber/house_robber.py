"""
House Robber

You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint stopping you 
from robbing each of them is that adjacent houses have security systems connected 
and it will automatically contact the police if two adjacent houses were broken 
into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

Time Complexity: O(n) - single pass through the array
Space Complexity: O(1) - only using two variables
"""

from typing import List


def rob(nums: List[int]) -> int:
    """
    Find the maximum amount of money that can be robbed without robbing adjacent houses.
    
    Uses dynamic programming with space optimization:
    - rob1: represents max money from houses up to i-2
    - rob2: represents max money from houses up to i-1
    - For each house, we choose max(current + rob1, rob2)
    
    Args:
        nums: List of integers representing money in each house
        
    Returns:
        Maximum amount of money that can be robbed
    """
    rob1 = 0  # Represents dp[i-2]
    rob2 = 0  # Represents dp[i-1]
    
    # rob1 = max money from nums[i-2]
    # rob2 = max money from nums[i-1]
    # num = nums[i]
    
    for num in nums:
        temp = max(num + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    
    return rob2