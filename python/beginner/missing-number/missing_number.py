"""
Missing Number

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Time Complexity: O(n)
Space Complexity: O(1)
"""


def missing_number(nums):
    """
    Find missing number using XOR operation.
    
    Args:
        nums: Array of distinct numbers in range [0, n] with one missing
        
    Returns:
        The missing number
    """
    n = len(nums)
    result = n  # Start with the largest number in expected range
    
    for i, num in enumerate(nums):
        result ^= i ^ num
    
    return result


def missing_number_sum(nums):
    """
    Alternative solution using mathematical sum formula.
    """
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum


def missing_number_set(nums):
    """
    Alternative solution using set difference.
    Time Complexity: O(n), Space Complexity: O(n)
    """
    n = len(nums)
    expected = set(range(n + 1))
    actual = set(nums)
    return list(expected - actual)[0]