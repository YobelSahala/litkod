/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Base cases
    if (root === null || root === p || root === q) {
        return root;
    }

    // Recursively search in left and right subtrees
    const leftLCA = lowestCommonAncestor(root.left, p, q);
    const rightLCA = lowestCommonAncestor(root.right, p, q);

    // If both leftLCA and rightLCA are not null, it means p and q are in different subtrees
    // So, the current root is the LCA
    if (leftLCA !== null && rightLCA !== null) {
        return root;
    }
    // If only leftLCA is not null, both p and q are in the left subtree
    else if (leftLCA !== null) {
        return leftLCA;
    }
    // If only rightLCA is not null, both p and q are in the right subtree
    else {
        return rightLCA;
    }
};

module.exports = lowestCommonAncestor;