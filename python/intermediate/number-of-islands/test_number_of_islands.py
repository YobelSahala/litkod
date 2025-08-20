"""
Tests for Number of Islands problem.
"""

import pytest
from number_of_islands import numIslands


class TestNumberOfIslands:
    """Test cases for number of islands."""

    def test_example_1(self):
        """Test first example with 1 island."""
        grid = [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
        ]
        # Note: This modifies the grid, so we need to copy it
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 1

    def test_example_2(self):
        """Test second example with 3 islands."""
        grid = [
            ["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
        ]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 3

    def test_empty_grid(self):
        """Test empty grid."""
        assert numIslands([]) == 0

    def test_no_islands(self):
        """Test grid with no islands (all water)."""
        grid = [
            ["0","0","0"],
            ["0","0","0"],
            ["0","0","0"]
        ]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 0

    def test_single_cell_island(self):
        """Test single cell island."""
        grid = [["1"]]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 1

    def test_single_cell_water(self):
        """Test single cell water."""
        grid = [["0"]]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 0

    def test_all_islands(self):
        """Test grid with all land (1 big island)."""
        grid = [
            ["1","1","1"],
            ["1","1","1"],
            ["1","1","1"]
        ]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 1

    def test_multiple_separate_islands(self):
        """Test multiple separate islands."""
        grid = [
            ["1","0","1","0","1"],
            ["0","0","0","0","0"],
            ["1","0","1","0","1"]
        ]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 6

    def test_l_shaped_island(self):
        """Test L-shaped island."""
        grid = [
            ["1","1","0"],
            ["1","0","0"],
            ["1","1","1"]
        ]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 1

    def test_diagonal_not_connected(self):
        """Test that diagonal cells don't connect islands."""
        grid = [
            ["1","0","1"],
            ["0","0","0"],
            ["1","0","1"]
        ]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 4

    def test_large_connected_island(self):
        """Test large connected island."""
        grid = [
            ["1","1","1","1","1"],
            ["1","0","0","0","1"],
            ["1","0","1","0","1"],
            ["1","0","0","0","1"],
            ["1","1","1","1","1"]
        ]
        grid_copy = [row[:] for row in grid]
        assert numIslands(grid_copy) == 2  # outer ring + inner cell