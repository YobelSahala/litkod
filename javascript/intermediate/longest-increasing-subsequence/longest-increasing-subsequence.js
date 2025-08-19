/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const tails = [];

    for (const num of nums) {
        // Find the insertion point using binary search
        let i = 0;
        let j = tails.length;
        while (i < j) {
            const m = Math.floor((i + j) / 2);
            if (tails[m] < num) {
                i = m + 1;
            } else {
                j = m;
            }
        }

        if (i === tails.length) {
            // If num is greater than all elements in tails, extend the LIS
            tails.push(num);
        } else {
            // Otherwise, replace the element at index i with num
            // This forms a new LIS of the same length but with a smaller tail
            tails[i] = num;
        }
    }

    return tails.length;
};

module.exports = lengthOfLIS;