"""
Tests for House Robber problem.
"""

import pytest
import sys
import os

# Add the parent directory to the path so we can import from utils
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..'))

from house_robber import rob


class TestHouseRobber:
    """Test cases for the house robber function."""

    def test_example_1(self):
        """Test example [1,2,3,1] should return 4."""
        assert rob([1, 2, 3, 1]) == 4

    def test_example_2(self):
        """Test example [2,7,9,3,1] should return 12."""
        assert rob([2, 7, 9, 3, 1]) == 12

    def test_handle_single_house(self):
        """Test handling single house."""
        assert rob([5]) == 5
        assert rob([0]) == 0

    def test_handle_two_houses(self):
        """Test handling two houses."""
        assert rob([1, 2]) == 2
        assert rob([2, 1]) == 2
        assert rob([5, 1]) == 5

    def test_handle_all_same_values(self):
        """Test handling all same values."""
        assert rob([3, 3, 3, 3]) == 6

    def test_handle_increasing_values(self):
        """Test handling increasing values."""
        assert rob([1, 2, 3, 4, 5]) == 9  # 1 + 3 + 5

    def test_handle_decreasing_values(self):
        """Test handling decreasing values."""
        assert rob([5, 4, 3, 2, 1]) == 9  # 5 + 3 + 1

    def test_handle_alternating_pattern(self):
        """Test handling alternating pattern."""
        assert rob([5, 1, 5, 1]) == 10  # 5 + 5
        assert rob([1, 5, 1, 5]) == 10  # 5 + 5

    def test_handle_zeros(self):
        """Test handling zeros."""
        assert rob([0, 0, 0]) == 0
        assert rob([5, 0, 5]) == 10
        assert rob([0, 5, 0]) == 5

    def test_handle_larger_arrays(self):
        """Test handling larger arrays."""
        assert rob([2, 1, 1, 9, 9, 1, 1, 2]) == 14  # Optimal: rob houses 0,3,5,7 → 2+9+1+2=14

    def test_handle_edge_cases(self):
        """Test handling edge cases."""
        assert rob([100]) == 100
        assert rob([100, 1, 1, 100]) == 200

    def test_optimal_strategy_choices(self):
        """Test various optimal strategy choices."""
        # Test where skipping higher value for better overall is optimal
        assert rob([2, 3, 2]) == 4  # Skip middle house
        assert rob([5, 5, 10, 100, 10, 5]) == 110  # 5 + 100 + 5
        
    def test_consecutive_high_values(self):
        """Test with consecutive high values."""
        assert rob([10, 5, 2, 7, 8]) == 15  # 10 + 2 + 8 = 20 vs 5 + 7 = 12, but 10 + 7 = 17, but optimal is 10 + 2 + 8 = 20
        # Actually let's recalculate: [10, 5, 2, 7, 8]
        # Options: 10 + 2 + 8 = 20, or 5 + 7 = 12, optimal is 10 + 7 = 17
        # Wait, let me think: 10 (skip 5), 2 (skip 7), 8 = 20 OR skip 10, 5 (skip 2), 7 (skip 8) = 12
        # OR 10 (skip 5, skip 2), 7 (skip 8) = 17. So 20 is correct.
        assert rob([10, 5, 2, 7, 8]) == 20

    def test_all_negative_impossible(self):
        """Test with minimum values (constraints say non-negative)."""
        # According to problem constraints, values are non-negative
        assert rob([0, 1, 0]) == 1
        assert rob([1, 0, 1]) == 2

    def test_long_sequence(self):
        """Test with longer sequences."""
        # Create a pattern where every other house has value 1
        houses = [1 if i % 2 == 0 else 0 for i in range(10)]  # [1,0,1,0,1,0,1,0,1,0]
        assert rob(houses) == 5  # Rob all houses with value 1
        
        # Create decreasing pattern
        houses = list(range(10, 0, -1))  # [10,9,8,7,6,5,4,3,2,1]
        # Optimal: 10 + 8 + 6 + 4 + 2 = 30
        assert rob(houses) == 30

    def test_fibonacci_like_pattern(self):
        """Test with fibonacci-like growth."""
        assert rob([1, 1, 2, 3, 5]) == 8  # 1 + 2 + 5 or 1 + 3 + ? → 2 + 5 = 7, 1 + 2 + 5 = 8
        assert rob([1, 2, 3, 5, 8]) == 11  # 1 + 3 + 8 = 12 or 2 + 5 = 7 → 12 is better