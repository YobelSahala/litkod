"""
Solution for Longest Consecutive Sequence problem.

Given an unsorted array of integers nums, return the length of the longest 
consecutive elements sequence.

Time complexity: O(n)
Space complexity: O(n)
"""

from typing import List


def longest_consecutive(nums: List[int]) -> int:
    """
    Find the length of the longest consecutive elements sequence.
    
    Args:
        nums: List of integers
        
    Returns:
        Length of the longest consecutive sequence
        
    Example:
        >>> longest_consecutive([100,4,200,1,3,2])
        4
        >>> longest_consecutive([0,3,7,2,5,8,4,6,0,1])
        9
    """
    if not nums:
        return 0
    
    num_set = set(nums)
    longest_streak = 0
    
    for num in nums:
        # Check if the current number is the start of a sequence
        # (i.e., num - 1 is not in the set)
        if num - 1 not in num_set:
            current_num = num
            current_streak = 1
            
            # Count consecutive numbers
            while current_num + 1 in num_set:
                current_num += 1
                current_streak += 1
            
            longest_streak = max(longest_streak, current_streak)
    
    return longest_streak