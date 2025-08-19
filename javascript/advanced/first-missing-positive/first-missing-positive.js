/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length;

    // Phase 1: Place numbers in their correct positions
    // (i.e., put num at index num-1 if num is in range [1, n])
    for (let i = 0; i < n; i++) {
        // Loop until nums[i] is not in range [1, n] or it's already in its correct place
        while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
            const correctPos = nums[i] - 1;
            // Swap nums[i] and nums[correctPos]
            [nums[i], nums[correctPos]] = [nums[correctPos], nums[i]];
        }
    }

    // Phase 2: Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers from 1 to n are present, then n + 1 is the missing one
    return n + 1;
};

module.exports = firstMissingPositive;