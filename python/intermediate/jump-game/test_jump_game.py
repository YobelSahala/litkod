"""
Tests for Jump Game problem.
"""

import pytest
import sys
import os

# Add the parent directory to the path so we can import from utils
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..'))

from jump_game import can_jump


class TestJumpGame:
    """Test cases for the jump game function."""

    def test_example_1(self):
        """Test example [2,3,1,1,4] should return True."""
        assert can_jump([2, 3, 1, 1, 4]) == True

    def test_example_2(self):
        """Test example [3,2,1,0,4] should return False."""
        assert can_jump([3, 2, 1, 0, 4]) == False

    def test_handle_single_element_array(self):
        """Test handling single element array."""
        assert can_jump([0]) == True
        assert can_jump([1]) == True
        assert can_jump([5]) == True

    def test_handle_two_element_arrays(self):
        """Test handling two element arrays."""
        assert can_jump([1, 0]) == True
        assert can_jump([0, 1]) == False
        assert can_jump([2, 0]) == True

    def test_handle_array_with_all_zeros_except_first(self):
        """Test handling array with all zeros except first."""
        assert can_jump([1, 0, 0, 0]) == False
        assert can_jump([3, 0, 0, 0]) == True

    def test_handle_array_with_large_jumps(self):
        """Test handling array with large jumps."""
        assert can_jump([5, 0, 0, 0, 0]) == True
        assert can_jump([4, 0, 0, 0, 0]) == True
        assert can_jump([3, 0, 0, 0]) == True

    def test_handle_arrays_where_we_can_just_reach_the_end(self):
        """Test handling arrays where we can just reach the end."""
        assert can_jump([1, 1, 1, 1]) == True
        assert can_jump([2, 0, 1]) == True

    def test_handle_arrays_with_no_zeros(self):
        """Test handling arrays with no zeros."""
        assert can_jump([1, 2, 3, 4]) == True
        assert can_jump([5, 4, 3, 2, 1]) == True

    def test_handle_arrays_with_zeros_in_middle(self):
        """Test handling arrays with zeros in middle."""
        assert can_jump([2, 0, 1, 1]) == True
        assert can_jump([1, 0, 1, 1]) == False
        assert can_jump([3, 0, 0, 1]) == True

    def test_handle_edge_case_where_first_element_is_0(self):
        """Test handling edge case where first element is 0."""
        assert can_jump([0, 1]) == False
        assert can_jump([0, 2, 3]) == False
        assert can_jump([0]) == True  # Special case: already at the end

    def test_handle_longer_arrays(self):
        """Test handling longer arrays."""
        assert can_jump([2, 3, 1, 1, 4, 2, 1]) == True
        assert can_jump([1, 1, 1, 0, 1]) == False

    def test_handle_optimal_path_selection(self):
        """Test handling optimal path selection."""
        assert can_jump([2, 1, 0, 1, 4]) == False  # Can't skip the 0 trap at index 2

    def test_handle_arrays_with_multiple_valid_paths(self):
        """Test handling arrays with multiple valid paths."""
        assert can_jump([3, 2, 1, 0, 4]) == False  # Can't pass the 0 at index 3
        assert can_jump([4, 2, 1, 0, 1]) == True  # Can jump over the 0

    def test_handle_maximum_constraints(self):
        """Test handling maximum constraints."""
        # Test with larger arrays
        large_array = [1] * 100
        assert can_jump(large_array) == True
        
        impossible_array = [1, 0] + [1] * 98
        assert can_jump(impossible_array) == False

    def test_various_patterns(self):
        """Test various jump patterns."""
        # Decreasing pattern that works
        assert can_jump([4, 3, 2, 1, 0]) == True
        
        # Pattern with strategic zeros
        assert can_jump([2, 3, 1, 0, 4]) == True  # Jump over the zero
        assert can_jump([1, 1, 1, 0, 1]) == False  # Can't jump over the zero
        
        # Large initial jump
        assert can_jump([10, 0, 0, 0, 0, 0, 0, 0, 0, 0]) == True

    def test_minimum_jumps_scenarios(self):
        """Test scenarios requiring minimum jumps."""
        # Can reach exactly
        assert can_jump([2, 1, 0]) == True
        assert can_jump([1, 1, 0]) == True
        assert can_jump([1, 0, 0]) == False

    def test_alternating_patterns(self):
        """Test alternating high-low patterns."""
        assert can_jump([1, 3, 1, 3, 1]) == True
        assert can_jump([3, 1, 3, 1, 3]) == True
        assert can_jump([1, 0, 3, 0, 1]) == False  # First zero blocks

    def test_boundary_conditions(self):
        """Test boundary conditions."""
        # Exactly enough jumps
        assert can_jump([1, 1, 1]) == True
        assert can_jump([2, 1]) == True
        assert can_jump([1, 2]) == True
        
        # Just short
        assert can_jump([1, 0, 1]) == False