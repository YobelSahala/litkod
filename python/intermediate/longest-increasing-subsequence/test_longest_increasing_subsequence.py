"""
Tests for Longest Increasing Subsequence problem.
"""

import pytest
from longest_increasing_subsequence import length_of_lis, length_of_lis_dp


class TestLongestIncreasingSubsequence:
    """Test cases for the longest increasing subsequence function."""

    def test_example_1(self):
        """Test with [10,9,2,5,3,7,101,18]."""
        assert length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]) == 4
        assert length_of_lis_dp([10, 9, 2, 5, 3, 7, 101, 18]) == 4

    def test_example_2(self):
        """Test with [0,1,0,3,2,3]."""
        assert length_of_lis([0, 1, 0, 3, 2, 3]) == 4
        assert length_of_lis_dp([0, 1, 0, 3, 2, 3]) == 4

    def test_example_3(self):
        """Test with [7,7,7,7,7,7,7]."""
        assert length_of_lis([7, 7, 7, 7, 7, 7, 7]) == 1
        assert length_of_lis_dp([7, 7, 7, 7, 7, 7, 7]) == 1

    def test_single_element(self):
        """Test with single element."""
        assert length_of_lis([1]) == 1
        assert length_of_lis_dp([1]) == 1

    def test_increasing_array(self):
        """Test with increasing array."""
        assert length_of_lis([1, 2, 3, 4, 5]) == 5
        assert length_of_lis_dp([1, 2, 3, 4, 5]) == 5

    def test_decreasing_array(self):
        """Test with decreasing array."""
        assert length_of_lis([5, 4, 3, 2, 1]) == 1
        assert length_of_lis_dp([5, 4, 3, 2, 1]) == 1

    def test_two_elements(self):
        """Test with two elements."""
        assert length_of_lis([1, 2]) == 2
        assert length_of_lis([2, 1]) == 1
        assert length_of_lis_dp([1, 2]) == 2
        assert length_of_lis_dp([2, 1]) == 1

    def test_arrays_with_zeros(self):
        """Test with arrays containing zeros."""
        assert length_of_lis([0, 1, 2, 3]) == 4
        assert length_of_lis([-1, 0, 1, 2]) == 4
        assert length_of_lis_dp([0, 1, 2, 3]) == 4
        assert length_of_lis_dp([-1, 0, 1, 2]) == 4

    def test_negative_numbers(self):
        """Test with negative numbers."""
        assert length_of_lis([-10, -9, -2, -5, -3, -7, -101, -18]) == 4
        assert length_of_lis_dp([-10, -9, -2, -5, -3, -7, -101, -18]) == 4

    def test_mixed_positive_negative(self):
        """Test with mixed positive and negative numbers."""
        assert length_of_lis([-1, 3, -3, 0, 5, 3, 5, 9]) == 5
        assert length_of_lis_dp([-1, 3, -3, 0, 5, 3, 5, 9]) == 5

    def test_alternating_pattern(self):
        """Test with alternating pattern."""
        assert length_of_lis([1, 3, 2, 4, 3, 5]) == 4
        assert length_of_lis_dp([1, 3, 2, 4, 3, 5]) == 4

    def test_larger_arrays(self):
        """Test with larger arrays."""
        assert length_of_lis([1, 3, 6, 7, 9, 4, 10, 5, 6]) == 6
        assert length_of_lis_dp([1, 3, 6, 7, 9, 4, 10, 5, 6]) == 6

    def test_edge_cases(self):
        """Test edge cases."""
        assert length_of_lis([2, 2]) == 1
        assert length_of_lis([1, 2, 2, 3]) == 3
        assert length_of_lis_dp([2, 2]) == 1
        assert length_of_lis_dp([1, 2, 2, 3]) == 3

    def test_empty_array(self):
        """Test with empty array."""
        assert length_of_lis([]) == 0
        assert length_of_lis_dp([]) == 0

    def test_complex_pattern(self):
        """Test with complex patterns."""
        assert length_of_lis([10, 22, 9, 33, 21, 50, 41, 60]) == 5
        assert length_of_lis_dp([10, 22, 9, 33, 21, 50, 41, 60]) == 5

    def test_duplicates(self):
        """Test with duplicate values."""
        assert length_of_lis([1, 1, 1, 2, 2, 3]) == 3
        assert length_of_lis_dp([1, 1, 1, 2, 2, 3]) == 3