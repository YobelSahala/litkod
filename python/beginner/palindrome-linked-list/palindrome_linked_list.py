"""
Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome 
or false otherwise.
"""

import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '../../..'))
from utils import ListNode


def isPalindrome(head):
    """
    Check if a linked list is a palindrome.
    
    Args:
        head: Head of the linked list
        
    Returns:
        True if the linked list is a palindrome, False otherwise
        
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    if not head or not head.next:
        return True
    
    # 1. Find the middle of the list using two pointers
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    # 2. Reverse the second half
    prev = None
    current = slow
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    # prev is now the head of the reversed second half
    
    # 3. Compare the first and reversed second halves
    first_half_ptr = head
    second_half_ptr = prev
    while second_half_ptr:
        if first_half_ptr.val != second_half_ptr.val:
            return False
        first_half_ptr = first_half_ptr.next
        second_half_ptr = second_half_ptr.next
    
    return True