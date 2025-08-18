### 3Sum: Step-by-Step Solution

This problem asks us to find all unique triplets in an array `nums` that sum up to zero. The challenge lies in efficiently finding these triplets and avoiding duplicate results.

#### 1. Brute-Force Approach

The most straightforward approach is to use three nested loops to check every possible combination of three numbers. This would have a time complexity of O(n^3), which is too slow for the given constraints.

#### 2. Optimal Approach: Sorting + Two Pointers

The most efficient and commonly accepted solution involves sorting the array first and then using a two-pointer technique.

Here's the intuition:
-   **Sorting:** Sorting the array allows us to easily skip duplicate elements and efficiently move pointers to find the desired sum.
-   **Fix one element:** We can iterate through the array, fixing one element (`nums[i]`) at a time. Then, the problem reduces to finding two other elements (`nums[j]` and `nums[k]`) in the *remaining* part of the array such that `nums[j] + nums[k] == -nums[i]`.
-   **Two Pointers:** For the remaining part of the array (from `i+1` to the end), we can use two pointers, `left` and `right`, to find the pair that sums to `-nums[i]`. This is similar to the "Two Sum" problem, but with the added complexity of handling duplicates and moving pointers based on the sum.

Here is the algorithm:

1.  **Sort the array:** Sort `nums` in non-decreasing order. This takes O(n log n) time.
2.  Initialize an empty array `result` to store the unique triplets.
3.  Iterate through the array with a pointer `i` from `0` to `nums.length - 3` (since we need at least two more elements after `i`).
    a. **Skip duplicates for `nums[i]`:** If `i > 0` and `nums[i] === nums[i-1]`, continue to the next iteration. This ensures we don't process the same `nums[i]` multiple times.
    b. Initialize two pointers: `left = i + 1` and `right = nums.length - 1`.
    c. Enter a `while (left < right)` loop:
        i. Calculate the `currentSum = nums[i] + nums[left] + nums[right]`.
        ii. **If `currentSum === 0`:**
            - We found a triplet! Add `[nums[i], nums[left], nums[right]]` to `result`.
            - **Skip duplicates for `nums[left]`:** Increment `left` while `left < right` and `nums[left] === nums[left+1]`.
            - **Skip duplicates for `nums[right]`:** Decrement `right` while `left < right` and `nums[right] === nums[right-1]`.
            - Move both pointers: `left++` and `right--`.
        iii. **If `currentSum < 0`:** The sum is too small. We need a larger sum, so increment `left`.
        iv. **If `currentSum > 0`:** The sum is too large. We need a smaller sum, so decrement `right`.
4.  Return `result`.

This approach has a time complexity of O(n^2) (O(n log n) for sorting + O(n^2) for the nested loops) and a space complexity of O(1) (excluding the space for the result array).

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate for the first element of the triplet
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (currentSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (currentSum < 0) {
                left++;
            } else { // currentSum > 0
                right--;
            }
        }
    }

    return result;
};
```
