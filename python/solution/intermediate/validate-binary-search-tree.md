### Validate Binary Search Tree: Step-by-Step Solution

This problem asks us to determine if a given binary tree is a valid Binary Search Tree (BST). The definition of a BST is crucial: for every node, all values in its left subtree must be less than the node's value, and all values in its right subtree must be greater than the node's value. This applies recursively to all subtrees.

#### 1. Incorrect Approach: Local Validation

A common mistake is to only check if `node.left.val < node.val < node.right.val`. This is insufficient because it only validates the immediate children, not the entire subtree. For example, a node in the left subtree might have a value greater than its root, but still less than the overall root, which would violate the BST property.

#### 2. Optimal Approach: Recursive Validation with Min/Max Bounds

The correct way to validate a BST recursively is to pass down a valid range (minimum and maximum allowed values) for each node. As we traverse the tree, we update these bounds for the children.

Here is the algorithm:

1.  Define a helper function, say `is_valid_bst_helper(node, min_val, max_val)`.
2.  **Base Case:** If `node` is `None`, it's a valid empty tree/subtree. Return `True`.
3.  **Validation Step:** Check if the current `node.val` violates the `min_val` or `max_val` bounds:
    - If `node.val <= min_val` (for left subtree) or `node.val >= max_val` (for right subtree), return `False`.
4.  **Recursive Calls:** Recursively validate the left and right subtrees:
    - For the left child: `is_valid_bst_helper(node.left, min_val, node.val)` (the new upper bound is the current node's value).
    - For the right child: `is_valid_bst_helper(node.right, node.val, max_val)` (the new lower bound is the current node's value).
5.  If both recursive calls return `True`, then the current subtree is valid. Return `True`.

Initial call: `is_valid_bst_helper(root, -infinity, +infinity)` (or appropriate min/max integer values).

This approach has a time complexity of O(n) because we visit each node once. The space complexity is O(h) due to the recursion stack, where h is the height of the tree.

#### 3. In-order Traversal Approach

Another elegant solution leverages the property that an in-order traversal of a BST always yields a sorted sequence of values. We can perform an in-order traversal and keep track of the `previous` node's value. If at any point the current node's value is not greater than the `previous` node's value, then it's not a valid BST.

1.  Initialize `prev = -infinity` (or a very small number).
2.  Define a helper function for in-order traversal.
3.  During the in-order traversal:
    a. Recursively visit the left child.
    b. After visiting the left child, compare the current `node.val` with `prev`. If `node.val <= prev`, return `False`.
    c. Update `prev = node.val`.
    d. Recursively visit the right child.

This approach also has a time complexity of O(n) and a space complexity of O(h).

### Python Code Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

import math

# --- Recursive Validation with Min/Max Bounds ---
def is_valid_bst_bounds(root):
    """
    Validates if a binary tree is a BST using min/max bounds.

    Args:
      root: The root node of the binary tree.

    Returns:
      True if it's a valid BST, False otherwise.
    """
    def validate(node, min_val, max_val):
        if not node:
            return True
        
        # Check current node's value against its bounds
        if not (min_val < node.val < max_val):
            return False
            
        # Recursively validate left and right subtrees with updated bounds
        return (validate(node.left, min_val, node.val) and
                validate(node.right, node.val, max_val))

    # Initial call with negative and positive infinity as bounds
    return validate(root, -math.inf, math.inf)


# --- In-order Traversal Approach ---
def is_valid_bst_inorder(root):
    """
    Validates if a binary tree is a BST using in-order traversal.

    Args:
      root: The root node of the binary tree.

    Returns:
      True if it's a valid BST, False otherwise.
    """
    # Using a list to simulate a mutable `prev` variable in Python closures
    prev = [-math.inf]

    def inorder_traverse(node):
        if not node:
            return True

        # Traverse left
        if not inorder_traverse(node.left):
            return False

        # Visit current node
        if node.val <= prev[0]:
            return False
        prev[0] = node.val

        # Traverse right
        return inorder_traverse(node.right)

    return inorder_traverse(root)

```