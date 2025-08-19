/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    const n = nums.length;

    function backtrack(currentSubset, startIndex) {
        // Add the current subset to the result (a copy is important)
        result.push([...currentSubset]);

        // Explore further by adding elements from startIndex onwards
        for (let i = startIndex; i < n; i++) {
            // Choose
            currentSubset.push(nums[i]);
            // Explore
            backtrack(currentSubset, i + 1);
            // Unchoose (Backtrack)
            currentSubset.pop();
        }
    }

    backtrack([], 0);
    return result;
};

module.exports = subsets;