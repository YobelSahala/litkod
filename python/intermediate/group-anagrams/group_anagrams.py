"""
Group Anagrams

Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Time Complexity: O(N * K * log K) where N is the number of strings and K is the maximum length of a string
Space Complexity: O(N * K) for the hashmap
"""

from typing import List
from collections import defaultdict


def group_anagrams(strs: List[str]) -> List[List[str]]:
    """
    Group anagrams together using sorted strings as keys.
    
    For each string, sort its characters to create a canonical key.
    All anagrams will have the same sorted key.
    
    Args:
        strs: List of strings to group
        
    Returns:
        List of lists, where each inner list contains anagrams
    """
    anagram_groups = defaultdict(list)
    
    for word in strs:
        # Sort the word to create a canonical key
        key = ''.join(sorted(word))
        
        # Add the word to the appropriate group
        anagram_groups[key].append(word)
    
    # Convert dictionary values to list of lists
    return list(anagram_groups.values())