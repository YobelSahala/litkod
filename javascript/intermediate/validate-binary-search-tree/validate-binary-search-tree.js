/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Recursive Validation with Min/Max Bounds
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function validate(node, minVal, maxVal) {
        if (node === null) {
            return true;
        }

        // Check current node's value against its bounds
        if (node.val <= minVal || node.val >= maxVal) {
            return false;
        }

        // Recursively validate left and right subtrees with updated bounds
        return (
            validate(node.left, minVal, node.val) &&
            validate(node.right, node.val, maxVal)
        );
    }

    // Initial call with negative and positive infinity as bounds
    return validate(root, -Infinity, Infinity);
};

module.exports = isValidBST;