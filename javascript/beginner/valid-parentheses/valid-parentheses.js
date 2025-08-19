/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (mapping[char]) { // If it's a closing bracket
            const topElement = stack.length === 0 ? '#' : stack.pop();
            if (topElement !== mapping[char]) {
                return false;
            }
        } else { // If it's an opening bracket
            stack.push(char);
        }
    }

    return stack.length === 0; // The stack should be empty for a valid string
};

module.exports = isValid;