"""
Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node.

Time Complexity: O(n)
Space Complexity: O(h) where h is the height of the tree
"""

from collections import deque
from utils import TreeNode


def max_depth(root):
    """
    Calculate maximum depth using recursive DFS.
    
    Args:
        root: Root of the binary tree
        
    Returns:
        Maximum depth of the tree
    """
    if not root:
        return 0
    
    left_depth = max_depth(root.left)
    right_depth = max_depth(root.right)
    
    return max(left_depth, right_depth) + 1


def max_depth_iterative(root):
    """
    Calculate maximum depth using iterative BFS.
    """
    if not root:
        return 0
    
    queue = deque([(root, 1)])
    max_depth = 0
    
    while queue:
        node, depth = queue.popleft()
        max_depth = max(max_depth, depth)
        
        if node.left:
            queue.append((node.left, depth + 1))
        if node.right:
            queue.append((node.right, depth + 1))
    
    return max_depth