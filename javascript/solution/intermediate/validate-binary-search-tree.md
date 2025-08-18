### Validate Binary Search Tree: Step-by-Step Solution

This problem asks us to determine if a given binary tree is a valid Binary Search Tree (BST). The definition of a BST is crucial: for every node, all values in its left subtree must be less than the node's value, and all values in its right subtree must be greater than the node's value. This applies recursively to all subtrees.

#### 1. Incorrect Approach: Local Validation

A common mistake is to only check if `node.left.val < node.val < node.right.val`. This is insufficient because it only validates the immediate children, not the entire subtree. For example, a node in the left subtree might have a value greater than its root, but still less than the overall root, which would violate the BST property.

#### 2. Optimal Approach: Recursive Validation with Min/Max Bounds

The correct way to validate a BST recursively is to pass down a valid range (minimum and maximum allowed values) for each node. As we traverse the tree, we update these bounds for the children.

Here is the algorithm:

1.  Define a helper function, say `isValidBSTHelper(node, minVal, maxVal)`.
2.  **Base Case:** If `node` is `null`, it's a valid empty tree/subtree. Return `true`.
3.  **Validation Step:** Check if the current `node.val` violates the `minVal` or `maxVal` bounds:
    - If `node.val <= minVal` (for left subtree) or `node.val >= maxVal` (for right subtree), return `false`.
4.  **Recursive Calls:** Recursively validate the left and right subtrees:
    - For the left child: `isValidBSTHelper(node.left, minVal, node.val)` (the new upper bound is the current node's value).
    - For the right child: `isValidBSTHelper(node.right, node.val, maxVal)` (the new lower bound is the current node's value).
5.  If both recursive calls return `true`, then the current subtree is valid. Return `true`.

Initial call: `isValidBSTHelper(root, -Infinity, Infinity)` (or appropriate min/max integer values).

This approach has a time complexity of O(n) because we visit each node once. The space complexity is O(h) due to the recursion stack, where h is the height of the tree.

#### 3. In-order Traversal Approach

Another elegant solution leverages the property that an in-order traversal of a BST always yields a sorted sequence of values. We can perform an in-order traversal and keep track of the `previous` node's value. If at any point the current node's value is not greater than the `previous` node's value, then it's not a valid BST.

1.  Initialize `prev = -Infinity`.
2.  Define a helper function for in-order traversal.
3.  During the in-order traversal:
    a. Recursively visit the left child.
    b. After visiting the left child, compare the current `node.val` with `prev`. If `node.val <= prev`, return `false`.
    c. Update `prev = node.val`.
    d. Recursively visit the right child.

This approach also has a time complexity of O(n) and a space complexity of O(h).

### JavaScript Code Solution

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// --- Recursive Validation with Min/Max Bounds ---
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBSTBounds = function(root) {
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

// --- In-order Traversal Approach ---
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBSTInorder = function(root) {
    let prev = -Infinity; // Using a variable to simulate `prev`
    let isValid = true;

    function inorderTraverse(node) {
        if (node === null) {
            return;
        }

        // Traverse left
        inorderTraverse(node.left);
        if (!isValid) return; // Stop if already found invalid

        // Visit current node
        if (node.val <= prev) {
            isValid = false;
            return;
        }
        prev = node.val;

        // Traverse right
        inorderTraverse(node.right);
    }

    inorderTraverse(root);
    return isValid;
};
```
