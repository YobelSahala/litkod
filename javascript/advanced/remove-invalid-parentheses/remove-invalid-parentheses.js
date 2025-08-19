/**
 * Helper function to check if a string has valid parentheses.
 * @param {string} s
 * @return {boolean}
 */
function isValidParentheses(s) {
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            balance++;
        } else if (char === ')') {
            balance--;
        }
        if (balance < 0) {
            return false;
        }
    }
    return balance === 0;
}

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    const queue = [s];
    const visited = new Set();
    visited.add(s);
    const result = [];
    let foundValid = false;

    while (queue.length > 0) {
        const currentString = queue.shift();

        if (isValidParentheses(currentString)) {
            result.push(currentString);
            foundValid = true;
        }

        // If we found valid strings at this level, don't explore further levels
        // because we are looking for minimum removals.
        if (foundValid) {
            continue;
        }

        // Generate next level strings by removing one parenthesis
        for (let i = 0; i < currentString.length; i++) {
            const char = currentString[i];
            if (char === '(' || char === ')') {
                const nextString = currentString.substring(0, i) + currentString.substring(i + 1);
                if (!visited.has(nextString)) {
                    visited.add(nextString);
                    queue.push(nextString);
                }
            }
        }
    }

    return result;
};

module.exports = removeInvalidParentheses;