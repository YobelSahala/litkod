### Burst Balloons: Step-by-Step Solution

This is a notoriously difficult dynamic programming problem. We are given an array of balloon values, and bursting a balloon `i` yields `nums[left] * nums[i] * nums[right]` coins, where `left` and `right` are the adjacent balloons *after* `i` is burst. The goal is to maximize the total coins collected.

#### 1. The Challenge: Changing Adjacency

The difficulty arises because bursting a balloon changes the adjacency of other balloons. This makes a straightforward left-to-right or right-to-left DP approach difficult, as the subproblems are not independent.

#### 2. Key Insight: Think in Reverse

The crucial insight is to reverse the problem: instead of thinking about which balloon to burst *next*, think about which balloon will be burst *last* in a given sub-array. If a balloon `k` is the last one burst in the range `(i, j)` (meaning `i` and `j` are the virtual boundaries, and all balloons between them are burst before `k`), then when `k` is burst, its neighbors will be `i` and `j`. The coins gained from bursting `k` would be `nums[i] * nums[k] * nums[j]`.

This transforms the problem into a standard DP structure:
-   `dp[i][j]` represents the maximum coins collected by bursting all balloons in the open interval `(i, j)` (i.e., balloons from index `i+1` to `j-1`).

To handle the edge cases (when we burst the first or last balloon), we can pad the `nums` array with `1`s at both ends. So, `nums = [1] + original_nums + [1]`.

#### 3. Dynamic Programming Approach

Let `dp[i][j]` be the maximum coins obtained from bursting all balloons in the subarray `nums[i+1 ... j-1]`. The base case is when `i >= j-1`, meaning there are no balloons to burst in the interval, so `dp[i][j] = 0`.

Here is the algorithm:

1.  **Pad `nums`:** Create a new array `points` by adding `1` to the beginning and end of the original `nums` array. So, `points = [1, ...nums, 1]`.
2.  Get the new length `n = points.length`.
3.  Create a 2D `dp` table of size `n x n`, initialized with zeros.
4.  **Iterate over `length`:** This represents the length of the sub-array we are considering (from 2 up to `n`). `length` is `j - i`.
    -   `length` goes from `2` to `n - 1`.
5.  **Iterate over `i`:** This represents the left boundary of the sub-array.
    -   `i` goes from `0` to `n - length - 1`.
6.  **Calculate `j`:** `j = i + length` (right boundary).
7.  **Iterate over `k`:** This represents the *last* balloon to be burst in the interval `(i, j)`. `k` is between `i+1` and `j-1`.
    -   `k` goes from `i + 1` to `j - 1`.
    -   For each `k`, calculate the coins if `k` is the last balloon burst:
        `coins = points[i] * points[k] * points[j]`
        `coins += dp[i][k]` (max coins from bursting `(i, k)`)
        `coins += dp[k][j]` (max coins from bursting `(k, j)`)
    -   Update `dp[i][j] = Math.max(dp[i][j], coins)`.
8.  The answer is `dp[0][n-1]`.

This approach has a time complexity of O(n^3) due to the three nested loops. The space complexity is O(n^2) for the `dp` table.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    // Add 1s to the beginning and end of the nums array
    const points = [1, ...nums, 1];
    const n = points.length;

    // dp[i][j] stores the maximum coins from bursting balloons in (i, j)
    const dp = Array(n).fill(0).map(() => Array(n).fill(0));

    // length represents the length of the subarray (j - i)
    // Iterate from length 2 up to n-1 (since n is the length of points array)
    for (let length = 2; length < n; length++) {
        // i is the left boundary of the subarray
        for (let i = 0; i < n - length; i++) {
            // j is the right boundary of the subarray
            const j = i + length;

            // k is the last balloon to be burst in the interval (i, j)
            for (let k = i + 1; k < j; k++) {
                // coins if k is the last balloon burst in (i, j)
                // points[i] * points[k] * points[j] are coins from bursting k
                // dp[i][k] are coins from bursting (i, k)
                // dp[k][j] are coins from bursting (k, j)
                const currentCoins = points[i] * points[k] * points[j] +
                                     dp[i][k] + dp[k][j];
                
                dp[i][j] = Math.max(dp[i][j], currentCoins);
            }
        }
    }

    return dp[0][n - 1];
};
```