### Permutations: Step-by-Step Solution

This problem asks us to generate all possible permutations of a given array of distinct integers. A permutation is an arrangement of all elements in a specific order.

#### 1. Understanding the Problem

For `nums = [1,2,3]`, the permutations are `[1,2,3]`, `[1,3,2]`, `[2,1,3]`, `[2,3,1]`, `[3,1,2]`, `[3,2,1]`. The number of permutations for an array of `n` distinct elements is `n!` (n factorial).

This is a classic **backtracking** problem.

#### 2. Backtracking Approach

Backtracking is a general algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time. If a partial solution cannot be completed to a valid solution, it "backtracks" to a previous state and tries a different path.

For permutations, we can think of it as building the permutation one element at a time. At each step, we choose an element that hasn't been used yet and add it to our current permutation. Then, we recursively call the function to build the rest of the permutation.

Here is the algorithm:

1.  Initialize an empty array `result` to store all valid permutations.
2.  Define a recursive backtracking function, say `backtrack(currentPermutation, usedIndices)`.
3.  **Base Case:** If `currentPermutation.length === nums.length`, it means we have built a complete permutation. Add a copy of `currentPermutation` to `result` and return.
4.  **Recursive Step:** Iterate through each `num` in `nums` (using its index `i`):
    a. **Choose:** If the number at index `i` has not been used yet (check `usedIndices`):
        i. Add `nums[i]` to `currentPermutation`.
        ii. Mark `i` as used in `usedIndices`.
    b. **Explore:** Recursively call `backtrack` with the updated `currentPermutation` and `usedIndices`.
    c. **Unchoose (Backtrack):** After the recursive call returns, remove `nums[i]` from `currentPermutation` (using `pop()`) and unmark `i` from `usedIndices`. This is crucial to explore other possibilities.

Initial call: `backtrack([], new Set())`.

This approach explores all possible arrangements. The time complexity is O(n * n!) because there are n! permutations, and for each permutation, we perform O(n) work (copying arrays, etc.). The space complexity is O(n) for the recursion stack and the `currentPermutation` array.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const n = nums.length;

    function backtrack(currentPermutation, usedIndices) {
        // Base case: if the current permutation is complete
        if (currentPermutation.length === n) {
            result.push([...currentPermutation]); // Append a copy
            return;
        }

        for (let i = 0; i < n; i++) {
            // If the number at index i has not been used yet
            if (!usedIndices.has(i)) {
                // Choose
                currentPermutation.push(nums[i]);
                usedIndices.add(i);

                // Explore
                backtrack(currentPermutation, usedIndices);

                // Unchoose (Backtrack)
                usedIndices.delete(i);
                currentPermutation.pop();
            }
        }
    }

    backtrack([], new Set()); // Start with an empty permutation and empty set of used indices
    return result;
};
```
