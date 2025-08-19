"""
Two Sum

The goal of this problem is to find two numbers in an array that add up to a specific target. 
We need to return the indices of these two numbers.

Time Complexity: O(n)
Space Complexity: O(n)
"""


def two_sum(nums, target):
    """
    Finds two numbers in an array that add up to a target.

    Args:
      nums: A list of integers.
      target: The target integer.

    Returns:
      A list containing the indices of the two numbers.
    """
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i