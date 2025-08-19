"""
Majority Element

Given an array nums of size n, return the majority element.
The majority element is the element that appears more than n // 2 times.

Time Complexity: O(n)
Space Complexity: O(1) - Boyer-Moore algorithm
"""

from collections import Counter


def majority_element(nums):
    """
    Find the majority element using Boyer-Moore Voting Algorithm.
    
    Args:
        nums: List of integers
        
    Returns:
        The majority element
    """
    candidate = None
    count = 0
    
    # Phase 1: Find candidate
    for num in nums:
        if count == 0:
            candidate = num
        count += (1 if num == candidate else -1)
    
    return candidate


def majority_element_hashmap(nums):
    """
    Alternative solution using hash map.
    Time Complexity: O(n), Space Complexity: O(n)
    """
    count_map = Counter(nums)
    return max(count_map, key=count_map.get)


def majority_element_sorting(nums):
    """
    Alternative solution using sorting.
    Time Complexity: O(n log n), Space Complexity: O(1)
    """
    nums.sort()
    return nums[len(nums) // 2]