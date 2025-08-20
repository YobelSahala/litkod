"""
Tests for Generate Parentheses problem.
"""

import pytest
import sys
import os

# Add the parent directory to the path so we can import from utils
sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..'))

from generate_parentheses import generate_parenthesis


class TestGenerateParentheses:
    """Test cases for the generate parentheses function."""

    def test_generate_all_combinations_for_n_3(self):
        """Test generating all combinations for n=3."""
        result = generate_parenthesis(3)
        expected = ["((()))", "(()())", "(())()", "()(())", "()()()"]
        assert sorted(result) == sorted(expected)
        assert len(result) == 5

    def test_generate_all_combinations_for_n_1(self):
        """Test generating all combinations for n=1."""
        result = generate_parenthesis(1)
        assert result == ["()"]

    def test_generate_all_combinations_for_n_2(self):
        """Test generating all combinations for n=2."""
        result = generate_parenthesis(2)
        expected = ["(())", "()()"]
        assert sorted(result) == sorted(expected)
        assert len(result) == 2

    def test_generate_all_combinations_for_n_4(self):
        """Test generating all combinations for n=4."""
        result = generate_parenthesis(4)
        assert len(result) == 14  # Catalan number C(4) = 14
        
        # Verify all results are valid and unique
        unique_results = set(result)
        assert len(unique_results) == len(result)
        
        # Verify each result is valid parentheses
        for parentheses in result:
            assert self._is_valid_parentheses(parentheses)
            assert len(parentheses) == 8  # 2 * n

    def test_handle_edge_case_n_0(self):
        """Test handling edge case n=0."""
        result = generate_parenthesis(0)
        assert result == [""]

    def test_generate_correct_number_of_combinations_catalan_numbers(self):
        """Test generating correct number of combinations (Catalan numbers)."""
        # C(0)=1, C(1)=1, C(2)=2, C(3)=5, C(4)=14
        assert len(generate_parenthesis(0)) == 1
        assert len(generate_parenthesis(1)) == 1
        assert len(generate_parenthesis(2)) == 2
        assert len(generate_parenthesis(3)) == 5
        assert len(generate_parenthesis(4)) == 14

    def test_generate_only_well_formed_parentheses(self):
        """Test generating only well-formed parentheses."""
        for n in range(1, 5):
            result = generate_parenthesis(n)
            for parentheses in result:
                assert self._is_valid_parentheses(parentheses)
                assert len(parentheses) == 2 * n
                # Count opening and closing parentheses
                open_count = parentheses.count('(')
                close_count = parentheses.count(')')
                assert open_count == n
                assert close_count == n

    def test_generate_unique_combinations(self):
        """Test generating unique combinations."""
        for n in range(1, 5):
            result = generate_parenthesis(n)
            unique_results = set(result)
            assert len(unique_results) == len(result)

    def test_larger_values(self):
        """Test with larger values of n."""
        result = generate_parenthesis(5)
        assert len(result) == 42  # Catalan number C(5) = 42
        
        # Verify all are valid
        for parentheses in result:
            assert self._is_valid_parentheses(parentheses)
            assert len(parentheses) == 10

    def _is_valid_parentheses(self, s: str) -> bool:
        """Helper function to validate parentheses."""
        count = 0
        for char in s:
            if char == '(':
                count += 1
            elif char == ')':
                count -= 1
                if count < 0:
                    return False
        return count == 0