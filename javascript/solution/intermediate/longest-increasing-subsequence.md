### Longest Increasing Subsequence: Step-by-Step Solution

This problem asks us to find the length of the longest strictly increasing subsequence (LIS) within a given integer array `nums`. A subsequence does not require contiguous elements.

#### 1. Understanding the Problem

For example, in `[10,9,2,5,3,7,101,18]`, the LIS is `[2,3,7,101]`, and its length is 4.

This is a classic dynamic programming problem.

#### 2. Dynamic Programming Approach (O(n^2))

Let `dp[i]` be the length of the longest increasing subsequence ending at index `i`.

Here is the algorithm:

1.  Initialize a `dp` array of the same length as `nums`, and fill it with `1`s. This is because each element itself forms an increasing subsequence of length 1.
2.  Iterate `i` from `1` to `nums.length - 1`:
    a. For each `nums[i]`, iterate `j` from `0` to `i - 1`:
        i. If `nums[i] > nums[j]` (meaning `nums[i]` can extend the subsequence ending at `nums[j]`):
            - Update `dp[i] = Math.max(dp[i], 1 + dp[j])`.
3.  The maximum value in the `dp` array will be the length of the LIS.

This approach has a time complexity of O(n^2) due to the nested loops. The space complexity is O(n) for the `dp` array.

#### 3. Optimal Approach: Dynamic Programming with Binary Search (O(n log n))

This is a more advanced and efficient approach. It maintains a `tails` array, where `tails[i]` is the smallest tail of all increasing subsequences of length `i+1`.

Here's the intuition:
-   We want to keep the `tails` array as small as possible for each length, because a smaller tail allows for more numbers to extend the subsequence.
-   When we encounter a new number `num`:
    -   If `num` is greater than all elements in `tails`, it means `num` can extend the longest increasing subsequence found so far. We append `num` to `tails`.
    -   If `num` is not greater than all elements in `tails`, it means `num` can potentially replace an element in `tails` to form a new increasing subsequence of the same length but with a smaller tail. We find the smallest element in `tails` that is greater than or equal to `num` and replace it with `num`.

We can use binary search to find the correct position to replace an element in `tails`.

1.  Initialize an empty array `tails`.
2.  Iterate through each `num` in `nums`:
    a. Use binary search to find the index `i` where `num` would be inserted in `tails` to maintain sorted order. (JavaScript doesn't have a built-in `bisect_left`, so we implement a binary search for insertion point).
    b. If `i === tails.length`, it means `num` is greater than all elements in `tails`, so append `num` to `tails`.
    c. Else, replace `tails[i]` with `num`.
3.  The length of `tails` at the end will be the length of the LIS.

This approach has a time complexity of O(n log n) because we iterate through `nums` once, and each step involves a binary search (log n). The space complexity is O(n) for the `tails` array.

### JavaScript Code Solution

```javascript
// --- DP O(n^2) Approach ---
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_N2 = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const dp = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }

    return Math.max(...dp);
};

// --- DP with Binary Search O(n log n) Approach ---
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_NLogN = function(nums) {
    const tails = [];

    for (const num of nums) {
        // Find the insertion point using binary search
        let i = 0;
        let j = tails.length;
        while (i < j) {
            const m = Math.floor((i + j) / 2);
            if (tails[m] < num) {
                i = m + 1;
            } else {
                j = m;
            }
        }

        if (i === tails.length) {
            // If num is greater than all elements in tails, extend the LIS
            tails.push(num);
        } else {
            // Otherwise, replace the element at index i with num
            // This forms a new LIS of the same length but with a smaller tail
            tails[i] = num;
        }
    }

    return tails.length;
};
```
