### Invert Binary Tree: Step-by-Step Solution

Inverting a binary tree means that for every node, its left child becomes its right child, and its right child becomes its left child. This process needs to be applied to all nodes in the tree.

#### 1. Recursive Approach (DFS)

Recursion is the most intuitive way to solve this problem. We can traverse the tree and swap the children of each node we visit.

Here is the algorithm:

1.  **Base Case:** If the current `root` is `None` (or `null`), we have reached the end of a branch. There is nothing to invert, so we simply return `None`.
2.  **Recursive Step (Post-order Traversal):**
    a. Recursively call the function on the left child: `invertTree(root.left)`.
    b. Recursively call the function on the right child: `invertTree(root.right)`.
    c. After the left and right subtrees have been inverted, we swap the left and right children of the current `root` node. A temporary variable is needed for the swap:
        - `temp = root.left`
        - `root.left = root.right`
        - `root.right = temp`
3.  Return the `root`.

This approach effectively performs a post-order traversal, ensuring that the subtrees are inverted before the parent's children are swapped. A pre-order or in-order traversal would also work for this particular problem.

The time complexity is O(n), where n is the number of nodes, because we visit each node once. The space complexity is O(h) due to the recursion stack, where h is the height of the tree.

#### 2. Iterative Approach (BFS)

We can also solve this iteratively using a queue, typically in a Breadth-First Search (BFS) manner.

1.  Handle the edge case: If the `root` is `None`, return `None`.
2.  Initialize a queue and add the `root` to it.
3.  Loop as long as the queue is not empty:
    a. Dequeue a `node` from the front of the queue.
    b. Swap the left and right children of this `node`.
    c. If the (new) left child is not `None`, enqueue it.
    d. If the (new) right child is not `None`, enqueue it.
4.  After the loop finishes, the entire tree will have been inverted. Return the original `root`.

This approach also has a time complexity of O(n) and a space complexity of O(w) in the worst case, where w is the maximum width of the tree, for storing nodes in the queue.

### Python Code Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# --- Recursive DFS Approach ---
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


# --- Iterative BFS Approach ---
from collections import deque

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

```
