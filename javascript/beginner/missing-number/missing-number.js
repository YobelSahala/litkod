// XOR Approach
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    let missing = n; // Initialize with n, as it's part of the range [0, n]

    for (let i = 0; i < n; i++) {
        missing ^= i; // XOR with expected number
        missing ^= nums[i]; // XOR with actual number
    }

    return missing;
};

module.exports = missingNumber;