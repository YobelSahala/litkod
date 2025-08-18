### Binary Search: Step-by-Step Solution

Binary search is a highly efficient algorithm for finding an item from a **sorted** list of items. It works by repeatedly dividing the search interval in half. The key constraint is that the array must be sorted.

#### 1. Understanding the Algorithm

The core idea is to eliminate half of the search space in each step.

1.  Compare the `target` value with the middle element of the array.
2.  If the `target` matches the middle element, we have found the item, and we return its index.
3.  If the `target` is greater than the middle element, it can only lie in the right half of the array. So, we discard the left half and repeat the search on the right half.
4.  If the `target` is less than the middle element, it can only lie in the left half. We discard the right half and repeat the search on the left half.

We repeat this process until the `target` is found or the search interval is empty.

#### 2. The Iterative Approach

We can implement this using two pointers, `left` and `right`, to define our search interval.

1.  Initialize `left = 0` and `right = nums.length - 1`.
2.  Loop as long as `left <= right`. This condition is important to ensure the search space is valid.
    a. Calculate the middle index: `mid = floor((left + right) / 2)`. It's good practice to use `mid = left + floor((right - left) / 2)` to prevent potential overflow issues in languages with fixed-size integers, though it's less of a concern in Python.
    b. Get the middle element `mid_val = nums[mid]`.
    c. Compare `mid_val` with the `target`:
        - If `mid_val == target`, we found it. Return `mid`.
        - If `mid_val < target`, the target must be in the right half. We update our search space by moving the left pointer: `left = mid + 1`.
        - If `mid_val > target`, the target must be in the left half. We update our search space by moving the right pointer: `right = mid - 1`.
3.  If the loop finishes without finding the target (i.e., `left` becomes greater than `right`), it means the target is not in the array. Return `-1`.

This algorithm has a time complexity of O(log n) because we halve the search space in each iteration. The space complexity is O(1) for the iterative approach.

### Python Code Solution

```python
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
            
    return -1 # Target not found

```
