### Search in Rotated Sorted Array: Step-by-Step Solution

This problem asks us to search for a target value in a sorted array that has been rotated at an unknown pivot point. The key constraint is to achieve `O(log n)` runtime complexity, which immediately suggests a modified binary search.

#### 1. Understanding the Problem

A rotated sorted array is essentially two sorted arrays merged, where the second part is placed before the first. For example, `[4,5,6,7,0,1,2]` is `[4,5,6,7]` followed by `[0,1,2]`. The challenge is that the standard binary search relies on the entire array being sorted.

#### 2. Modified Binary Search Approach

The core idea is to adapt binary search by determining which half of the array (left or right of `mid`) is sorted and then checking if the `target` falls within that sorted half. If it does, we narrow our search to that half. Otherwise, we search the other (unsorted) half.

Here is the algorithm:

1.  Initialize `left = 0` and `right = len(nums) - 1`.
2.  Loop as long as `left <= right`.
    a. Calculate `mid = left + (right - left) // 2`.
    b. If `nums[mid] == target`, we found it. Return `mid`.
    c. **Determine which half is sorted:**
        - **Case 1: Left half is sorted (`nums[left] <= nums[mid]`)**
            - Check if `target` is within the range of this sorted left half: `nums[left] <= target < nums[mid]`.
            - If yes, narrow the search to the left half: `right = mid - 1`.
            - If no, the target must be in the unsorted right half: `left = mid + 1`.
        - **Case 2: Right half is sorted (`nums[left] > nums[mid]`)**
            - Check if `target` is within the range of this sorted right half: `nums[mid] < target <= nums[right]`.
            - If yes, narrow the search to the right half: `left = mid + 1`.
            - If no, the target must be in the unsorted left half: `right = mid - 1`.
3.  If the loop finishes without finding the target, return `-1`.

This approach maintains the `O(log n)` time complexity because in each step, we effectively eliminate half of the remaining search space. The space complexity is O(1).

### Python Code Solution

```python
def search_rotated_sorted_array(nums, target):
    """
    Searches for a target in a rotated sorted array.

    Args:
      nums: A list of integers, rotated and sorted.
      target: The integer to search for.

    Returns:
      The index of the target if found, otherwise -1.
    """
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid

        # Determine which half is sorted
        if nums[left] <= nums[mid]:  # Left half is sorted
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # Right half is sorted
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
                
    return -1

```
