"""
Tests for 3Sum problem.
"""

import pytest
from three_sum import three_sum


class TestThreeSum:
    """Test cases for the three sum function."""

    def test_example_1(self):
        """Test with array [-1,0,1,2,-1,-4]."""
        nums = [-1, 0, 1, 2, -1, -4]
        result = three_sum(nums)
        expected = [[-1, -1, 2], [-1, 0, 1]]
        assert sorted(result) == sorted(expected)

    def test_example_2(self):
        """Test with array [0,1,1]."""
        nums = [0, 1, 1]
        result = three_sum(nums)
        assert result == []

    def test_example_3(self):
        """Test with array [0,0,0]."""
        nums = [0, 0, 0]
        result = three_sum(nums)
        assert result == [[0, 0, 0]]

    def test_empty_array(self):
        """Test with empty array."""
        assert three_sum([]) == []

    def test_small_array(self):
        """Test with array too small for triplets."""
        assert three_sum([1, 2]) == []

    def test_no_solution(self):
        """Test with array that has no valid triplets."""
        assert three_sum([1, 2, 3]) == []

    def test_all_positive(self):
        """Test with all positive numbers."""
        assert three_sum([1, 2, 3, 4, 5]) == []

    def test_all_negative(self):
        """Test with all negative numbers."""
        assert three_sum([-5, -4, -3, -2, -1]) == []

    def test_duplicates(self):
        """Test with multiple duplicates."""
        nums = [-2, 0, 0, 2, 2]
        result = three_sum(nums)
        expected = [[-2, 0, 2]]
        assert result == expected

    def test_many_duplicates(self):
        """Test with many duplicate elements."""
        nums = [-1, -1, -1, 0, 1, 1, 1]
        result = three_sum(nums)
        expected = [[-1, 0, 1]]
        assert result == expected

    def test_large_numbers(self):
        """Test with large numbers."""
        nums = [-100000, 50000, 50000]
        result = three_sum(nums)
        expected = [[-100000, 50000, 50000]]
        assert result == expected

    def test_multiple_solutions(self):
        """Test with multiple valid triplets."""
        nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
        result = three_sum(nums)
        # Should contain multiple valid triplets
        assert len(result) > 0
        # Check that all results sum to 0
        for triplet in result:
            assert sum(triplet) == 0