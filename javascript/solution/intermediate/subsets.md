### Subsets: Step-by-Step Solution

This problem asks us to generate all possible subsets (the power set) of a given array of unique integers. The order of subsets or elements within subsets does not matter.

#### 1. Understanding the Problem

For `nums = [1,2,3]`, the subsets are `[]`, `[1]`, `[2]`, `[3]`, `[1,2]`, `[1,3]`, `[2,3]`, `[1,2,3]`. The total number of subsets for an array of `n` elements is `2^n`.

This is a classic **backtracking** problem, but can also be solved iteratively or using bit manipulation.

#### 2. Backtracking Approach

Backtracking is a powerful technique for problems that involve exploring all possible combinations or permutations. For subsets, we can think of it as deciding for each element whether to include it in the current subset or not.

Here is the algorithm:

1.  Initialize an empty array `result` to store all subsets.
2.  Define a recursive backtracking function, say `backtrack(currentSubset, startIndex)`.
3.  **Base Case:** At the beginning of each call, add a copy of `currentSubset` to `result`. This is because every path in the recursion tree represents a valid subset.
4.  **Recursive Step:** Iterate from `startIndex` to the end of the `nums` array:
    a. **Choose:** Add `nums[i]` to `currentSubset`.
    b. **Explore:** Recursively call `backtrack(currentSubset, i + 1)`. We use `i + 1` to ensure we don't pick the same element again and to maintain the order of elements within a subset.
    c. **Unchoose (Backtrack):** Remove `nums[i]` from `currentSubset`. This allows us to explore other branches where `nums[i]` is not included.

Initial call: `backtrack([], 0)`.

This approach explores all possible combinations. The time complexity is O(N * 2^N) because there are 2^N subsets, and for each subset, we perform O(N) work (copying arrays, etc.). The space complexity is O(N) for the recursion stack and the `currentSubset` array.

#### 3. Iterative Approach

This approach builds subsets incrementally. Start with an empty set. For each number in `nums`, iterate through all existing subsets and add a new subset by appending the current number to each of them.

1.  Initialize `result = [[]]` (start with an empty subset).
2.  For each `num` in `nums`:
    a. Iterate through all existing `currentSubset` in `result`.
    b. For each `currentSubset`, create a `newSubset` by appending `num` to it.
    c. Add `newSubset` to `result`.

This approach also has a time complexity of O(N * 2^N) and a space complexity of O(N * 2^N).

### JavaScript Code Solution

```javascript
// --- Backtracking Approach ---
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsBacktrack = function(nums) {
    const result = [];
    const n = nums.length;

    function backtrack(currentSubset, startIndex) {
        // Add the current subset to the result (a copy is important)
        result.push([...currentSubset]);

        // Explore further by adding elements from startIndex onwards
        for (let i = startIndex; i < n; i++) {
            // Choose
            currentSubset.push(nums[i]);
            // Explore
            backtrack(currentSubset, i + 1);
            // Unchoose (Backtrack)
            currentSubset.pop();
        }
    }

    backtrack([], 0);
    return result;
};

// --- Iterative Approach ---
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsIterative = function(nums) {
    const result = [[]]; // Start with the empty set

    for (const num of nums) {
        // Get the current number of subsets before adding new ones
        const currentLength = result.length;
        for (let i = 0; i < currentLength; i++) {
            const currentSubset = result[i];
            result.push([...currentSubset, num]); // Create a new subset by adding the current number
        }
    }

    return result;
};
```
