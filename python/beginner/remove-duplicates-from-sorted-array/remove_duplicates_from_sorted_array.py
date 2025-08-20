"""
Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates 
in-place such that each unique element appears only once. The relative order of 
the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need 
to do the following things:
- Change the array nums such that the first k elements of nums contain the unique 
  elements in the order they were present in nums initially. The remaining elements 
  of nums are not important as well as the size of nums.
- Return k.

Time Complexity: O(n) where n is the length of the array
Space Complexity: O(1) - in-place modification
"""

from typing import List


def remove_duplicates(nums: List[int]) -> int:
    """
    Remove duplicates from a sorted array in-place and return the new length.
    
    Args:
        nums: A sorted array of integers in non-decreasing order
        
    Returns:
        The number of unique elements in the array
        
    Examples:
        >>> nums = [1, 1, 2]
        >>> remove_duplicates(nums)
        2
        >>> nums[:2]
        [1, 2]
        
        >>> nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
        >>> remove_duplicates(nums)
        5
        >>> nums[:5]
        [0, 1, 2, 3, 4]
    """
    if not nums:
        return 0
    
    # insert_pos is the index where the next unique element should be placed
    insert_pos = 1
    
    for i in range(1, len(nums)):
        # If we find a new unique element
        if nums[i] != nums[i - 1]:
            # Place it at the insert_pos
            nums[insert_pos] = nums[i]
            # Increment the insert_pos
            insert_pos += 1
    
    return insert_pos