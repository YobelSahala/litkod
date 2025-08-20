"""
Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node 
at which the two lists intersect. If the two linked lists have no intersection 
at all, return null.
"""

import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '../../..'))
from utils import ListNode


def getIntersectionNode(headA, headB):
    """
    Find the intersection point of two linked lists.
    
    Args:
        headA: Head of the first linked list
        headB: Head of the second linked list
        
    Returns:
        The intersection node, or None if no intersection exists
        
    Time Complexity: O(m + n) where m and n are lengths of the lists
    Space Complexity: O(1)
    """
    if not headA or not headB:
        return None
    
    pA = headA
    pB = headB
    
    # When pA reaches the end of listA, redirect it to headB
    # When pB reaches the end of listB, redirect it to headA
    # If there's an intersection, they will meet at the intersection node
    # If there's no intersection, they will both become None at the same time
    while pA != pB:
        pA = headB if pA is None else pA.next
        pB = headA if pB is None else pB.next
    
    return pA  # Either the intersection node or None