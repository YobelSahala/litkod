"""
Container With Most Water

Find two lines in a given array of heights that, along with the x-axis, 
form a container that can hold the most water.

Time Complexity: O(n)
Space Complexity: O(1)
"""


def max_area(height):
    """
    Finds the maximum amount of water a container can store.

    Args:
      height: A list of integers representing the heights of vertical lines.

    Returns:
      The maximum area of water that can be contained.
    """
    left = 0
    right = len(height) - 1
    max_area = 0

    while left < right:
        current_height = min(height[left], height[right])
        current_width = right - left
        current_area = current_height * current_width
        max_area = max(max_area, current_area)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
            
    return max_area