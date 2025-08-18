### Maximum Depth of Binary Tree: Step-by-Step Solution

This problem asks for the maximum depth of a binary tree, which is the length of the longest path from the root to a leaf node. This is a classic tree traversal problem.

#### 1. Understanding the Problem

The depth of a node is its distance from the root. A leaf node is a node with no children. The maximum depth is the depth of the deepest leaf node.

- An empty tree (root is `None`) has a depth of 0.
- A tree with only a root node has a depth of 1.

#### 2. Recursive Approach (Depth-First Search - DFS)

Recursion is a very natural way to solve this problem. The depth of a tree is related to the depths of its subtrees.

The maximum depth of a tree rooted at `node` is:
`1 + max(depth of left subtree, depth of right subtree)`

The `1` accounts for the current `node` itself.

Here is the algorithm:

1.  **Base Case:** If the current `root` is `None`, it means the tree (or subtree) is empty, so its depth is 0. Return 0.
2.  **Recursive Step:** If the `root` is not `None`:
    a. Recursively calculate the maximum depth of the left subtree: `left_depth = maxDepth(root.left)`.
    b. Recursively calculate the maximum depth of the right subtree: `right_depth = maxDepth(root.right)`.
    c. The depth of the tree at the current `root` is `1 + max(left_depth, right_depth)`. Return this value.

This is a post-order traversal, as we compute the depths of the children before computing the depth of the parent.

The time complexity is O(n), where n is the number of nodes, because we visit each node once. The space complexity is O(h) in the worst case, where h is the height of the tree, due to the recursion stack. For a skewed tree, this can be O(n), and for a balanced tree, it's O(log n).

#### 3. Iterative Approach (Breadth-First Search - BFS)

We can also solve this iteratively using a level-order traversal (BFS), which is often implemented with a queue.

1.  Initialize `depth = 0`.
2.  If the `root` is `None`, return `depth`.
3.  Initialize a queue and add the `root` to it.
4.  Loop as long as the queue is not empty:
    a. Get the number of nodes at the current level: `level_size = len(queue)`.
    b. Increment the `depth` by 1.
    c. Loop `level_size` times to process all nodes at the current level:
        i. Dequeue a `node`.
        ii. If the `node` has a left child, enqueue it.
        iii. If the `node` has a right child, enqueue it.
5.  After the main loop finishes, `depth` will hold the maximum depth of the tree.

### Python Code Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# --- Recursive DFS Approach ---
def max_depth_recursive(root):
    """
    Calculates the maximum depth of a binary tree using recursion.

    Args:
      root: The root node of the binary tree.

    Returns:
      The maximum depth of the tree.
    """
    if not root:
        return 0
    
    left_depth = max_depth_recursive(root.left)
    right_depth = max_depth_recursive(root.right)
    
    return 1 + max(left_depth, right_depth)


# --- Iterative BFS Approach ---
from collections import deque

def max_depth_iterative(root):
    """
    Calculates the maximum depth of a binary tree using iteration (BFS).

    Args:
      root: The root node of the binary tree.

    Returns:
      The maximum depth of the tree.
    """
    if not root:
        return 0

    depth = 0
    queue = deque([root])

    while queue:
        level_size = len(queue)
        depth += 1
        for _ in range(level_size):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
                
    return depth

```
