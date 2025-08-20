"""
Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations 
of well-formed parentheses.

Time Complexity: O(4^n / sqrt(n)) - Catalan number
Space Complexity: O(4^n / sqrt(n)) - for the result array and recursion stack
"""

from typing import List


def generate_parenthesis(n: int) -> List[str]:
    """
    Generate all combinations of well-formed parentheses with n pairs.
    
    Uses backtracking to build valid combinations by:
    1. Adding opening parenthesis when count < n
    2. Adding closing parenthesis when closing count < opening count
    
    Args:
        n: Number of pairs of parentheses
        
    Returns:
        List of all valid parentheses combinations
    """
    result = []
    
    def backtrack(current_string: str, open_count: int, close_count: int) -> None:
        """
        Backtracking helper function to generate valid parentheses.
        
        Args:
            current_string: Current string being built
            open_count: Number of opening parentheses used
            close_count: Number of closing parentheses used
        """
        # Base case: if the string is complete
        if len(current_string) == 2 * n:
            result.append(current_string)
            return
        
        # Option 1: Add an opening parenthesis
        if open_count < n:
            backtrack(current_string + '(', open_count + 1, close_count)
        
        # Option 2: Add a closing parenthesis
        # Only if we have more open parentheses than closed ones
        if close_count < open_count:
            backtrack(current_string + ')', open_count, close_count + 1)
    
    backtrack("", 0, 0)
    return result