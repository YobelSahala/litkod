"""
Tests for Climbing Stairs problem.
"""

import pytest
from climbing_stairs import climb_stairs


class TestClimbingStairs:
    """Test cases for the climbing stairs function."""

    def test_example_1(self):
        """Test with n=2."""
        assert climb_stairs(2) == 2

    def test_example_2(self):
        """Test with n=3."""
        assert climb_stairs(3) == 3

    def test_base_case_1(self):
        """Test with n=1."""
        assert climb_stairs(1) == 1

    def test_small_values(self):
        """Test with small values."""
        assert climb_stairs(4) == 5
        assert climb_stairs(5) == 8

    def test_larger_values(self):
        """Test with larger values (Fibonacci sequence)."""
        assert climb_stairs(6) == 13
        assert climb_stairs(7) == 21
        assert climb_stairs(8) == 34

    def test_fibonacci_pattern(self):
        """Test that it follows Fibonacci pattern."""
        # F(n) = F(n-1) + F(n-2) where F(1)=1, F(2)=2
        for n in range(3, 10):
            assert climb_stairs(n) == climb_stairs(n-1) + climb_stairs(n-2)

    def test_edge_cases(self):
        """Test edge cases."""
        assert climb_stairs(10) == 89
        assert climb_stairs(15) == 987

    def test_consistent_results(self):
        """Test that function returns consistent results."""
        for n in range(1, 20):
            result1 = climb_stairs(n)
            result2 = climb_stairs(n)
            assert result1 == result2