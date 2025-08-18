### Maximum Subarray: Step-by-Step Solution

This problem asks for the largest sum of any contiguous subarray within a given array of integers. This is a classic problem that can be solved very efficiently using Kadane's Algorithm.

#### 1. Understanding the Problem

A subarray is a contiguous part of an array. We need to find the one that has the greatest sum. For example, in `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`, the subarray `[4, -1, 2, 1]` has the sum of 6, which is the maximum possible.

#### 2. The Core Idea: Kadane's Algorithm

The main idea behind Kadane's algorithm is to scan through the array while keeping track of two things:

1.  `currentSum`: The sum of the subarray ending at the current position.
2.  `maxSum`: The maximum sum found so far across the entire array.

The crucial insight is this: as we iterate through the array, the maximum sum subarray ending at the current position `i` is either:
- The element at `i` itself.
- The element at `i` plus the maximum sum subarray ending at the previous position `i-1`.

So, for each element, we make a choice: do we extend the previous subarray, or do we start a new subarray here? We extend the previous one only if its sum is positive. If the `currentSum` becomes negative, it's better to drop it and start a new subarray from the current element, because a negative sum will only decrease the value of any future subarray.

#### 3. The Algorithm

1.  Initialize `maxSum` to the first element of the array. This handles the case of an array with one element and sets a baseline.
2.  Initialize `currentSum` to `0`.
3.  Iterate through each `num` in the `nums` array:
    a. Add the current `num` to `currentSum`.
    b. Compare `currentSum` with `maxSum`. If `currentSum` is greater, update `maxSum`.
    c. **The key step:** If `currentSum` becomes negative, reset it to `0`. This is because a negative `currentSum` will not help in finding a larger sum subarray, so we are better off starting a new subarray from the next element.
4.  Return `maxSum`.

*Note on initialization:* A common way to implement this is to initialize both `maxSum` and `currentSum` to the first element and start the loop from the second element. A slightly cleaner way is to initialize `maxSum` to negative infinity and `currentSum` to 0, which handles all cases including all negative numbers correctly.

This approach has a time complexity of O(n) and a space complexity of O(1).

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    
    return maxSum;
};

// A slightly more concise version
var maxSubArrayConcise = function(nums) {
    let maxSoFar = nums[0];
    let currentMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        maxSoFar = Math.max(maxSoFar, currentMax);
    }

    return maxSoFar;
};
```
