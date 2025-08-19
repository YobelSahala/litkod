"""
Longest Substring Without Repeating Characters

Find the length of the longest substring in a given string s that does not contain 
any repeating characters.

Time Complexity: O(n)
Space Complexity: O(k) where k is the number of unique characters
"""


def length_of_longest_substring(s):
    """
    Finds the length of the longest substring without repeating characters.

    Args:
      s: The input string.

    Returns:
      The length of the longest substring without repeating characters.
    """
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
        
    return max_length


def length_of_longest_substring_optimized(s):
    """
    Optimized version using hashmap to store character indices.
    Allows skipping characters in one go when duplicate is found.
    """
    char_map = {}
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        if s[right] in char_map and char_map[s[right]] >= left:
            left = char_map[s[right]] + 1
        
        char_map[s[right]] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length