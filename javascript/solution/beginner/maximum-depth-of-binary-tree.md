### Maximum Depth of Binary Tree: Step-by-Step Solution

This problem asks for the maximum depth of a binary tree, which is the length of the longest path from the root to a leaf node. This is a classic tree traversal problem.

#### 1. Understanding the Problem

The depth of a node is its distance from the root. A leaf node is a node with no children. The maximum depth is the depth of the deepest leaf node.

- An empty tree (root is `null`) has a depth of 0.
- A tree with only a root node has a depth of 1.

#### 2. Recursive Approach (Depth-First Search - DFS)

Recursion is a very natural way to solve this problem. The depth of a tree is related to the depths of its subtrees.

The maximum depth of a tree rooted at `node` is:
`1 + Math.max(depth of left subtree, depth of right subtree)`

The `1` accounts for the current `node` itself.

Here is the algorithm:

1.  **Base Case:** If the current `root` is `null`, it means the tree (or subtree) is empty, so its depth is 0. Return 0.
2.  **Recursive Step:** If the `root` is not `null`:
    a. Recursively calculate the maximum depth of the left subtree: `leftDepth = maxDepth(root.left)`.
    b. Recursively calculate the maximum depth of the right subtree: `rightDepth = maxDepth(root.right)`.
    c. The depth of the tree at the current `root` is `1 + Math.max(leftDepth, rightDepth)`. Return this value.

This is a post-order traversal, as we compute the depths of the children before computing the depth of the parent.

The time complexity is O(n), where n is the number of nodes, because we visit each node once. The space complexity is O(h) in the worst case, where h is the height of the tree, due to the recursion stack. For a skewed tree, this can be O(n), and for a balanced tree, it's O(log n).

#### 3. Iterative Approach (Breadth-First Search - BFS)

We can also solve this iteratively using a level-order traversal (BFS), which is often implemented with a queue (using a simple array in JS).

1.  Initialize `depth = 0`.
2.  If the `root` is `null`, return `depth`.
3.  Initialize a queue and add the `root` to it: `const queue = [root]`.
4.  Loop as long as the queue is not empty:
    a. Get the number of nodes at the current level: `levelSize = queue.length`.
    b. Increment the `depth` by 1.
    c. Loop `levelSize` times to process all nodes at the current level:
        i. Dequeue a `node` using `queue.shift()`.
        ii. If the `node` has a left child, enqueue it.
        iii. If the `node` has a right child, enqueue it.
5.  After the main loop finishes, `depth` will hold the maximum depth of the tree.

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

// --- Recursive DFS Approach ---
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthRecursive = function(root) {
    if (root === null) {
        return 0;
    }
    
    const leftDepth = maxDepthRecursive(root.left);
    const rightDepth = maxDepthRecursive(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
};

// --- Iterative BFS Approach ---
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthIterative = function(root) {
    if (root === null) {
        return 0;
    }

    let depth = 0;
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        depth++;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return depth;
};
```
