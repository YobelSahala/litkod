"""
3Sum

Find all unique triplets in an array nums that sum up to zero.
The challenge lies in efficiently finding these triplets and avoiding duplicate results.

Time Complexity: O(n^2)
Space Complexity: O(1) - excluding output array
"""


def three_sum(nums):
    """
    Finds all unique triplets in the array that sum to zero.

    Args:
      nums: A list of integers.

    Returns:
      A list of lists, where each inner list is a unique triplet.
    """
    nums.sort()
    result = []
    n = len(nums)

    for i in range(n - 2):
        # Skip duplicate for the first element of the triplet
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, n - 1

        while left < right:
            current_sum = nums[i] + nums[left] + nums[right]

            if current_sum == 0:
                result.append([nums[i], nums[left], nums[right]])

                # Skip duplicates for the second element
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                # Skip duplicates for the third element
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1

                left += 1
                right -= 1
            elif current_sum < 0:
                left += 1
            else:  # current_sum > 0
                right -= 1
                
    return result