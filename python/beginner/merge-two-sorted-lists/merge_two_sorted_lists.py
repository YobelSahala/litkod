"""
Merge Two Sorted Lists

This problem involves merging two sorted linked lists into a single sorted linked list. 
The key is to efficiently combine the nodes while maintaining the sorted order.

Time Complexity: O(m + n)
Space Complexity: O(1)
"""

from utils import ListNode


def merge_two_lists(list1, list2):
    """
    Merges two sorted linked lists into one sorted list.

    Args:
      list1: The head of the first sorted linked list.
      list2: The head of the second sorted linked list.

    Returns:
      The head of the merged sorted linked list.
    """
    dummy = ListNode()
    tail = dummy

    p1, p2 = list1, list2

    while p1 and p2:
        if p1.val <= p2.val:
            tail.next = p1
            p1 = p1.next
        else:
            tail.next = p2
            p2 = p2.next
        tail = tail.next

    # Append the remaining nodes
    if p1:
        tail.next = p1
    elif p2:
        tail.next = p2

    return dummy.next