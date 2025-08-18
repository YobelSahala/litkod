### Subsets: Step-by-Step Solution

This problem asks us to generate all possible subsets (the power set) of a given array of unique integers. The order of subsets or elements within subsets does not matter.

#### 1. Understanding the Problem

For `nums = [1,2,3]`, the subsets are `[]`, `[1]`, `[2]`, `[3]`, `[1,2]`, `[1,3]`, `[2,3]`, `[1,2,3]`. The total number of subsets for an array of `n` elements is `2^n`.

This is a classic **backtracking** problem, but can also be solved iteratively or using bit manipulation.

#### 2. Backtracking Approach

Backtracking is a powerful technique for problems that involve exploring all possible combinations or permutations. For subsets, we can think of it as deciding for each element whether to include it in the current subset or not.

Here is the algorithm:

1.  Initialize an empty list `result` to store all subsets.
2.  Define a recursive backtracking function, say `backtrack(current_subset, start_index)`.
3.  **Base Case:** At the beginning of each call, add a copy of `current_subset` to `result`. This is because every path in the recursion tree represents a valid subset.
4.  **Recursive Step:** Iterate from `start_index` to the end of the `nums` array:
    a. **Choose:** Add `nums[i]` to `current_subset`.
    b. **Explore:** Recursively call `backtrack(current_subset, i + 1)`. We use `i + 1` to ensure we don't pick the same element again and to maintain the order of elements within a subset.
    c. **Unchoose (Backtrack):** Remove `nums[i]` from `current_subset`. This allows us to explore other branches where `nums[i]` is not included.

Initial call: `backtrack([], 0)`.

This approach explores all possible combinations. The time complexity is O(N * 2^N) because there are 2^N subsets, and for each subset, we perform O(N) work (copying lists, etc.). The space complexity is O(N) for the recursion stack and the `current_subset` list.

#### 3. Iterative Approach

This approach builds subsets incrementally. Start with an empty set. For each number in `nums`, iterate through all existing subsets and add a new subset by appending the current number to each of them.

1.  Initialize `result = [[]]` (start with an empty subset).
2.  For each `num` in `nums`:
    a. Iterate through all existing `current_subset` in `result`.
    b. For each `current_subset`, create a `new_subset` by appending `num` to it.
    c. Add `new_subset` to `result`.

This approach also has a time complexity of O(N * 2^N) and a space complexity of O(N * 2^N).

### Python Code Solution

```python
# --- Backtracking Approach ---
def subsets_backtrack(nums):
    """
    Generates all possible subsets of an array using backtracking.

    Args:
      nums: A list of unique integers.

    Returns:
      A list of lists, where each inner list is a subset.
    """
    result = []
    n = len(nums)

    def backtrack(current_subset, start_index):
        # Add the current subset to the result (a copy is important)
        result.append(list(current_subset))

        # Explore further by adding elements from start_index onwards
        for i in range(start_index, n):
            # Choose
            current_subset.append(nums[i])
            # Explore
            backtrack(current_subset, i + 1)
            # Unchoose (Backtrack)
            current_subset.pop()

    backtrack([], 0)
    return result

# --- Iterative Approach ---
def subsets_iterative(nums):
    """
    Generates all possible subsets of an array iteratively.

    Args:
      nums: A list of unique integers.

    Returns:
      A list of lists, where each inner list is a subset.
    """
    result = [[]] # Start with the empty set

    for num in nums:
        # For each existing subset, create a new one by adding the current number
        # Iterate over a copy of result to avoid issues with modifying during iteration
        for i in range(len(result)):
            current_subset = result[i]
            result.append(current_subset + [num])
            
    return result

```
