/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length;
    let maxReach = 0;

    for (let i = 0; i < n; i++) {
        // If current index is beyond maxReach, we can't proceed
        if (i > maxReach) {
            return false;
        }

        // Update the maximum index reachable
        maxReach = Math.max(maxReach, i + nums[i]);

        // If we can reach or pass the last index, return true
        if (maxReach >= n - 1) {
            return true;
        }
    }

    return true; // Should only be reached if n=1 or already true
};

module.exports = canJump;