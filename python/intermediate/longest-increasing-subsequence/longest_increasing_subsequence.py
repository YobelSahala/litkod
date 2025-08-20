"""
Solution for Longest Increasing Subsequence problem.

Given an integer array nums, return the length of the longest strictly increasing 
subsequence.

Time complexity: O(n log n) using binary search approach
Space complexity: O(n)
"""

from typing import List
import bisect


def length_of_lis(nums: List[int]) -> int:
    """
    Find the length of the longest increasing subsequence.
    
    Uses binary search to achieve O(n log n) time complexity.
    The tails array maintains the smallest tail of all increasing 
    subsequences of length i+1 in tails[i].
    
    Args:
        nums: List of integers
        
    Returns:
        Length of the longest increasing subsequence
        
    Example:
        >>> length_of_lis([10,9,2,5,3,7,101,18])
        4
        >>> length_of_lis([0,1,0,3,2,3])
        4
    """
    if not nums:
        return 0
    
    tails = []
    
    for num in nums:
        # Find the insertion point using binary search
        # bisect_left returns the leftmost position where num can be inserted
        # to keep the array sorted
        pos = bisect.bisect_left(tails, num)
        
        if pos == len(tails):
            # If num is greater than all elements in tails, extend the LIS
            tails.append(num)
        else:
            # Otherwise, replace the element at index pos with num
            # This forms a new LIS of the same length but with a smaller tail
            tails[pos] = num
    
    return len(tails)


def length_of_lis_dp(nums: List[int]) -> int:
    """
    Alternative O(n^2) dynamic programming solution.
    
    Args:
        nums: List of integers
        
    Returns:
        Length of the longest increasing subsequence
    """
    if not nums:
        return 0
    
    n = len(nums)
    dp = [1] * n  # dp[i] represents LIS ending at index i
    
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)