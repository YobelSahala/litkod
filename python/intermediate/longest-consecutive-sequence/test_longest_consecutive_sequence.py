"""
Tests for Longest Consecutive Sequence problem.
"""

import pytest
from longest_consecutive_sequence import longest_consecutive


class TestLongestConsecutiveSequence:
    """Test cases for the longest consecutive sequence function."""

    def test_example_1(self):
        """Test with [100,4,200,1,3,2]."""
        assert longest_consecutive([100, 4, 200, 1, 3, 2]) == 4

    def test_example_2(self):
        """Test with [0,3,7,2,5,8,4,6,0,1]."""
        assert longest_consecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) == 9

    def test_empty_array(self):
        """Test with empty array."""
        assert longest_consecutive([]) == 0

    def test_single_element(self):
        """Test with single element arrays."""
        assert longest_consecutive([1]) == 1
        assert longest_consecutive([100]) == 1

    def test_no_consecutive_sequence(self):
        """Test with no consecutive sequences."""
        assert longest_consecutive([1, 3, 5, 7, 9]) == 1

    def test_all_consecutive(self):
        """Test with all consecutive sequence."""
        assert longest_consecutive([1, 2, 3, 4, 5]) == 5

    def test_duplicates(self):
        """Test with duplicate values."""
        assert longest_consecutive([1, 2, 0, 1]) == 3
        assert longest_consecutive([1, 1, 1, 1]) == 1

    def test_negative_numbers(self):
        """Test with negative numbers."""
        assert longest_consecutive([-1, -2, -3, 0, 1]) == 5
        assert longest_consecutive([-5, -4, -3, -2, -1]) == 5

    def test_unordered_array(self):
        """Test with unordered array."""
        assert longest_consecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]) == 7

    def test_multiple_sequences(self):
        """Test with multiple sequences."""
        assert longest_consecutive([1, 2, 3, 100, 101, 102, 103]) == 4

    def test_large_numbers(self):
        """Test with large numbers."""
        assert longest_consecutive([1000000, 999999, 1000001]) == 3

    def test_zero_in_sequence(self):
        """Test with zero in sequence."""
        assert longest_consecutive([-1, 0, 1, 2]) == 4

    def test_two_elements(self):
        """Test with two element arrays."""
        assert longest_consecutive([1, 2]) == 2
        assert longest_consecutive([2, 1]) == 2
        assert longest_consecutive([1, 3]) == 1

    def test_complex_pattern(self):
        """Test with complex patterns."""
        assert longest_consecutive([1, 9, 3, 10, 4, 20, 2]) == 4

    def test_edge_cases(self):
        """Test edge cases."""
        assert longest_consecutive([0]) == 1
        assert longest_consecutive([-1]) == 1
        assert longest_consecutive([2147483647]) == 1
        assert longest_consecutive([-2147483648]) == 1