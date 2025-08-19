"""
Tests for Merge Two Sorted Lists problem.
"""

import pytest
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from utils import ListNode, create_linked_list, linked_list_to_list
from merge_two_sorted_lists import merge_two_lists


class TestMergeTwoSortedLists:
    """Test cases for the merge two sorted lists function."""

    def test_example_merge(self):
        """Test merging [1,2,4] and [1,3,4] to [1,1,2,3,4,4]."""
        list1 = create_linked_list([1, 2, 4])
        list2 = create_linked_list([1, 3, 4])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [1, 1, 2, 3, 4, 4]

    def test_both_empty_lists(self):
        """Test with both empty lists."""
        list1 = create_linked_list([])
        list2 = create_linked_list([])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == []

    def test_empty_first_list(self):
        """Test with empty first list."""
        list1 = create_linked_list([])
        list2 = create_linked_list([0])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [0]

    def test_empty_second_list(self):
        """Test with empty second list."""
        list1 = create_linked_list([1])
        list2 = create_linked_list([])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [1]

    def test_different_lengths(self):
        """Test with lists of different lengths."""
        list1 = create_linked_list([1, 2, 3])
        list2 = create_linked_list([4, 5, 6, 7, 8])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [1, 2, 3, 4, 5, 6, 7, 8]

    def test_negative_values(self):
        """Test with negative values."""
        list1 = create_linked_list([-10, -5, 0])
        list2 = create_linked_list([-8, -3, 1])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [-10, -8, -5, -3, 0, 1]

    def test_duplicate_values(self):
        """Test with duplicate values."""
        list1 = create_linked_list([1, 1, 2])
        list2 = create_linked_list([1, 2, 2])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [1, 1, 1, 2, 2, 2]

    def test_single_node_lists(self):
        """Test with single node lists."""
        list1 = create_linked_list([1])
        list2 = create_linked_list([2])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [1, 2]

    def test_reverse_order(self):
        """Test with second list having smaller values."""
        list1 = create_linked_list([4, 5, 6])
        list2 = create_linked_list([1, 2, 3])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [1, 2, 3, 4, 5, 6]

    def test_interleaved_values(self):
        """Test with interleaved values."""
        list1 = create_linked_list([1, 3, 5, 7])
        list2 = create_linked_list([2, 4, 6, 8])
        merged = merge_two_lists(list1, list2)
        assert linked_list_to_list(merged) == [1, 2, 3, 4, 5, 6, 7, 8]