### Copy List with Random Pointers: Step-by-Step Solution

This problem asks us to create a deep copy of a linked list where each node has a `val`, a `next` pointer, and an additional `random` pointer that can point to any node in the list or `null`.

#### 1. Understanding the Problem

The challenge is that the `random` pointer can point to a node that has not yet been created in the copied list. A simple one-pass copy won't work for the `random` pointers.

#### 2. Optimal Approach: Three Passes (or Two Passes with Interweaving)

There are a few ways to approach this, but a common and efficient method involves using a hash map or interweaving nodes.

**Method 1: Using a Hash Map (Two Passes)**

1.  **First Pass (Create Nodes and Map Originals to Copies):**
    -   Create a hash map `old_to_new` to store the mapping from original nodes to their corresponding new copied nodes.
    -   Iterate through the original list. For each `old_node`, create a `new_node` with the same `val`.
    -   Store the mapping: `old_to_new[old_node] = new_node`.
2.  **Second Pass (Assign `next` and `random` Pointers):**
    -   Iterate through the original list again.
    -   For each `old_node`:
        -   Get its corresponding `new_node` from the `old_to_new` map.
        -   Assign `new_node.next = old_to_new[old_node.next]` (if `old_node.next` exists).
        -   Assign `new_node.random = old_to_new[old_node.random]` (if `old_node.random` exists).
3.  Return `old_to_new[head]` (the head of the copied list).

This approach has a time complexity of O(n) because we iterate through the list twice. The space complexity is O(n) for the hash map.

**Method 2: Interweaving Nodes (Three Passes, O(1) Space - if allowed to modify original list temporarily)**

This method is more complex but achieves O(1) space complexity by temporarily modifying the original list.

1.  **First Pass (Create and Interweave Copies):**
    -   Iterate through the original list. For each `old_node`:
        -   Create a `new_node` with `old_node.val`.
        -   Insert `new_node` between `old_node` and `old_node.next`: `new_node.next = old_node.next`, `old_node.next = new_node`.
2.  **Second Pass (Assign `random` Pointers):**
    -   Iterate through the original list again (using `old_node` and `old_node.next` which is `new_node`).
    -   For each `old_node`:
        -   If `old_node.random` exists, then `old_node.next.random = old_node.random.next` (the `random` pointer of the new node points to the new copy of the node that `old_node.random` pointed to).
3.  **Third Pass (Separate Original and Copy):**
    -   Separate the original list from the copied list.
    -   Initialize `new_head = head.next`.
    -   Iterate through the original list, restoring `old_node.next` and setting `new_node.next`.

This approach has a time complexity of O(n) and a space complexity of O(1).

### Python Code Solution

```python
# Definition for a Node.
# class Node:
#     def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
#         self.val = int(x)
#         self.next = next
#         self.random = random

# --- Method 1: Using a Hash Map ---
def copy_random_list_hash_map(head):
    """
    Creates a deep copy of a linked list with random pointers using a hash map.

    Args:
      head: The head of the original linked list.

    Returns:
      The head of the copied linked list.
    """
    if not head:
        return None

    old_to_new = {} # Map from old node to new node

    # First pass: Create new nodes and store mapping
    current = head
    while current:
        old_to_new[current] = Node(current.val)
        current = current.next

    # Second pass: Assign next and random pointers for new nodes
    current = head
    while current:
        new_node = old_to_new[current]
        new_node.next = old_to_new.get(current.next) # Use .get() to handle None
        new_node.random = old_to_new.get(current.random) # Use .get() to handle None
        current = current.next

    return old_to_new[head]

# --- Method 2: Interweaving Nodes (O(1) space) ---
def copy_random_list_interweave(head):
    """
    Creates a deep copy of a linked list with random pointers by interweaving nodes.

    Args:
      head: The head of the original linked list.

    Returns:
      The head of the copied linked list.
    """
    if not head:
        return None

    # First pass: Create new nodes and interweave them
    # e.g., A -> B -> C becomes A -> A' -> B -> B' -> C -> C'
    current = head
    while current:
        new_node = Node(current.val, current.next)
        current.next = new_node
        current = new_node.next

    # Second pass: Assign random pointers for new nodes
    current = head
    while current:
        if current.random:
            current.next.random = current.random.next
        current = current.next.next # Move to the next original node

    # Third pass: Separate original and copied lists
    new_head = head.next
    current_old = head
    current_new = new_head

    while current_old:
        current_old.next = current_new.next
        current_old = current_old.next
        if current_old:
            current_new.next = current_old.next
            current_new = current_new.next

    return new_head

```
