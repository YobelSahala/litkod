### First Missing Positive: Step-by-Step Solution

This problem asks us to find the smallest missing positive integer in an unsorted array `nums`. The constraints are crucial: `O(n)` time and `O(1)` extra space.

#### 1. Understanding the Problem

We are looking for the smallest positive integer (i.e., `1, 2, 3, ...`) that is not present in the array. Negative numbers, zeros, and numbers larger than `n` (where `n` is the length of the array) are not relevant for finding the *smallest missing positive* integer within the range `[1, n+1]`.

#### 2. Optimal Approach: In-place Hashing / Cyclic Sort

The key idea is to use the array itself as a hash map. We want to place each number `x` at index `x-1`. For example, `1` should be at index `0`, `2` at index `1`, and so on. We can ignore numbers that are out of the range `[1, n]`.

Here is the algorithm:

1.  **Phase 1: Place numbers in their correct positions.**
    - Iterate `i` from `0` to `len(nums) - 1`.
    - For each `nums[i]`:
        - While `nums[i]` is a positive number, and `nums[i]` is within the range `[1, len(nums)]`, and `nums[i]` is not already at its correct position (`nums[i] != nums[nums[i] - 1]`):
            - Swap `nums[i]` with `nums[nums[i] - 1]`. This moves `nums[i]` to its correct place and brings a new number to `nums[i]`'s current position, which we then process.
2.  **Phase 2: Find the first missing positive.**
    - Iterate `i` from `0` to `len(nums) - 1`.
    - If `nums[i]` is not equal to `i + 1`, then `i + 1` is the smallest missing positive integer. Return `i + 1`.
3.  If the loop completes, it means all numbers from `1` to `n` are present in their correct positions. Therefore, the smallest missing positive integer is `n + 1`.

Let's trace `[3,4,-1,1]`:
- `n = 4`
- `nums = [3,4,-1,1]`

**Phase 1:**
- `i = 0`, `nums[0] = 3`. `3` should be at index `2`. `nums[2]` is `-1`. Swap `nums[0]` and `nums[2]`. `nums` becomes `[-1,4,3,1]`.
- `i = 0`, `nums[0] = -1`. Not in range `[1,4]`. Skip.
- `i = 1`, `nums[1] = 4`. `4` should be at index `3`. `nums[3]` is `1`. Swap `nums[1]` and `nums[3]`. `nums` becomes `[-1,1,3,4]`.
- `i = 1`, `nums[1] = 1`. `1` should be at index `0`. `nums[0]` is `-1`. Swap `nums[1]` and `nums[0]`. `nums` becomes `[1,-1,3,4]`.
- `i = 1`, `nums[1] = -1`. Not in range `[1,4]`. Skip.
- `i = 2`, `nums[2] = 3`. `3` should be at index `2`. `nums[2]` is `3`. Already correct. Skip.
- `i = 3`, `nums[3] = 4`. `4` should be at index `3`. `nums[3]` is `4`. Already correct. Skip.

After Phase 1, `nums` is `[1,-1,3,4]`.

**Phase 2:**
- `i = 0`, `nums[0] = 1`. `1 == 0 + 1`. OK.
- `i = 1`, `nums[1] = -1`. ` -1 != 1 + 1`. Smallest missing positive is `1 + 1 = 2`. Return `2`.

This approach has a time complexity of O(n). Although there's a `while` loop inside the `for` loop, each number is swapped at most once into its correct position. The space complexity is O(1) because we modify the array in-place.

### Python Code Solution

```python
def first_missing_positive(nums):
    """
    Finds the smallest missing positive integer in an unsorted array.

    Args:
      nums: A list of integers.

    Returns:
      The smallest missing positive integer.
    """
    n = len(nums)

    # Phase 1: Place numbers in their correct positions
    # (i.e., put num at index num-1 if num is in range [1, n])
    for i in range(n):
        # Loop until nums[i] is not in range [1, n] or it's already in its correct place
        while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]:
            correct_pos = nums[i] - 1
            nums[i], nums[correct_pos] = nums[correct_pos], nums[i] # Swap

    # Phase 2: Find the first missing positive
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1

    # If all numbers from 1 to n are present, then n + 1 is the missing one
    return n + 1

```
