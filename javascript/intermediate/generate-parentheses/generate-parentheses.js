/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(currentString, openCount, closeCount) {
        // Base case: if the string is complete
        if (currentString.length === 2 * n) {
            result.push(currentString);
            return;
        }

        // Option 1: Add an opening parenthesis
        if (openCount < n) {
            backtrack(currentString + '(', openCount + 1, closeCount);
        }

        // Option 2: Add a closing parenthesis
        // Only if we have more open parentheses than closed ones
        if (closeCount < openCount) {
            backtrack(currentString + ')', openCount, closeCount + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
};

module.exports = generateParenthesis;