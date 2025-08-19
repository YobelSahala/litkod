"""
Contains Duplicate

This problem asks us to determine if an array of integers contains any duplicate values. 
We need to return True if a value appears more than once and False otherwise.

Time Complexity: O(n)
Space Complexity: O(n)
"""


def contains_duplicate(nums):
    """
    Checks if an array contains any duplicate elements using a hash set.

    Args:
      nums: A list of integers.

    Returns:
      True if there are duplicates, False otherwise.
    """
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False


def contains_duplicate_pythonic(nums):
    """
    A more concise way to check for duplicates in Python.
    This works because a set by definition cannot contain duplicate elements.
    If the length of the set is less than the length of the list,
    it means some elements were removed, hence there were duplicates.
    """
    return len(set(nums)) < len(nums)