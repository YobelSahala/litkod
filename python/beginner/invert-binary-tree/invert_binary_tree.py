"""
Invert Binary Tree

Inverting a binary tree means that for every node, its left child becomes its right child, 
and its right child becomes its left child.

Time Complexity: O(n)
Space Complexity: O(h) - recursive, O(w) - iterative (where h is height, w is max width)
"""

from collections import deque
from utils import TreeNode


def invert_tree_recursive(root):
    """
    Inverts a binary tree using a recursive (DFS) approach.

    Args:
      root: The root node of the binary tree.

    Returns:
      The root of the inverted tree.
    """
    if not root:
        return None

    # Swap the children
    root.left, root.right = root.right, root.left

    # Recur for left and right children
    invert_tree_recursive(root.left)
    invert_tree_recursive(root.right)

    return root


def invert_tree_iterative(root):
    """
    Inverts a binary tree using an iterative (BFS) approach.

    Args:
      root: The root node of the binary tree.

    Returns:
      The root of the inverted tree.
    """
    if not root:
        return None

    queue = deque([root])
    while queue:
        node = queue.popleft()

        # Swap the children
        node.left, node.right = node.right, node.left

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
            
    return root


# Alias for the default solution
invert_tree = invert_tree_recursive