/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1]; // Initialize with -1 as a base for length calculation
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else { // s[i] === ')'
            stack.pop();
            if (stack.length === 0) {
                // If stack is empty, this ')' doesn't have a matching '('
                // Push current index as the new base for future calculations
                stack.push(i);
            } else {
                // Calculate current valid length
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
};

/**
 * Dynamic Programming approach (alternative solution)
 * @param {string} s
 * @return {number}
 */
var longestValidParenthesesDP = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0); // dp[i] is the length of the longest valid parentheses substring ending at i
    let maxLength = 0;

    for (let i = 1; i < n; i++) {
        if (s[i] === ')') {
            if (s[i - 1] === '(') { // Case: ...()
                dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') { // Case: ...))
                dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }

    return maxLength;
};

module.exports = longestValidParentheses;