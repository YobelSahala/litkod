"""
Single Number

Given a non-empty array of integers nums, every element appears twice except for one. 
Find that single one.

Time Complexity: O(n)
Space Complexity: O(1)
"""


def single_number(nums):
    """
    Finds the number that appears only once in an array where every other number appears twice.
    
    Uses XOR operation: a ^ a = 0, a ^ 0 = a
    
    Args:
        nums: List of integers where every element appears twice except one.
        
    Returns:
        The single number that appears only once.
    """
    result = 0
    for num in nums:
        result ^= num
    return result