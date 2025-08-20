"""
Solution for Merge Intervals problem.

Given an array of intervals where intervals[i] = [starti, endi], merge all 
overlapping intervals, and return an array of the non-overlapping intervals 
that cover all the intervals in the input.

Time complexity: O(n log n) due to sorting
Space complexity: O(n) for the result array
"""

from typing import List


def merge(intervals: List[List[int]]) -> List[List[int]]:
    """
    Merge overlapping intervals.
    
    Args:
        intervals: List of intervals, where each interval is [start, end]
        
    Returns:
        List of merged non-overlapping intervals
        
    Example:
        >>> merge([[1,3],[2,6],[8,10],[15,18]])
        [[1, 6], [8, 10], [15, 18]]
        >>> merge([[1,4],[4,5]])
        [[1, 5]]
    """
    if not intervals:
        return []
    
    # Sort intervals by their start times
    intervals.sort(key=lambda x: x[0])
    
    merged = []
    for interval in intervals:
        # If the merged list is empty or if the current interval does not overlap
        # with the last merged interval, simply add it.
        if not merged or interval[0] > merged[-1][1]:
            merged.append(interval)
        else:
            # Otherwise, there is an overlap, so merge the current and last intervals
            merged[-1][1] = max(merged[-1][1], interval[1])
    
    return merged


def merge_alt(intervals: List[List[int]]) -> List[List[int]]:
    """
    Alternative implementation using a more explicit approach.
    
    Args:
        intervals: List of intervals, where each interval is [start, end]
        
    Returns:
        List of merged non-overlapping intervals
    """
    if not intervals:
        return []
    
    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])
    
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        last = merged[-1]
        
        # Check if intervals overlap
        if current[0] <= last[1]:
            # Merge intervals
            last[1] = max(last[1], current[1])
        else:
            # No overlap, add new interval
            merged.append(current)
    
    return merged