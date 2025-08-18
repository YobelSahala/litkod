### Maximum Subarray: Step-by-Step Solution

This problem asks for the largest sum of any contiguous subarray within a given array of integers. This is a classic problem that can be solved very efficiently using Kadane's Algorithm.

#### 1. Understanding the Problem

A subarray is a contiguous part of an array. We need to find the one that has the greatest sum. For example, in `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`, the subarray `[4, -1, 2, 1]` has the sum of 6, which is the maximum possible.

#### 2. The Core Idea: Kadane's Algorithm

The main idea behind Kadane's algorithm is to scan through the array while keeping track of two things:

1.  `current_sum`: The sum of the subarray ending at the current position.
2.  `max_sum`: The maximum sum found so far across the entire array.

The crucial insight is this: as we iterate through the array, the maximum sum subarray ending at the current position `i` is either:
- The element at `i` itself.
- The element at `i` plus the maximum sum subarray ending at the previous position `i-1`.

So, for each element, we make a choice: do we extend the previous subarray, or do we start a new subarray here? We extend the previous one only if its sum is positive. If the `current_sum` becomes negative, it's better to drop it and start a new subarray from the current element, because a negative sum will only decrease the value of any future subarray.

#### 3. The Algorithm

1.  Initialize `max_sum` to the first element of the array. This handles the case of an array with one element and sets a baseline.
2.  Initialize `current_sum` to `0`.
3.  Iterate through each `num` in the `nums` array:
    a. Add the current `num` to `current_sum`.
    b. Compare `current_sum` with `max_sum`. If `current_sum` is greater, update `max_sum`.
    c. **The key step:** If `current_sum` becomes negative, reset it to `0`. This is because a negative `current_sum` will not help in finding a larger sum subarray, so we are better off starting a new subarray from the next element.
4.  Return `max_sum`.

*Note on initialization:* A common way to implement this is to initialize both `max_sum` and `current_sum` to the first element and start the loop from the second element. A slightly cleaner way is to initialize `max_sum` to negative infinity and `current_sum` to 0, which handles all cases including all negative numbers correctly.

This approach has a time complexity of O(n) and a space complexity of O(1).

### Python Code Solution

```python
import math

def max_subarray(nums):
    """
    Finds the subarray with the largest sum using Kadane's Algorithm.

    Args:
      nums: A list of integers.

    Returns:
      The sum of the subarray with the largest sum.
    """
    max_sum = -math.inf
    current_sum = 0

    for num in nums:
        current_sum += num
        if current_sum > max_sum:
            max_sum = current_sum
        if current_sum < 0:
            current_sum = 0
            
    return max_sum

# A slightly more concise version
def max_subarray_concise(nums):
    max_so_far = nums[0]
    current_max = nums[0]

    for i in range(1, len(nums)):
        current_max = max(nums[i], current_max + nums[i])
        max_so_far = max(max_so_far, current_max)

    return max_so_far

```
