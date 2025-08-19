/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0; // Represents dp[i-2]
    let rob2 = 0; // Represents dp[i-1]

    // rob1 = max money from nums[i-2]
    // rob2 = max money from nums[i-1]
    // num = nums[i]

    for (const num of nums) {
        const temp = Math.max(num + rob1, rob2);
        rob1 = rob2;
        rob2 = temp;
    }

    return rob2;
};

module.exports = rob;