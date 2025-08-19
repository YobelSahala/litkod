/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Recursive DFS Approach
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null;
    }

    // Swap the children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recur for left and right children
    invertTree(root.left);
    invertTree(root.right);

    return root;
};

module.exports = invertTree;