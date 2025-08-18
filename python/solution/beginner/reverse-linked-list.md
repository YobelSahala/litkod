### Reverse Linked List: Step-by-Step Solution

Reversing a singly linked list is a fundamental pointer manipulation problem. The goal is to change the `next` pointers of all nodes to point to the previous node in the list.

#### 1. Understanding the Data Structure

A singly linked list is made of nodes where each node has two fields: `val` (the data) and `next` (a pointer to the next node in the sequence). The last node's `next` pointer is `None` (or `null`).

When we reverse the list, the original `head` node will become the `tail`, and the original `tail` will become the new `head`.

#### 2. Iterative Approach

The most common way to solve this is iteratively. We need to keep track of three nodes as we traverse the list:

- `prev`: This will store the node that comes *before* the `current` node. It will eventually become the new head of the reversed list. We initialize it to `None`.
- `current`: This is the node we are currently visiting. We start with `current = head`.
- `next_node`: This is a temporary variable to store the *next* node in the original list before we overwrite the `current.next` pointer.

Here is the algorithm:

1.  Initialize `prev = None` and `current = head`.
2.  Loop as long as `current` is not `None`:
    a. Store the next node to visit before we lose the reference: `next_node = current.next`.
    b. Reverse the pointer of the `current` node: `current.next = prev`.
    c. Move the `prev` and `current` pointers one step forward for the next iteration:
        - `prev = current`
        - `current = next_node`
3.  When the loop finishes, `current` will be `None`, and `prev` will be pointing to the last node we visited, which is the new head of the reversed list. Return `prev`.

This approach has a time complexity of O(n) because we visit each node once. The space complexity is O(1) because we only use a few extra pointers, not proportional to the list size.

### Python Code Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def reverse_list(head):
    """
    Reverses a singly linked list.

    Args:
      head: The head of the linked list.

    Returns:
      The new head of the reversed linked list.
    """
    prev = None
    current = head
    while current:
        next_node = current.next  # Store the next node
        current.next = prev       # Reverse the current node's pointer
        prev = current            # Move prev and current one step forward
        current = next_node
    return prev

```
