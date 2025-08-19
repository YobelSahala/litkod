"""
Utility classes and functions for LeetCode problems.

This module contains common data structures used across multiple problems.
"""

class ListNode:
    """Definition for singly-linked list."""
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        """String representation for debugging."""
        result = []
        current = self
        while current:
            result.append(str(current.val))
            current = current.next
        return " -> ".join(result)

    def __eq__(self, other):
        """Compare two linked lists for equality."""
        current1, current2 = self, other
        while current1 and current2:
            if current1.val != current2.val:
                return False
            current1, current2 = current1.next, current2.next
        return current1 is None and current2 is None


class TreeNode:
    """Definition for a binary tree node."""
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

    def __eq__(self, other):
        """Compare two binary trees for equality."""
        if not self and not other:
            return True
        if not self or not other:
            return False
        return (self.val == other.val and 
                self.left == other.left and 
                self.right == other.right)


class Node:
    """Definition for a Node with next and random pointers (Copy List with Random Pointer)."""
    def __init__(self, x, next=None, random=None):
        self.val = int(x)
        self.next = next
        self.random = random


def create_linked_list(values):
    """
    Create a linked list from a list of values.
    
    Args:
        values: List of values to create the linked list from
        
    Returns:
        Head of the created linked list
    """
    if not values:
        return None
    
    head = ListNode(values[0])
    current = head
    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next
    return head


def linked_list_to_list(head):
    """
    Convert a linked list to a Python list.
    
    Args:
        head: Head of the linked list
        
    Returns:
        Python list containing the values
    """
    result = []
    current = head
    while current:
        result.append(current.val)
        current = current.next
    return result


def create_binary_tree(values):
    """
    Create a binary tree from a list of values (level order).
    None represents missing nodes.
    
    Args:
        values: List of values in level order (None for missing nodes)
        
    Returns:
        Root of the created binary tree
    """
    if not values or values[0] is None:
        return None
    
    root = TreeNode(values[0])
    queue = [root]
    i = 1
    
    while queue and i < len(values):
        node = queue.pop(0)
        
        # Left child
        if i < len(values) and values[i] is not None:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        
        # Right child
        if i < len(values) and values[i] is not None:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1
    
    return root


def tree_to_list(root):
    """
    Convert a binary tree to level order list representation.
    
    Args:
        root: Root of the binary tree
        
    Returns:
        List representation of the tree in level order
    """
    if not root:
        return []
    
    result = []
    queue = [root]
    
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)
    
    # Remove trailing None values
    while result and result[-1] is None:
        result.pop()
    
    return result