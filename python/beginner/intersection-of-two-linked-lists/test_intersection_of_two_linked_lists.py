"""
Tests for Intersection of Two Linked Lists problem.
"""

import pytest
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '../../..'))
from utils import ListNode, create_linked_list
from intersection_of_two_linked_lists import getIntersectionNode


class TestIntersectionOfTwoLinkedLists:
    """Test cases for intersection of two linked lists."""

    def test_example_1(self):
        """Test first example with intersection at node 8."""
        # Create intersection node
        intersection = ListNode(8)
        intersection.next = ListNode(4)
        intersection.next.next = ListNode(5)
        
        # Create listA: [4,1] -> intersection
        listA = ListNode(4)
        listA.next = ListNode(1)
        listA.next.next = intersection
        
        # Create listB: [5,6,1] -> intersection  
        listB = ListNode(5)
        listB.next = ListNode(6)
        listB.next.next = ListNode(1)
        listB.next.next.next = intersection
        
        result = getIntersectionNode(listA, listB)
        assert result == intersection
        assert result.val == 8

    def test_example_2(self):
        """Test second example with intersection at node 2."""
        # Create intersection node
        intersection = ListNode(2)
        intersection.next = ListNode(4)
        
        # Create listA: [1,9,1] -> intersection
        listA = ListNode(1)
        listA.next = ListNode(9)
        listA.next.next = ListNode(1)
        listA.next.next.next = intersection
        
        # Create listB: [3] -> intersection
        listB = ListNode(3)
        listB.next = intersection
        
        result = getIntersectionNode(listA, listB)
        assert result == intersection
        assert result.val == 2

    def test_no_intersection(self):
        """Test third example with no intersection."""
        listA = create_linked_list([2, 6, 4])
        listB = create_linked_list([1, 5])
        
        result = getIntersectionNode(listA, listB)
        assert result is None

    def test_both_empty(self):
        """Test with both lists empty."""
        assert getIntersectionNode(None, None) is None

    def test_one_empty(self):
        """Test with one list empty."""
        listA = create_linked_list([1, 2, 3])
        assert getIntersectionNode(listA, None) is None
        assert getIntersectionNode(None, listA) is None

    def test_same_single_node(self):
        """Test with same single node."""
        node = ListNode(1)
        result = getIntersectionNode(node, node)
        assert result == node

    def test_intersection_at_head(self):
        """Test intersection at the head of both lists."""
        shared = create_linked_list([1, 2, 3])
        result = getIntersectionNode(shared, shared)
        assert result == shared

    def test_different_length_lists(self):
        """Test with lists of very different lengths."""
        # Create intersection
        intersection = ListNode(100)
        
        # Short list: [1] -> intersection
        shortList = ListNode(1)
        shortList.next = intersection
        
        # Long list: [2,3,4,5,6] -> intersection
        longList = create_linked_list([2, 3, 4, 5, 6])
        current = longList
        while current.next:
            current = current.next
        current.next = intersection
        
        result = getIntersectionNode(shortList, longList)
        assert result == intersection
        assert result.val == 100