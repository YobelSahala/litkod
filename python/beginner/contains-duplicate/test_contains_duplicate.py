"""
Tests for Contains Duplicate problem.
"""

import pytest
from contains_duplicate import contains_duplicate, contains_duplicate_pythonic


class TestContainsDuplicate:
    """Test cases for the contains duplicate functions."""

    def test_example_1(self):
        """Test array with duplicates."""
        assert contains_duplicate([1, 2, 3, 1]) == True
        assert contains_duplicate_pythonic([1, 2, 3, 1]) == True

    def test_example_2(self):
        """Test array without duplicates."""
        assert contains_duplicate([1, 2, 3, 4]) == False
        assert contains_duplicate_pythonic([1, 2, 3, 4]) == False

    def test_example_3(self):
        """Test array with multiple duplicates."""
        assert contains_duplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) == True
        assert contains_duplicate_pythonic([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) == True

    def test_empty_array(self):
        """Test with empty array."""
        assert contains_duplicate([]) == False
        assert contains_duplicate_pythonic([]) == False

    def test_single_element(self):
        """Test with single element."""
        assert contains_duplicate([1]) == False
        assert contains_duplicate_pythonic([1]) == False

    def test_two_same_elements(self):
        """Test with two identical elements."""
        assert contains_duplicate([5, 5]) == True
        assert contains_duplicate_pythonic([5, 5]) == True

    def test_two_different_elements(self):
        """Test with two different elements."""
        assert contains_duplicate([1, 2]) == False
        assert contains_duplicate_pythonic([1, 2]) == False

    def test_negative_numbers(self):
        """Test with negative numbers."""
        assert contains_duplicate([-1, -2, -3, -1]) == True
        assert contains_duplicate_pythonic([-1, -2, -3, -1]) == True
        assert contains_duplicate([-1, -2, -3, -4]) == False
        assert contains_duplicate_pythonic([-1, -2, -3, -4]) == False

    def test_large_numbers(self):
        """Test with large numbers."""
        assert contains_duplicate([1000000, 2000000, 1000000]) == True
        assert contains_duplicate_pythonic([1000000, 2000000, 1000000]) == True

    def test_consecutive_duplicates(self):
        """Test with consecutive duplicates."""
        assert contains_duplicate([1, 1, 2, 3]) == True
        assert contains_duplicate_pythonic([1, 1, 2, 3]) == True

    def test_distant_duplicates(self):
        """Test with duplicates far apart."""
        assert contains_duplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]) == True
        assert contains_duplicate_pythonic([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]) == True