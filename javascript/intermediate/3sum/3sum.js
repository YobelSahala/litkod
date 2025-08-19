/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate for the first element of the triplet
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            if (currentSum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the second element
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicates for the third element
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                left++;
                right--;
            } else if (currentSum < 0) {
                left++;
            } else { // currentSum > 0
                right--;
            }
        }
    }

    return result;
};

module.exports = threeSum;