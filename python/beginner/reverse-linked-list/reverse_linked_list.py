"""
Reverse Linked List

Reversing a singly linked list is a fundamental pointer manipulation problem. 
The goal is to change the next pointers of all nodes to point to the previous node in the list.

Time Complexity: O(n)
Space Complexity: O(1)
"""

from utils import ListNode


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