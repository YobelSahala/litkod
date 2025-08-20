"""
Jump Game

You are given an integer array nums. You are initially positioned at the array's 
first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Time Complexity: O(n) - single pass through the array
Space Complexity: O(1) - only using a few variables
"""

from typing import List


def can_jump(nums: List[int]) -> bool:
    """
    Determine if we can reach the last index by jumping.
    
    Uses greedy approach by tracking the maximum reachable index.
    At each position, we check:
    1. If current position is beyond max reach, return False
    2. Update max reach with current position + jump length
    3. If max reach >= last index, return True
    
    Args:
        nums: List of integers representing maximum jump length at each position
        
    Returns:
        True if last index is reachable, False otherwise
    """
    n = len(nums)
    max_reach = 0
    
    for i in range(n):
        # If current index is beyond max_reach, we can't proceed
        if i > max_reach:
            return False
        
        # Update the maximum index reachable
        max_reach = max(max_reach, i + nums[i])
        
        # If we can reach or pass the last index, return True
        if max_reach >= n - 1:
            return True
    
    return True  # Should only be reached if n=1 or already true