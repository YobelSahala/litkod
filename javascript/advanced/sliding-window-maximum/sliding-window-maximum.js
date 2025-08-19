/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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

module.exports = maxSlidingWindow;