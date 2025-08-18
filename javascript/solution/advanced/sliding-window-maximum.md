### Sliding Window Maximum: Step-by-Step Solution

You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Each time the sliding window moves right by one position.

Return *the maximum in each window*.

#### 1. Understanding the Problem

For `nums = [1,3,-1,-3,5,3,6,7], k = 3`:
-   Window `[1,3,-1]`, max is `3`
-   Window `[3,-1,-3]`, max is `3`
-   Window `[-1,-3,5]`, max is `5`
...and so on.

A naive approach would be to iterate through each window and find the maximum, which would be O(N*K) and too slow for large N.

#### 2. Optimal Approach: Deque (Double-Ended Queue)

The most efficient solution uses a **deque (double-ended queue)** to store indices of elements in the current window. The deque will maintain elements in **decreasing order** of their values. This way, the maximum element for the current window will always be at the front of the deque.

Here's the intuition:
-   When we add a new element to the window, we remove all smaller elements from the back of the deque because they can never be the maximum (they are smaller and appear earlier).
-   When the window slides, we remove elements from the front of the deque if their index falls outside the current window.

Here is the algorithm:

1.  Initialize an empty deque `dq` (can use a JavaScript array and `push`/`shift`/`pop` for deque operations).
2.  Initialize an empty array `result` to store the maximums.
3.  Iterate `i` from `0` to `nums.length - 1`:
    a. **Remove elements out of window:** If the deque is not empty and its front element's index (`dq[0]`) is less than `i - k + 1` (meaning it's outside the current window), remove it from the front: `dq.shift()`.
    b. **Maintain decreasing order:** While the deque is not empty and `nums[i]` is greater than or equal to `nums[dq[dq.length - 1]]` (the element at the back of the deque), remove elements from the back: `dq.pop()`.
    c. **Add current element:** Add the current index `i` to the back of the deque: `dq.push(i)`.
    d. **Record maximum:** If `i` is greater than or equal to `k - 1` (meaning the window is fully formed), the maximum for the current window is `nums[dq[0]]` (the element at the front of the deque). Add this to `result`.
4.  Return `result`.

This approach has a time complexity of O(n) because each element is added to and removed from the deque at most once. The space complexity is O(k) for the deque.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0 || k === 0) {
        return [];
    }

    const dq = []; // Stores indices
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // 1. Remove elements out of window
        if (dq.length > 0 && dq[0] < i - k + 1) {
            dq.shift();
        }

        // 2. Maintain decreasing order (remove smaller elements from back)
        while (dq.length > 0 && nums[i] >= nums[dq[dq.length - 1]]) {
            dq.pop();
        }

        // 3. Add current element's index to back
        dq.push(i);

        // 4. Record maximum once window is fully formed
        if (i >= k - 1) {
            result.push(nums[dq[0]]);
        }
    }

    return result;
};
```
