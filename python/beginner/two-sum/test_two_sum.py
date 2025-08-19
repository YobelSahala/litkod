"""
Tests for Two Sum problem.
"""

import pytest
from two_sum import two_sum


class TestTwoSum:
    """Test cases for the two sum function."""

    def test_example_1(self):
        """Test first example [2,7,11,15] with target 9."""
        assert two_sum([2, 7, 11, 15], 9) == [0, 1]

    def test_example_2(self):
        """Test second example [3,2,4] with target 6."""
        assert two_sum([3, 2, 4], 6) == [1, 2]

    def test_example_3(self):
        """Test third example [3,3] with target 6."""
        assert two_sum([3, 3], 6) == [0, 1]

    def test_negative_numbers(self):
        """Test with negative numbers."""
        assert two_sum([-3, 4, 3, 90], 0) == [0, 2]

    def test_large_numbers(self):
        """Test with large numbers."""
        assert two_sum([1000000000, 2000000000, -1000000000], 1000000000) == [1, 2]

    def test_two_elements_array(self):
        """Test with two elements array."""
        assert two_sum([1, 2], 3) == [0, 1]

    def test_solution_at_different_positions(self):
        """Test finding solution at different positions."""
        assert two_sum([1, 5, 3, 7, 2], 9) == [3, 4]

    def test_zero_values(self):
        """Test with zero values."""
        assert two_sum([0, 0], 0) == [0, 1]
        assert two_sum([0, 4, 3, 0], 0) == [0, 3]

    def test_different_combinations(self):
        """Test various other combinations."""
        assert two_sum([5, 75, 25], 100) == [1, 2]
        assert two_sum([1, 2, 3, 4, 5], 8) == [2, 4]
        
    def test_negative_target(self):
        """Test with negative target."""
        assert two_sum([-1, -2, -3, -4], -6) == [1, 3]