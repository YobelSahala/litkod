/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // Calculate prefix products
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    // Calculate suffix products and combine with prefix products
    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffixProduct;
        // Convert -0 to 0
        if (answer[i] === 0) answer[i] = 0;
        suffixProduct *= nums[i];
    }

    return answer;
};

module.exports = productExceptSelf;