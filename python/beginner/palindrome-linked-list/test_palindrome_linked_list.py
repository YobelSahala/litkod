"""
Tests for Palindrome Linked List problem.
"""

import pytest
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '../../..'))
from utils import ListNode, create_linked_list
from palindrome_linked_list import isPalindrome


class TestPalindromeLinkedList:
    """Test cases for palindrome linked list."""

    def test_example_1(self):
        """Test [1,2,2,1] - should be palindrome."""
        head = create_linked_list([1, 2, 2, 1])
        assert isPalindrome(head) == True

    def test_example_2(self):
        """Test [1,2] - should not be palindrome."""
        head = create_linked_list([1, 2])
        assert isPalindrome(head) == False

    def test_single_node(self):
        """Test single node - should be palindrome."""
        head = ListNode(1)
        assert isPalindrome(head) == True

    def test_empty_list(self):
        """Test empty list - should be palindrome."""
        assert isPalindrome(None) == True

    def test_odd_length_palindrome(self):
        """Test odd length palindrome [1,2,3,2,1]."""
        head = create_linked_list([1, 2, 3, 2, 1])
        assert isPalindrome(head) == True

    def test_even_length_palindrome(self):
        """Test even length palindrome [1,2,3,3,2,1]."""
        head = create_linked_list([1, 2, 3, 3, 2, 1])
        assert isPalindrome(head) == True

    def test_odd_length_not_palindrome(self):
        """Test odd length non-palindrome [1,2,3,4,5]."""
        head = create_linked_list([1, 2, 3, 4, 5])
        assert isPalindrome(head) == False

    def test_even_length_not_palindrome(self):
        """Test even length non-palindrome [1,2,3,4]."""
        head = create_linked_list([1, 2, 3, 4])
        assert isPalindrome(head) == False

    def test_two_nodes_same(self):
        """Test [1,1] - should be palindrome."""
        head = create_linked_list([1, 1])
        assert isPalindrome(head) == True

    def test_all_same_values(self):
        """Test [2,2,2,2] - should be palindrome."""
        head = create_linked_list([2, 2, 2, 2])
        assert isPalindrome(head) == True

    def test_large_palindrome(self):
        """Test larger palindrome."""
        head = create_linked_list([1, 2, 3, 4, 5, 4, 3, 2, 1])
        assert isPalindrome(head) == True

    def test_negative_numbers(self):
        """Test palindrome with negative numbers."""
        head = create_linked_list([-1, 0, 1, 0, -1])
        assert isPalindrome(head) == True