"""
Valid Parentheses

This problem requires checking for properly matched and nested brackets. 
This is a classic use case for the Stack data structure.

Time Complexity: O(n)
Space Complexity: O(n)
"""


def is_valid(s):
    """
    Determines if the input string has valid parentheses.

    Args:
      s: The input string.

    Returns:
      True if the string is valid, False otherwise.
    """
    stack = []
    mapping = {")": "(", "}": "{", "]": "["}

    for char in s:
        if char in mapping:  # If it's a closing bracket
            top_element = stack.pop() if stack else '#'
            if mapping[char] != top_element:
                return False
        else:  # If it's an opening bracket
            stack.append(char)

    return not stack  # The stack should be empty for a valid string