"""
Binary Search

Binary search is a highly efficient algorithm for finding an item from a sorted list of items. 
It works by repeatedly dividing the search interval in half.

Time Complexity: O(log n)
Space Complexity: O(1)
"""


def search(nums, target):
    """
    Performs a binary search on a sorted array.

    Args:
      nums: A sorted list of unique integers.
      target: The integer to search for.

    Returns:
      The index of the target if found, otherwise -1.
    """
    left, right = 0, len(nums) - 1

    while left <= right:
        # Calculate mid point to avoid potential overflow
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1  # Target not found