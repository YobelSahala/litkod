"""
Median of Two Sorted Arrays

Find the median of two sorted arrays in O(log(m+n)) time complexity using binary search.
This is a classic hard problem that requires understanding of binary search and partitions.

Time Complexity: O(log(min(m, n)))
Space Complexity: O(1)
"""

import math


def find_median_sorted_arrays(nums1, nums2):
    """
    Finds the median of two sorted arrays.

    Args:
      nums1: The first sorted list of integers.
      nums2: The second sorted list of integers.

    Returns:
      The median of the two sorted arrays.
    """
    if len(nums1) > len(nums2):
        return find_median_sorted_arrays(nums2, nums1)

    m, n = len(nums1), len(nums2)
    low, high = 0, m

    while low <= high:
        partitionX = (low + high) // 2
        partitionY = (m + n + 1) // 2 - partitionX

        maxX = nums1[partitionX - 1] if partitionX != 0 else -math.inf
        minX = nums1[partitionX] if partitionX != m else math.inf

        maxY = nums2[partitionY - 1] if partitionY != 0 else -math.inf
        minY = nums2[partitionY] if partitionY != n else math.inf

        if maxX <= minY and maxY <= minX:
            if (m + n) % 2 == 0:
                return (max(maxX, maxY) + min(minX, minY)) / 2
            else:
                return float(max(maxX, maxY))
        elif maxX > minY:
            high = partitionX - 1
        else:
            low = partitionX + 1

    raise ValueError("Input arrays are not sorted")