"""
Tests for Remove Duplicates from Sorted Array problem.
"""

import pytest
from remove_duplicates_from_sorted_array import remove_duplicates


class TestRemoveDuplicates:
    """Test cases for the remove duplicates function."""

    def test_example_1(self):
        """Test first example [1,1,2] -> [1,2] with length 2."""
        nums = [1, 1, 2]
        result = remove_duplicates(nums)
        assert result == 2
        assert nums[:result] == [1, 2]

    def test_example_2(self):
        """Test second example [0,0,1,1,1,2,2,3,3,4] -> [0,1,2,3,4] with length 5."""
        nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
        result = remove_duplicates(nums)
        assert result == 5
        assert nums[:result] == [0, 1, 2, 3, 4]

    def test_empty_array(self):
        """Test empty array."""
        nums = []
        result = remove_duplicates(nums)
        assert result == 0

    def test_single_element(self):
        """Test single element array."""
        nums = [1]
        result = remove_duplicates(nums)
        assert result == 1
        assert nums[:result] == [1]

    def test_no_duplicates(self):
        """Test array with no duplicates."""
        nums = [1, 2, 3, 4, 5]
        result = remove_duplicates(nums)
        assert result == 5
        assert nums[:result] == [1, 2, 3, 4, 5]

    def test_all_same_elements(self):
        """Test array with all same elements."""
        nums = [1, 1, 1, 1]
        result = remove_duplicates(nums)
        assert result == 1
        assert nums[:result] == [1]

    def test_negative_numbers(self):
        """Test with negative numbers."""
        nums = [-3, -1, -1, 0, 0, 0, 1, 1]
        result = remove_duplicates(nums)
        assert result == 4
        assert nums[:result] == [-3, -1, 0, 1]

    def test_two_element_arrays(self):
        """Test with two element arrays."""
        # Two identical elements
        nums1 = [1, 1]
        result1 = remove_duplicates(nums1)
        assert result1 == 1
        assert nums1[:result1] == [1]
        
        # Two different elements
        nums2 = [1, 2]
        result2 = remove_duplicates(nums2)
        assert result2 == 2
        assert nums2[:result2] == [1, 2]

    def test_large_numbers(self):
        """Test with large numbers."""
        nums = [100000, 100000, 200000, 200000, 300000]
        result = remove_duplicates(nums)
        assert result == 3
        assert nums[:result] == [100000, 200000, 300000]

    def test_multiple_consecutive_duplicates(self):
        """Test with multiple consecutive duplicates."""
        nums = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4]
        result = remove_duplicates(nums)
        assert result == 4
        assert nums[:result] == [1, 2, 3, 4]

    def test_zero_values(self):
        """Test with zero values."""
        nums = [0, 0, 0, 1, 1, 2]
        result = remove_duplicates(nums)
        assert result == 3
        assert nums[:result] == [0, 1, 2]

    def test_mixed_positive_negative(self):
        """Test with mixed positive and negative numbers."""
        nums = [-10, -10, -5, -5, 0, 0, 5, 5, 10, 10]
        result = remove_duplicates(nums)
        assert result == 5
        assert nums[:result] == [-10, -5, 0, 5, 10]

    def test_long_array_many_duplicates(self):
        """Test with a longer array containing many duplicates."""
        nums = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5]
        result = remove_duplicates(nums)
        assert result == 5
        assert nums[:result] == [1, 2, 3, 4, 5]