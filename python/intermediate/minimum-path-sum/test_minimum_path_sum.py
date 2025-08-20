"""
Tests for Minimum Path Sum problem.
"""

import pytest
import copy
from minimum_path_sum import min_path_sum, min_path_sum_without_modifying, min_path_sum_optimized


class TestMinimumPathSum:
    """Test cases for the minimum path sum function."""

    def test_example_1(self):
        """Test with [[1,3,1],[1,5,1],[4,2,1]]."""
        grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
        expected = 7  # Path: 1->3->1->1->1
        
        # Test all implementations
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_example_2(self):
        """Test with [[1,2,3],[4,5,6]]."""
        grid = [[1, 2, 3], [4, 5, 6]]
        expected = 12  # Path: 1->2->3->6
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_single_cell(self):
        """Test with single cell."""
        grid = [[5]]
        expected = 5
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_single_row(self):
        """Test with single row."""
        grid = [[1, 2, 3, 4]]
        expected = 10
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_single_column(self):
        """Test with single column."""
        grid = [[1], [2], [3], [4]]
        expected = 10
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_2x2_grid(self):
        """Test with 2x2 grid."""
        grid = [[1, 2], [1, 1]]
        expected = 3  # Path: 1->1->1
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_all_zeros(self):
        """Test with all zeros."""
        grid = [[0, 0, 0], [0, 0, 0]]
        expected = 0
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_larger_grid(self):
        """Test with larger grid."""
        grid = [
            [1, 4, 8, 6, 2, 2, 1, 7],
            [4, 7, 3, 1, 4, 5, 5, 1],
            [8, 8, 2, 1, 1, 8, 0, 1],
            [8, 9, 2, 9, 8, 0, 8, 9],
            [5, 7, 5, 5, 1, 9, 5, 0],
            [7, 2, 3, 7, 9, 7, 0, 8]
        ]
        # Should find optimal path
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        result1 = min_path_sum(grid_copy1)
        result2 = min_path_sum_without_modifying(grid_copy2)
        result3 = min_path_sum_optimized(grid_copy3)
        
        # All implementations should give the same result
        assert result1 == result2 == result3
        # Verify it's a reasonable path sum
        assert result1 > 0

    def test_prefer_smaller_values(self):
        """Test that algorithm prefers paths with smaller values."""
        grid = [[1, 100], [1, 1]]
        expected = 3  # Path: 1->1->1, not 1->100->1
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_empty_grid(self):
        """Test with empty grid."""
        assert min_path_sum([]) == 0
        assert min_path_sum_without_modifying([]) == 0
        assert min_path_sum_optimized([]) == 0

    def test_grid_with_empty_rows(self):
        """Test with grid containing empty rows."""
        assert min_path_sum([[]]) == 0
        assert min_path_sum_without_modifying([[]]) == 0
        assert min_path_sum_optimized([[]]) == 0

    def test_large_values(self):
        """Test with large values."""
        grid = [[1000, 2000], [3000, 1000]]
        expected = 5000  # Path: 1000->2000->1000 or 1000->3000->1000
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected

    def test_diagonal_preference(self):
        """Test that algorithm correctly chooses between right and down moves."""
        grid = [
            [1, 2, 5],
            [3, 2, 1]
        ]
        # Optimal path: 1->2->2->1 = 6
        expected = 6
        
        grid_copy1 = copy.deepcopy(grid)
        grid_copy2 = copy.deepcopy(grid)
        grid_copy3 = copy.deepcopy(grid)
        
        assert min_path_sum(grid_copy1) == expected
        assert min_path_sum_without_modifying(grid_copy2) == expected
        assert min_path_sum_optimized(grid_copy3) == expected