"""
Tests for Maximum Subarray problem.
"""

import pytest
from maximum_subarray import max_subarray, max_subarray_concise


class TestMaximumSubarray:
    """Test cases for the maximum subarray functions."""

    def test_example_1(self):
        """Test with mixed positive and negative numbers."""
        nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
        assert max_subarray(nums) == 6
        assert max_subarray_concise(nums) == 6

    def test_example_2(self):
        """Test with single element."""
        assert max_subarray([1]) == 1
        assert max_subarray_concise([1]) == 1

    def test_example_3(self):
        """Test with array containing one positive and others negative."""
        assert max_subarray([5, 4, -1, 7, 8]) == 23
        assert max_subarray_concise([5, 4, -1, 7, 8]) == 23

    def test_all_negative(self):
        """Test with all negative numbers."""
        assert max_subarray([-3, -2, -1, -5]) == -1
        assert max_subarray_concise([-3, -2, -1, -5]) == -1

    def test_all_positive(self):
        """Test with all positive numbers."""
        assert max_subarray([1, 2, 3, 4, 5]) == 15
        assert max_subarray_concise([1, 2, 3, 4, 5]) == 15

    def test_alternating_pattern(self):
        """Test with alternating positive and negative."""
        assert max_subarray([1, -1, 2, -2, 3]) == 3
        assert max_subarray_concise([1, -1, 2, -2, 3]) == 3

    def test_single_negative(self):
        """Test with single negative number."""
        assert max_subarray([-1]) == -1
        assert max_subarray_concise([-1]) == -1

    def test_zeros_included(self):
        """Test with zeros in the array."""
        assert max_subarray([0, -1, 2, 0, -3, 4]) == 4
        assert max_subarray_concise([0, -1, 2, 0, -3, 4]) == 4

    def test_large_numbers(self):
        """Test with large numbers."""
        assert max_subarray([1000, -500, 2000, -100]) == 2400
        assert max_subarray_concise([1000, -500, 2000, -100]) == 2400

    def test_subarray_at_beginning(self):
        """Test where maximum subarray is at the beginning."""
        assert max_subarray([5, 2, -10, 1, 3]) == 7
        assert max_subarray_concise([5, 2, -10, 1, 3]) == 7

    def test_subarray_at_end(self):
        """Test where maximum subarray is at the end."""
        assert max_subarray([-5, -2, 1, 3, 4]) == 8
        assert max_subarray_concise([-5, -2, 1, 3, 4]) == 8