"""
Tests for Binary Search problem.
"""

import pytest
from binary_search import search


class TestBinarySearch:
    """Test cases for the binary search function."""

    def test_example_1(self):
        """Test finding target in array."""
        assert search([-1, 0, 3, 5, 9, 12], 9) == 4

    def test_example_2(self):
        """Test target not found in array."""
        assert search([-1, 0, 3, 5, 9, 12], 2) == -1

    def test_single_element_found(self):
        """Test with single element that is the target."""
        assert search([5], 5) == 0

    def test_single_element_not_found(self):
        """Test with single element that is not the target."""
        assert search([5], 2) == -1

    def test_two_elements_first(self):
        """Test finding first element in two-element array."""
        assert search([1, 3], 1) == 0

    def test_two_elements_second(self):
        """Test finding second element in two-element array."""
        assert search([1, 3], 3) == 1

    def test_two_elements_not_found(self):
        """Test target not in two-element array."""
        assert search([1, 3], 2) == -1

    def test_empty_array(self):
        """Test with empty array."""
        assert search([], 1) == -1

    def test_large_array(self):
        """Test with large array."""
        nums = list(range(0, 1000, 2))  # Even numbers from 0 to 998
        assert search(nums, 500) == 250
        assert search(nums, 501) == -1  # Odd number not in array

    def test_negative_numbers(self):
        """Test with negative numbers."""
        assert search([-10, -5, -1, 0, 5, 10], -1) == 2
        assert search([-10, -5, -1, 0, 5, 10], -3) == -1

    def test_duplicates_at_edges(self):
        """Test with array containing duplicates."""
        # Note: problem states "unique integers" but test edge cases
        assert search([1, 2, 2, 2, 3], 2) in [1, 2, 3]  # Any valid index
        assert search([1, 2, 3], 2) == 1