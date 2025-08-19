"""
Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Time Complexity: O(n)
Space Complexity: O(1) - limited by alphabet size
"""

from collections import Counter


def is_anagram(s, t):
    """
    Check if two strings are anagrams using character frequency counting.
    
    Args:
        s: First string
        t: Second string
        
    Returns:
        True if t is an anagram of s, False otherwise.
    """
    if len(s) != len(t):
        return False
    
    return Counter(s) == Counter(t)


def is_anagram_array(s, t):
    """
    Alternative solution using array counting for lowercase letters only.
    """
    if len(s) != len(t):
        return False
    
    count = [0] * 26
    
    for i in range(len(s)):
        count[ord(s[i]) - ord('a')] += 1
        count[ord(t[i]) - ord('a')] -= 1
    
    return all(c == 0 for c in count)


def is_anagram_sorting(s, t):
    """
    Simple solution using sorting.
    Time Complexity: O(n log n)
    """
    return sorted(s) == sorted(t)