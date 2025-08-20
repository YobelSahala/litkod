"""
Tests for Merge Intervals problem.
"""

import pytest
from merge_intervals import merge, merge_alt


class TestMergeIntervals:
    """Test cases for the merge intervals function."""

    def test_example_1(self):
        """Test with [[1,3],[2,6],[8,10],[15,18]]."""
        intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
        expected = [[1, 6], [8, 10], [15, 18]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_example_2(self):
        """Test with [[1,4],[4,5]]."""
        intervals = [[1, 4], [4, 5]]
        expected = [[1, 5]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_empty_array(self):
        """Test with empty array."""
        assert merge([]) == []
        assert merge_alt([]) == []

    def test_single_interval(self):
        """Test with single interval."""
        assert merge([[1, 4]]) == [[1, 4]]
        assert merge_alt([[1, 4]]) == [[1, 4]]

    def test_non_overlapping_intervals(self):
        """Test with non-overlapping intervals."""
        intervals = [[1, 2], [3, 4], [5, 6]]
        expected = [[1, 2], [3, 4], [5, 6]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_all_overlapping(self):
        """Test with all overlapping intervals."""
        intervals = [[1, 4], [2, 3]]
        expected = [[1, 4]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_intervals_need_sorting(self):
        """Test with intervals that need sorting."""
        intervals = [[6, 7], [2, 3], [8, 9], [1, 4]]
        expected = [[1, 4], [6, 7], [8, 9]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_multiple_overlapping(self):
        """Test with multiple overlapping intervals."""
        intervals = [[1, 3], [2, 6], [5, 10], [9, 12]]
        expected = [[1, 12]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_touching_intervals(self):
        """Test with touching intervals."""
        intervals = [[1, 2], [2, 3], [3, 4]]
        expected = [[1, 4]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_nested_intervals(self):
        """Test with nested intervals."""
        intervals = [[1, 10], [2, 3], [4, 5], [6, 7]]
        expected = [[1, 10]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_same_start_times(self):
        """Test with same start times."""
        intervals = [[1, 3], [1, 5], [6, 7]]
        expected = [[1, 5], [6, 7]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_same_end_times(self):
        """Test with same end times."""
        intervals = [[1, 3], [2, 3], [4, 5]]
        expected = [[1, 3], [4, 5]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_identical_intervals(self):
        """Test with identical intervals."""
        intervals = [[1, 3], [1, 3], [2, 4]]
        expected = [[1, 4]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_complex_overlapping_pattern(self):
        """Test with complex overlapping pattern."""
        intervals = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]]
        expected = [[1, 10]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_zero_values(self):
        """Test with zero values."""
        intervals = [[0, 1], [0, 2], [3, 4]]
        expected = [[0, 2], [3, 4]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_negative_values(self):
        """Test with negative values."""
        intervals = [[-2, -1], [-1, 0], [1, 2]]
        expected = [[-2, 0], [1, 2]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_large_intervals(self):
        """Test with large interval values."""
        intervals = [[1000000, 2000000], [1500000, 2500000]]
        expected = [[1000000, 2500000]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected

    def test_point_intervals(self):
        """Test with point intervals (start == end)."""
        intervals = [[1, 1], [2, 2], [1, 2]]
        expected = [[1, 2], [2, 2]]
        result = merge(intervals)
        # Since [1,2] and [2,2] touch at point 2, they should merge
        expected_merged = [[1, 2]]
        assert result == expected_merged
        assert merge_alt(intervals) == expected_merged

    def test_overlapping_at_boundaries(self):
        """Test intervals that overlap exactly at boundaries."""
        intervals = [[1, 3], [3, 5], [5, 7]]
        expected = [[1, 7]]
        assert merge(intervals) == expected
        assert merge_alt(intervals) == expected