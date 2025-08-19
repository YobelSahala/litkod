"""
Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached 
again by continuously following the next pointer.

Time Complexity: O(n)
Space Complexity: O(1)
"""

from utils import ListNode


def has_cycle(head):
    """
    Detect cycle in linked list using Floyd's Cycle Detection (Tortoise and Hare).
    
    Args:
        head: Head of the linked list
        
    Returns:
        True if there is a cycle, False otherwise
    """
    if not head or not head.next:
        return False
    
    slow = head
    fast = head.next
    
    while slow != fast:
        if not fast or not fast.next:
            return False
        slow = slow.next
        fast = fast.next.next
    
    return True


def has_cycle_set(head):
    """
    Alternative solution using hash set.
    Time Complexity: O(n), Space Complexity: O(n)
    """
    visited = set()
    current = head
    
    while current:
        if current in visited:
            return True
        visited.add(current)
        current = current.next
    
    return False