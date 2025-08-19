"""
Tests for Median of Two Sorted Arrays problem.
"""

import pytest
from median_of_two_sorted_arrays import find_median_sorted_arrays


class TestMedianOfTwoSortedArrays:
    """Test cases for the median of two sorted arrays function."""

    def test_example_1(self):
        """Test with nums1 = [1,3], nums2 = [2]."""
        nums1 = [1, 3]
        nums2 = [2]
        assert find_median_sorted_arrays(nums1, nums2) == 2.0

    def test_example_2(self):
        """Test with nums1 = [1,2], nums2 = [3,4]."""
        nums1 = [1, 2]
        nums2 = [3, 4]
        assert find_median_sorted_arrays(nums1, nums2) == 2.5

    def test_empty_arrays(self):
        """Test with one empty array."""
        assert find_median_sorted_arrays([], [1]) == 1.0
        assert find_median_sorted_arrays([2], []) == 2.0

    def test_single_elements(self):
        """Test with single element arrays."""
        assert find_median_sorted_arrays([1], [2]) == 1.5
        assert find_median_sorted_arrays([100], [1]) == 50.5

    def test_different_sizes(self):
        """Test with arrays of different sizes."""
        nums1 = [1, 3]
        nums2 = [2, 4, 5, 6]
        result = find_median_sorted_arrays(nums1, nums2)
        # Merged: [1, 2, 3, 4, 5, 6], median = (3 + 4) / 2 = 3.5
        assert result == 3.5

    def test_odd_total_length(self):
        """Test with odd total length."""
        nums1 = [1, 3, 5]
        nums2 = [2, 4]
        result = find_median_sorted_arrays(nums1, nums2)
        # Merged: [1, 2, 3, 4, 5], median = 3
        assert result == 3.0

    def test_even_total_length(self):
        """Test with even total length."""
        nums1 = [1, 3, 5, 7]
        nums2 = [2, 4]
        result = find_median_sorted_arrays(nums1, nums2)
        # Merged: [1, 2, 3, 4, 5, 7], median = (3 + 4) / 2 = 3.5
        assert result == 3.5

    def test_all_elements_from_one_array(self):
        """Test where all smaller elements come from one array."""
        nums1 = [1, 2, 3]
        nums2 = [4, 5, 6]
        result = find_median_sorted_arrays(nums1, nums2)
        # Merged: [1, 2, 3, 4, 5, 6], median = (3 + 4) / 2 = 3.5
        assert result == 3.5

    def test_interleaved_elements(self):
        """Test with interleaved elements."""
        nums1 = [1, 3, 5, 7]
        nums2 = [2, 4, 6, 8]
        result = find_median_sorted_arrays(nums1, nums2)
        # Merged: [1, 2, 3, 4, 5, 6, 7, 8], median = (4 + 5) / 2 = 4.5
        assert result == 4.5

    def test_duplicate_elements(self):
        """Test with duplicate elements."""
        nums1 = [1, 1, 1]
        nums2 = [1, 1, 1]
        result = find_median_sorted_arrays(nums1, nums2)
        assert result == 1.0

    def test_negative_numbers(self):
        """Test with negative numbers."""
        nums1 = [-5, -3, -1]
        nums2 = [-4, -2, 0]
        result = find_median_sorted_arrays(nums1, nums2)
        # Merged: [-5, -4, -3, -2, -1, 0], median = (-3 + -2) / 2 = -2.5
        assert result == -2.5

    def test_large_numbers(self):
        """Test with large numbers."""
        nums1 = [1000000, 2000000]
        nums2 = [1500000]
        result = find_median_sorted_arrays(nums1, nums2)
        assert result == 1500000.0