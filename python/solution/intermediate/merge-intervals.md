### Merge Intervals: Step-by-Step Solution

This problem asks us to merge all overlapping intervals in a given array of intervals. An interval is represented as `[start, end]`. The goal is to return a new array of non-overlapping intervals that cover all the original intervals.

#### 1. Understanding the Problem

Two intervals `[a, b]` and `[c, d]` overlap if `max(a, c) <= min(b, d)`. When they overlap, they can be merged into a single interval `[min(a, c), max(b, d)]`.

#### 2. Optimal Approach: Sorting and Iterating

The most efficient way to solve this problem is to first sort the intervals and then iterate through them, merging as we go.

Here's the intuition:
- **Sorting:** If the intervals are sorted by their start times, we can process them in a linear fashion. This ensures that when we consider an interval, any potential overlaps with previous intervals have already been handled.
- **Iterating and Merging:** We maintain a `merged` list (or array) where we store the non-overlapping intervals. For each interval in the sorted input, we compare it with the last interval added to our `merged` list.

Here is the algorithm:

1.  **Sort the intervals:** Sort the input `intervals` array based on their start times. This takes O(N log N) time, where N is the number of intervals.
2.  Initialize an empty list `merged` to store the non-overlapping intervals.
3.  Iterate through each `current_interval` in the sorted `intervals` array:
    a. **Check for overlap:** If `merged` is empty, or if the `current_interval` does not overlap with the `last_merged_interval` (i.e., `current_interval.start > last_merged_interval.end`), then simply add `current_interval` to `merged`.
    b. **Merge if overlap:** If `current_interval` *does* overlap with `last_merged_interval` (i.e., `current_interval.start <= last_merged_interval.end`), then we need to merge them. Update the `end` of the `last_merged_interval` to be the maximum of its current `end` and `current_interval.end`. This effectively extends the last merged interval to cover the current one.
4.  After iterating through all intervals, `merged` will contain the non-overlapping intervals. Return `merged`.

This approach has a time complexity of O(N log N) due to sorting, and O(N) for the single pass. So, the overall time complexity is O(N log N). The space complexity is O(N) for storing the `merged` list.

### Python Code Solution

```python
def merge_intervals(intervals):
    """
    Merges all overlapping intervals in a list.

    Args:
      intervals: A list of intervals, where each interval is [start, end].

    Returns:
      A list of non-overlapping intervals.
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

```
