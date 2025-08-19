"""
Tests for Valid Parentheses problem.
"""

import pytest
from valid_parentheses import is_valid


class TestValidParentheses:
    """Test cases for the valid parentheses function."""

    def test_example_1(self):
        """Test simple valid parentheses."""
        assert is_valid("()") == True

    def test_example_2(self):
        """Test multiple types of valid parentheses."""
        assert is_valid("()[]{}") == True

    def test_example_3(self):
        """Test invalid parentheses."""
        assert is_valid("(]") == False

    def test_nested_valid(self):
        """Test nested valid parentheses."""
        assert is_valid("([])") == True
        assert is_valid("{[()]}") == True

    def test_complex_valid(self):
        """Test complex valid combinations."""
        assert is_valid("(){}[]") == True
        assert is_valid("(()())") == True
        assert is_valid("{[()()]}") == True

    def test_invalid_cases(self):
        """Test various invalid cases."""
        assert is_valid("(") == False
        assert is_valid(")") == False
        assert is_valid("([)]") == False
        assert is_valid("((") == False
        assert is_valid("))") == False

    def test_empty_string(self):
        """Test with empty string."""
        assert is_valid("") == True

    def test_single_brackets(self):
        """Test with single types of brackets."""
        assert is_valid("((()))") == True
        assert is_valid("{{{}}}") == True
        assert is_valid("[[[]]]") == True

    def test_wrong_order(self):
        """Test with wrong closing order."""
        assert is_valid("([{}])") == True
        assert is_valid("([)]") == False
        assert is_valid("([{]}") == False

    def test_unbalanced(self):
        """Test unbalanced brackets."""
        assert is_valid("(((") == False
        assert is_valid(")))") == False
        assert is_valid("({[") == False
        assert is_valid("]}") == False

    def test_mixed_invalid(self):
        """Test mixed invalid patterns."""
        assert is_valid("(()") == False
        assert is_valid("())") == False
        assert is_valid("{[}]") == False