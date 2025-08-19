"""
Tests for Best Time to Buy and Sell Stock problem.
"""

import pytest
from best_time_to_buy_and_sell_stock import max_profit


class TestBestTimeToBuyAndSellStock:
    """Test cases for the max profit function."""

    def test_example_1(self):
        """Test with example [7,1,5,3,6,4] should return 5."""
        assert max_profit([7, 1, 5, 3, 6, 4]) == 5

    def test_example_2(self):
        """Test with decreasing prices [7,6,4,3,1] should return 0."""
        assert max_profit([7, 6, 4, 3, 1]) == 0

    def test_single_price(self):
        """Test with single price should return 0."""
        assert max_profit([5]) == 0

    def test_two_prices_increasing(self):
        """Test with two increasing prices should return difference."""
        assert max_profit([1, 5]) == 4

    def test_two_prices_decreasing(self):
        """Test with two decreasing prices should return 0."""
        assert max_profit([5, 1]) == 0

    def test_all_same_prices(self):
        """Test with all same prices should return 0."""
        assert max_profit([3, 3, 3, 3]) == 0

    def test_large_profit_difference(self):
        """Test with large profit difference."""
        assert max_profit([1, 10000]) == 9999

    def test_optimal_buy_sell_points(self):
        """Test finding optimal buy/sell points."""
        assert max_profit([2, 4, 1, 5, 3, 7]) == 6  # buy at 1, sell at 7

    def test_zero_prices(self):
        """Test with zero prices."""
        assert max_profit([0, 1, 2, 3]) == 3
        assert max_profit([3, 2, 1, 0]) == 0

    def test_complex_patterns(self):
        """Test with complex price patterns."""
        assert max_profit([3, 2, 6, 5, 0, 3]) == 4  # buy at 2, sell at 6
        assert max_profit([1, 2, 3, 4, 5]) == 4      # buy at 1, sell at 5

    def test_empty_list(self):
        """Test with empty list should return 0."""
        assert max_profit([]) == 0

    def test_minimum_values(self):
        """Test with minimum possible values."""
        assert max_profit([0, 1]) == 1
        assert max_profit([0, 0]) == 0