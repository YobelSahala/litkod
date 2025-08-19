/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length;
    if (n === 0) {
        return 0;
    }

    const dpLen = new Array(n).fill(1);   // dpLen[i] = length of LIS ending at nums[i]
    const dpCount = new Array(n).fill(1); // dpCount[i] = number of LIS ending at nums[i]

    let maxLength = 0;
    let ansCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dpLen[j] + 1 > dpLen[i]) {
                    dpLen[i] = dpLen[j] + 1;
                    dpCount[i] = dpCount[j];
                } else if (dpLen[j] + 1 === dpLen[i]) {
                    dpCount[i] += dpCount[j];
                }
            }
        }
        
        // Update overall maxLength and ansCount
        if (dpLen[i] > maxLength) {
            maxLength = dpLen[i];
            ansCount = dpCount[i];
        } else if (dpLen[i] === maxLength) {
            ansCount += dpCount[i];
        }
    }

    return ansCount;
};

module.exports = findNumberOfLIS;