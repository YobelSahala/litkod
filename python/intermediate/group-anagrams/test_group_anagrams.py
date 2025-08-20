"""
Tests for Group Anagrams problem.
"""

import pytest
import sys
import os

# Add the parent directory to the path so we can import from utils
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..'))

from group_anagrams import group_anagrams


class TestGroupAnagrams:
    """Test cases for the group anagrams function."""
    
    def _normalize_result(self, result):
        """Helper function to normalize results for comparison."""
        return [sorted(group) for group in sorted(result, key=lambda x: (len(x), sorted(x)[0]))]

    def test_group_anagrams_example_1(self):
        """Test grouping ["eat","tea","tan","ate","nat","bat"] correctly."""
        result = group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
        normalized = self._normalize_result(result)
        expected = self._normalize_result([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]])
        assert normalized == expected

    def test_handle_single_word(self):
        """Test handling single word."""
        result = group_anagrams(["a"])
        assert result == [["a"]]

    def test_handle_empty_array(self):
        """Test handling empty array."""
        result = group_anagrams([])
        assert result == []

    def test_handle_words_with_no_anagrams(self):
        """Test handling words with no anagrams."""
        result = group_anagrams(["abc", "def", "ghi"])
        assert len(result) == 3
        assert all(len(group) == 1 for group in result)

    def test_handle_all_words_being_anagrams(self):
        """Test handling all words being anagrams."""
        result = group_anagrams(["abc", "bca", "cab", "acb"])
        assert len(result) == 1
        assert len(result[0]) == 4
        assert set(result[0]) == {"abc", "bca", "cab", "acb"}

    def test_handle_empty_strings(self):
        """Test handling empty strings."""
        result = group_anagrams(["", "", "a"])
        assert len(result) == 2
        normalized = self._normalize_result(result)
        expected = self._normalize_result([["a"], ["", ""]])
        assert normalized == expected

    def test_handle_single_character_words(self):
        """Test handling single character words."""
        result = group_anagrams(["a", "b", "a", "c", "b"])
        assert len(result) == 3
        normalized = self._normalize_result(result)
        expected = self._normalize_result([["a", "a"], ["b", "b"], ["c"]])
        assert normalized == expected

    def test_handle_case_sensitivity(self):
        """Test handling case sensitivity."""
        result = group_anagrams(["abc", "ABC", "bca"])
        assert len(result) == 2  # "abc" and "bca" are anagrams, "ABC" is different

    def test_handle_longer_words(self):
        """Test handling longer words."""
        result = group_anagrams(["listen", "silent", "hello", "world"])
        assert len(result) == 3
        # "listen" and "silent" should be grouped together
        listen_group = None
        for group in result:
            if "listen" in group:
                listen_group = group
                break
        assert listen_group is not None
        assert set(listen_group) == {"listen", "silent"}

    def test_handle_duplicate_words(self):
        """Test handling duplicate words."""
        result = group_anagrams(["abc", "abc", "bca", "def"])
        assert len(result) == 2
        abc_group = None
        for group in result:
            if "abc" in group:
                abc_group = group
                break
        assert abc_group is not None
        assert len(abc_group) == 3
        assert set(abc_group) == {"abc", "abc", "bca"}

    def test_handle_words_with_repeated_characters(self):
        """Test handling words with repeated characters."""
        result = group_anagrams(["aab", "aba", "baa", "abc"])
        assert len(result) == 2
        aab_group = None
        for group in result:
            if "aab" in group:
                aab_group = group
                break
        assert aab_group is not None
        assert len(aab_group) == 3
        assert set(aab_group) == {"aab", "aba", "baa"}

    def test_large_input(self):
        """Test with larger input."""
        words = ["abc", "bca", "cab", "xyz", "zyx", "yxz", "def"]
        result = group_anagrams(words)
        assert len(result) == 3
        
        # Find groups and verify
        abc_group = None
        xyz_group = None
        def_group = None
        
        for group in result:
            if "abc" in group:
                abc_group = group
            elif "xyz" in group:
                xyz_group = group
            elif "def" in group:
                def_group = group
                
        assert set(abc_group) == {"abc", "bca", "cab"}
        assert set(xyz_group) == {"xyz", "zyx", "yxz"}
        assert def_group == ["def"]

    def test_edge_cases(self):
        """Test various edge cases."""
        # Single character
        assert group_anagrams(["a"]) == [["a"]]
        
        # All same character
        result = group_anagrams(["aa", "aa"])
        assert len(result) == 1
        assert len(result[0]) == 2
        
        # Mixed lengths
        result = group_anagrams(["a", "aa", "aaa"])
        assert len(result) == 3