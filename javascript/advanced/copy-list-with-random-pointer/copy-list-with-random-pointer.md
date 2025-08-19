### Copy List with Random Pointers: Step-by-Step Solution

A linked list of `n` nodes is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a **deep copy** of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its `val` and `next` pointer set to the same values as the original node. The `random` pointer of the new nodes should point to new nodes in the copied list such that if the original `random` pointer pointed to the `j`th node, the new `random` pointer should point to the `j`th node as well.

Return *the head of the copied linked list*.

The linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of `[val, random_index]` where:

*   `val`: an integer representing `Node.val`
*   `random_index`: the index of the node (from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.

#### 1. Understanding the Problem

The challenge is that the `random` pointer can point to a node that has not yet been created in the copied list. A simple one-pass copy won't work for the `random` pointers.

#### 2. Optimal Approach: Three Passes (or Two Passes with Interweaving)

There are a few ways to approach this, but a common and efficient method involves using a hash map or interweaving nodes.

**Method 1: Using a Hash Map (Two Passes)**

1.  **First Pass (Create Nodes and Map Originals to Copies):**
    -   Create a `Map` `oldToNew` to store the mapping from original nodes to their corresponding new copied nodes.
    -   Iterate through the original list. For each `oldNode`, create a `newNode` with the same `val`.
    -   Store the mapping: `oldToNew.set(oldNode, newNode)`.
2.  **Second Pass (Assign `next` and `random` Pointers):**
    -   Iterate through the original list again.
    -   For each `oldNode`:
        -   Get its corresponding `newNode` from the `oldToNew` map.
        -   Assign `newNode.next = oldToNew.get(oldNode.next)` (if `oldNode.next` exists).
        -   Assign `newNode.random = oldToNew.get(oldNode.random)` (if `oldNode.random` exists).
3.  Return `oldToNew.get(head)` (the head of the copied list).

This approach has a time complexity of O(n) because we iterate through the list twice. The space complexity is O(n) for the hash map.

**Method 2: Interweaving Nodes (Three Passes, O(1) Space - if allowed to modify original list temporarily)**

This method is more complex but achieves O(1) space complexity by temporarily modifying the original list.

1.  **First Pass (Create and Interweave Copies):**
    -   Iterate through the original list. For each `oldNode`:
        -   Create a `newNode` with `oldNode.val`.
        -   Insert `newNode` between `oldNode` and `oldNode.next`: `newNode.next = oldNode.next`, `oldNode.next = newNode`.
2.  **Second Pass (Assign `random` Pointers):**
    -   Iterate through the original list again (using `oldNode` and `oldNode.next` which is `newNode`).
    -   For each `oldNode`:
        -   If `oldNode.random` exists, then `oldNode.next.random = old_node.random.next` (the `random` pointer of the new node points to the new copy of the node that `old_node.random` pointed to).
3.  **Third Pass (Separate Original and Copy):**
    -   Separate the original list from the copied list.
    -   Initialize `newHead = head.next`.
    -   Iterate through the original list, restoring `oldNode.next` and setting `newNode.next`.

This approach has a time complexity of O(n) and a space complexity of O(1).

### JavaScript Code Solution

```javascript
/**
 * Definition for a Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

// --- Method 1: Using a Hash Map ---
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomListHashMap = function(head) {
    if (!head) {
        return null;
    }

    const oldToNew = new Map(); // Map from old node to new node

    // First pass: Create new nodes and store mapping
    let current = head;
    while (current) {
        oldToNew.set(current, new Node(current.val));
        current = current.next;
    }

    // Second pass: Assign next and random pointers for new nodes
    current = head;
    while (current) {
        const newNode = oldToNew.get(current);
        newNode.next = oldToNew.get(current.next) || null; // Use || null to handle undefined/null
        newNode.random = oldToNew.get(current.random) || null; // Use || null to handle undefined/null
        current = current.next;
    }

    return oldToNew.get(head);
};

// --- Method 2: Interweaving Nodes (O(1) space) ---
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomListInterweave = function(head) {
    if (!head) {
        return null;
    }

    // First pass: Create new nodes and interweave them
    // e.g., A -> B -> C becomes A -> A' -> B -> B' -> C -> C'
    let current = head;
    while (current) {
        const newNode = new Node(current.val, current.next);
        current.next = newNode;
        current = newNode.next;
    }

    // Second pass: Assign random pointers for new nodes
    current = head;
    while (current) {
        if (current.random) {
            current.next.random = current.random.next;
        }
        current = current.next.next; // Move to the next original node
    }

    // Third pass: Separate original and copied lists
    const newHead = head.next;
    let currentOld = head;
    let currentNew = newHead;

    while (currentOld) {
        currentOld.next = currentNew.next;
        currentOld = currentOld.next;
        if (currentOld) { // Check if currentOld is not null before accessing its next
            currentNew.next = currentOld.next;
            currentNew = currentNew.next;
        }
    }

    return newHead;
};
```
