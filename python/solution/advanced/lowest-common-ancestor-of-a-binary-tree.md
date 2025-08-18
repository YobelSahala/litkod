### Lowest Common Ancestor of a Binary Tree: Step-by-Step Solution

This problem asks us to find the lowest common ancestor (LCA) of two given nodes `p` and `q` in a binary tree. The LCA is the lowest node in the tree that has both `p` and `q` as descendants (a node can be a descendant of itself).

#### 1. Understanding the Problem

Consider the paths from the root to `p` and `q`. The LCA is the node where these two paths diverge. If one node is an ancestor of the other, then the ancestor itself is the LCA.

#### 2. Optimal Approach: Recursive Traversal

This problem is best solved using a recursive approach. The idea is to traverse the tree and, for each node, determine if `p` or `q` (or both) are present in its left or right subtrees.

Here is the algorithm:

1.  **Base Cases:**
    - If the `root` is `None`, return `None` (no `p` or `q` found).
    - If the `root` is `p` or `q`, then the current `root` is the LCA (since a node can be a descendant of itself). Return `root`.
2.  **Recursive Step:**
    a. Recursively call `lowestCommonAncestor` on the left child: `left_lca = lowestCommonAncestor(root.left, p, q)`.
    b. Recursively call `lowestCommonAncestor` on the right child: `right_lca = lowestCommonAncestor(root.right, p, q)`.
3.  **Process Results:**
    - If both `left_lca` and `right_lca` are not `None`, it means `p` and `q` were found in different subtrees of the current `root`. Therefore, the current `root` is the LCA. Return `root`.
    - If only `left_lca` is not `None`, it means both `p` and `q` (or one of them is `left_lca` itself) are in the left subtree. Return `left_lca`.
    - If only `right_lca` is not `None`, it means both `p` and `q` (or one of them is `right_lca` itself) are in the right subtree. Return `right_lca`.
    - If both are `None`, neither `p` nor `q` were found in the subtrees. Return `None`.

This approach has a time complexity of O(n) because, in the worst case, we might visit all nodes. The space complexity is O(h) due to the recursion stack, where h is the height of the tree.

### Python Code Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

def lowest_common_ancestor(root, p, q):
    """
    Finds the lowest common ancestor (LCA) of two nodes in a binary tree.

    Args:
      root: The root node of the binary tree.
      p: The first target node.
      q: The second target node.

    Returns:
      The LCA of p and q.
    """
    # Base cases
    if not root or root == p or root == q:
        return root

    # Recursively search in left and right subtrees
    left_lca = lowest_common_ancestor(root.left, p, q)
    right_lca = lowest_common_ancestor(root.right, p, q)

    # If both left_lca and right_lca are not None, it means p and q are in different subtrees
    # So, the current root is the LCA
    if left_lca and right_lca:
        return root
    # If only left_lca is not None, both p and q are in the left subtree
    elif left_lca:
        return left_lca
    # If only right_lca is not None, both p and q are in the right subtree
    else:
        return right_lca

```
