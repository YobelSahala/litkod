### Invert Binary Tree: Step-by-Step Solution

Inverting a binary tree means that for every node, its left child becomes its right child, and its right child becomes its left child. This process needs to be applied to all nodes in the tree.

#### 1. Recursive Approach (DFS)

Recursion is the most intuitive way to solve this problem. We can traverse the tree and swap the children of each node we visit.

Here is the algorithm:

1.  **Base Case:** If the current `root` is `null`, we have reached the end of a branch. There is nothing to invert, so we simply return `null`.
2.  **Recursive Step (Pre-order Traversal):**
    a. Swap the left and right children of the current `root` node. A temporary variable is needed for the swap:
        - `const temp = root.left;`
        - `root.left = root.right;`
        - `root.right = temp;`
    b. Recursively call the function on the (new) left child: `invertTree(root.left)`.
    c. Recursively call the function on the (new) right child: `invertTree(root.right)`.
3.  Return the `root`.

This approach effectively performs a pre-order traversal. A post-order or in-order traversal would also work for this particular problem.

The time complexity is O(n), where n is the number of nodes, because we visit each node once. The space complexity is O(h) due to the recursion stack, where h is the height of the tree.

#### 2. Iterative Approach (BFS)

We can also solve this iteratively using a queue, typically in a Breadth-First Search (BFS) manner.

1.  Handle the edge case: If the `root` is `null`, return `null`.
2.  Initialize a queue (using a JS array) and add the `root` to it.
3.  Loop as long as the queue is not empty:
    a. Dequeue a `node` from the front of the queue using `queue.shift()`.
    b. Swap the left and right children of this `node`.
    c. If the `node`'s left child is not `null`, enqueue it.
    d. If the `node`'s right child is not `null`, enqueue it.
4.  After the loop finishes, the entire tree will have been inverted. Return the original `root`.

This approach also has a time complexity of O(n) and a space complexity of O(w) in the worst case, where w is the maximum width of the tree, for storing nodes in the queue.

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
 * @return {TreeNode}
 */
var invertTreeRecursive = function(root) {
    if (root === null) {
        return null;
    }

    // Swap the children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recur for left and right children
    invertTreeRecursive(root.left);
    invertTreeRecursive(root.right);

    return root;
};

// --- Iterative BFS Approach ---
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTreeIterative = function(root) {
    if (root === null) {
        return null;
    }

    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();

        // Swap the children
        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left !== null) {
            queue.push(node.left);
        }
        if (node.right !== null) {
            queue.push(node.right);
        }
    }

    return root;
};
```
