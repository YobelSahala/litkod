/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // insertPos is the index where the next unique element should be placed.
    let insertPos = 1;

    for (let i = 1; i < nums.length; i++) {
        // If we find a new unique element
        if (nums[i] !== nums[i - 1]) {
            // Place it at the insertPos
            nums[insertPos] = nums[i];
            // Increment the insertPos
            insertPos++;
        }
    }

    return insertPos;
};

module.exports = removeDuplicates;