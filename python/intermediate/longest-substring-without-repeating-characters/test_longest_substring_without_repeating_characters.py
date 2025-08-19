"""
Tests for Longest Substring Without Repeating Characters problem.
"""

import pytest
from longest_substring_without_repeating_characters import (
    length_of_longest_substring,
    length_of_longest_substring_optimized
)


class TestLongestSubstringWithoutRepeating:
    """Test cases for the longest substring functions."""

    def test_example_1(self):
        """Test with 'abcabcbb'."""
        s = "abcabcbb"
        assert length_of_longest_substring(s) == 3
        assert length_of_longest_substring_optimized(s) == 3

    def test_example_2(self):
        """Test with 'bbbbb'."""
        s = "bbbbb"
        assert length_of_longest_substring(s) == 1
        assert length_of_longest_substring_optimized(s) == 1

    def test_example_3(self):
        """Test with 'pwwkew'."""
        s = "pwwkew"
        assert length_of_longest_substring(s) == 3
        assert length_of_longest_substring_optimized(s) == 3

    def test_empty_string(self):
        """Test with empty string."""
        assert length_of_longest_substring("") == 0
        assert length_of_longest_substring_optimized("") == 0

    def test_single_character(self):
        """Test with single character."""
        assert length_of_longest_substring("a") == 1
        assert length_of_longest_substring_optimized("a") == 1

    def test_all_unique(self):
        """Test with all unique characters."""
        s = "abcdef"
        assert length_of_longest_substring(s) == 6
        assert length_of_longest_substring_optimized(s) == 6

    def test_alternating_pattern(self):
        """Test with alternating pattern."""
        s = "abab"
        assert length_of_longest_substring(s) == 2
        assert length_of_longest_substring_optimized(s) == 2

    def test_complex_pattern(self):
        """Test with complex pattern."""
        s = "abcdefghba"
        assert length_of_longest_substring(s) == 8
        assert length_of_longest_substring_optimized(s) == 8

    def test_spaces_and_special_chars(self):
        """Test with spaces and special characters."""
        s = "a b c a"
        assert length_of_longest_substring(s) == 3  # "a b"
        assert length_of_longest_substring_optimized(s) == 3

    def test_numbers_and_letters(self):
        """Test with mixed numbers and letters."""
        s = "a1b2c3a4"
        assert length_of_longest_substring(s) == 6  # "1b2c3a" or "b2c3a4"
        assert length_of_longest_substring_optimized(s) == 6

    def test_repeated_at_end(self):
        """Test with repetition at the end."""
        s = "abcdefg"
        assert length_of_longest_substring(s) == 7
        assert length_of_longest_substring_optimized(s) == 7

    def test_repeated_at_start(self):
        """Test with repetition at the start."""
        s = "aabcdef"
        assert length_of_longest_substring(s) == 6  # "abcdef"
        assert length_of_longest_substring_optimized(s) == 6