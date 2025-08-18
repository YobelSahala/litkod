### Linked List Cycle: Step-by-Step Solution

This problem requires us to detect if a cycle exists in a linked list. A cycle occurs if a node's `next` pointer points back to a previous node in the list.

#### 1. Using a Hash Set

A straightforward approach is to keep track of the nodes we have already visited. We can use a hash set for this, as it provides O(1) average time for insertion and lookup.

1.  Initialize an empty hash set, `visited_nodes`.
2.  Traverse the list starting from the `head`.
3.  For each `node` we encounter:
    a. Check if the `node` is already in `visited_nodes`.
    b. If it is, we have found a cycle. Return `true`.
    c. If it's not, add the `node` to `visited_nodes` and continue to the next node.
4.  If we reach the end of the list (`None` or `null`), it means there is no cycle. Return `false`.

This approach works perfectly, but it requires O(n) extra space for the hash set, where n is the number of nodes in the list.

#### 2. Optimal Approach: Floyd's Tortoise and Hare Algorithm

A more clever and space-efficient solution is to use two pointers that move at different speeds. This is famously known as Floyd's Cycle-Finding Algorithm, or the "Tortoise and Hare" algorithm.

- **Slow Pointer (Tortoise):** Moves one step at a time.
- **Fast Pointer (Hare):** Moves two steps at a time.

Here is the algorithm:

1.  Handle the edge case: If the `head` is `None` or has no `next` node, a cycle is impossible. Return `false`.
2.  Initialize two pointers, `slow` and `fast`, both starting at the `head`.
3.  Enter a loop that continues as long as the `fast` pointer and its `next` pointer are not `None` (this prevents errors when moving the fast pointer two steps).
    a. Move the `slow` pointer one step: `slow = slow.next`.
    b. Move the `fast` pointer two steps: `fast = fast.next.next`.
    c. After moving, check if the `slow` and `fast` pointers are pointing to the **same node**: `if slow == fast:`.
        - If they are, it means the fast pointer has lapped the slow pointer, which is only possible if there is a cycle. We have found a cycle, so return `true`.
4.  If the loop finishes (meaning the `fast` pointer reached the end of the list), then no cycle was detected. Return `false`.

This algorithm has a time complexity of O(n) because, in the worst case, each node is visited a constant number of times. The key advantage is its space complexity, which is O(1) as we only use two extra pointers.

### Python Code Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def has_cycle(head):
    """
    Detects if a linked list has a cycle using Floyd's Tortoise and Hare algorithm.

    Args:
      head: The head of the linked list.

    Returns:
      True if there is a cycle, False otherwise.
    """
    if not head or not head.next:
        return False

    slow = head
    fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
            
    return False

```
