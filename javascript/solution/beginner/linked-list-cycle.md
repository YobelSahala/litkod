### Linked List Cycle: Step-by-Step Solution

This problem requires us to detect if a cycle exists in a linked list. A cycle occurs if a node's `next` pointer points back to a previous node in the list.

#### 1. Using a Hash Set

A straightforward approach is to keep track of the nodes we have already visited. We can use a `Set` for this, as it provides O(1) average time for insertion and lookup.

1.  Initialize an empty `Set`, `visitedNodes`.
2.  Traverse the list starting from the `head`.
3.  For each `node` we encounter:
    a. Check if `visitedNodes` already has the `node`.
    b. If it does, we have found a cycle. Return `true`.
    c. If it's not, add the `node` to `visitedNodes` and continue to the next node.
4.  If we reach the end of the list (`null`), it means there is no cycle. Return `false`.

This approach works perfectly, but it requires O(n) extra space for the `Set`, where n is the number of nodes in the list.

#### 2. Optimal Approach: Floyd's Tortoise and Hare Algorithm

A more clever and space-efficient solution is to use two pointers that move at different speeds. This is famously known as Floyd's Cycle-Finding Algorithm, or the "Tortoise and Hare" algorithm.

- **Slow Pointer (Tortoise):** Moves one step at a time.
- **Fast Pointer (Hare):** Moves two steps at a time.

Here is the algorithm:

1.  Handle the edge case: If the `head` is `null` or has no `next` node, a cycle is impossible. Return `false`.
2.  Initialize two pointers, `slow` and `fast`, both starting at the `head`.
3.  Enter a loop that continues as long as the `fast` pointer and its `next` pointer are not `null` (this prevents errors when moving the fast pointer two steps).
    a. Move the `slow` pointer one step: `slow = slow.next`.
    b. Move the `fast` pointer two steps: `fast = fast.next.next`.
    c. After moving, check if the `slow` and `fast` pointers are pointing to the **same node**: `if (slow === fast)`.
        - If they are, it means the fast pointer has lapped the slow pointer, which is only possible if there is a cycle. We have found a cycle, so return `true`.
4.  If the loop finishes (meaning the `fast` pointer reached the end of the list), then no cycle was detected. Return `false`.

This algorithm has a time complexity of O(n) because, in the worst case, each node is visited a constant number of times. The key advantage is its space complexity, which is O(1) as we only use two extra pointers.

### JavaScript Code Solution

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};
```
