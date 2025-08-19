/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const n = nums.length;

    function backtrack(currentPermutation, usedIndices) {
        // Base case: if the current permutation is complete
        if (currentPermutation.length === n) {
            result.push([...currentPermutation]); // Append a copy
            return;
        }

        for (let i = 0; i < n; i++) {
            // If the number at index i has not been used yet
            if (!usedIndices.has(i)) {
                // Choose
                currentPermutation.push(nums[i]);
                usedIndices.add(i);

                // Explore
                backtrack(currentPermutation, usedIndices);

                // Unchoose (Backtrack)
                usedIndices.delete(i);
                currentPermutation.pop();
            }
        }
    }

    backtrack([], new Set()); // Start with an empty permutation and empty set of used indices
    return result;
};

module.exports = permute;