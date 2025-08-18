### Number of Longest Increasing Subsequence: Step-by-Step Solution

This problem is an extension of the Longest Increasing Subsequence (LIS) problem. Here, we need to not only find the length of the LIS but also count how many such subsequences exist.

#### 1. Understanding the Problem

For `nums = [1,3,5,4,7]`, the LIS length is 4. The LIS are `[1,3,5,7]` and `[1,3,4,7]`. So the answer is 2.

This problem requires dynamic programming, similar to the LIS length problem, but we need to store more information.

#### 2. Dynamic Programming Approach

We will use two DP arrays:
- `dpLen[i]`: The length of the longest increasing subsequence ending at index `i`.
- `dpCount[i]`: The number of longest increasing subsequences ending at index `i`.

Here is the algorithm:

1.  Initialize `dpLen` and `dpCount` arrays, both of size `n` (length of `nums`).
    - Fill `dpLen` with `1`s (each element itself is an LIS of length 1).
    - Fill `dpCount` with `1`s (there's 1 way to form an LIS of length 1 with just that element).
2.  Initialize `maxLength = 0` and `ansCount = 0`.
3.  Iterate `i` from `0` to `n - 1`:
    a. For each `nums[i]`, iterate `j` from `0` to `i - 1`:
        i. If `nums[i] > nums[j]` (meaning `nums[i]` can extend the subsequence ending at `nums[j]`):
            - **If `dpLen[j] + 1 > dpLen[i]`:** This means we found a *new* longer LIS ending at `i`. Update `dpLen[i] = dpLen[j] + 1` and set `dpCount[i] = dpCount[j]` (because all LIS of this new length come from `j`).
            - **Else if `dpLen[j] + 1 === dpLen[i]`:** This means we found another LIS of the *same* length ending at `i`. Add the count from `j` to `dpCount[i]`: `dpCount[i] += dpCount[j]`.
    b. After checking all `j` for current `i`:
        - **Update `maxLength` and `ansCount`:**
            - If `dpLen[i] > maxLength`: We found a new overall longest length. Update `maxLength = dpLen[i]` and `ansCount = dpCount[i]`.
            - Else if `dpLen[i] === maxLength`: We found another LIS of the overall longest length. Add `dpCount[i]` to `ansCount`.
4.  Return `ansCount`.

This approach has a time complexity of O(n^2) due to the nested loops. The space complexity is O(n) for the two DP arrays.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }

    const dpLen = new Array(n).fill(1);   // dpLen[i] = length of LIS ending at nums[i]
    const dpCount = new Array(n).fill(1); // dpCount[i] = number of LIS ending at nums[i]

    let maxLength = 0;
    let ansCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dpLen[j] + 1 > dpLen[i]) {
                    dpLen[i] = dpLen[j] + 1;
                    dpCount[i] = dpCount[j];
                } else if (dpLen[j] + 1 === dpLen[i]) {
                    dpCount[i] += dpCount[j];
                }
            }
        }
        
        // Update overall maxLength and ansCount
        if (dpLen[i] > maxLength) {
            maxLength = dpLen[i];
            ansCount = dpCount[i];
        } else if (dpLen[i] === maxLength) {
            ansCount += dpCount[i];
        }
    }

    return ansCount;
};
```
