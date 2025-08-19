"""
Maximum Subarray

This problem asks for the largest sum of any contiguous subarray within a given array of integers. 
This is a classic problem that can be solved very efficiently using Kadane's Algorithm.

Time Complexity: O(n)
Space Complexity: O(1)
"""

import math


def max_subarray(nums):
    """
    Finds the subarray with the largest sum using Kadane's Algorithm.

    Args:
      nums: A list of integers.

    Returns:
      The sum of the subarray with the largest sum.
    """
    max_sum = -math.inf
    current_sum = 0

    for num in nums:
        current_sum += num
        if current_sum > max_sum:
            max_sum = current_sum
        if current_sum < 0:
            current_sum = 0
            
    return max_sum


def max_subarray_concise(nums):
    """
    A slightly more concise version of Kadane's algorithm.
    """
    max_so_far = nums[0]
    current_max = nums[0]

    for i in range(1, len(nums)):
        current_max = max(nums[i], current_max + nums[i])
        max_so_far = max(max_so_far, current_max)

    return max_so_far