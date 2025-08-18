### Merge Intervals: Step-by-Step Solution

This problem asks us to merge all overlapping intervals in a given array of intervals. An interval is represented as `[start, end]`. The goal is to return a new array of non-overlapping intervals that cover all the original intervals.

#### 1. Understanding the Problem

Two intervals `[a, b]` and `[c, d]` overlap if `Math.max(a, c) <= Math.min(b, d)`. When they overlap, they can be merged into a single interval `[Math.min(a, c), Math.max(b, d)]`.

#### 2. Optimal Approach: Sorting and Iterating

The most efficient way to solve this problem is to first sort the intervals and then iterate through them, merging as we go.

Here's the intuition:
-   **Sorting:** If the intervals are sorted by their start times, we can process them in a linear fashion. This ensures that when we consider an interval, any potential overlaps with previous intervals have already been handled.
-   **Iterating and Merging:** We maintain a `merged` array where we store the non-overlapping intervals. For each interval in the sorted input, we compare it with the last interval added to our `merged` array.

Here is the algorithm:

1.  **Sort the intervals:** Sort the input `intervals` array based on their start times. This takes O(N log N) time, where N is the number of intervals.
2.  Initialize an empty array `merged` to store the non-overlapping intervals.
3.  Iterate through each `currentInterval` in the sorted `intervals` array:
    a. **Check for overlap:** If `merged` is empty, or if the `currentInterval` does not overlap with the `lastMergedInterval` (i.e., `currentInterval[0] > lastMergedInterval[1]`), then simply add `currentInterval` to `merged`.
    b. **Merge if overlap:** If `currentInterval` *does* overlap with `lastMergedInterval` (i.e., `currentInterval[0] <= lastMergedInterval[1]`), then we need to merge them. Update the `end` of the `lastMergedInterval` to be the maximum of its current `end` and `currentInterval[1]`. This effectively extends the last merged interval to cover the current one.
4.  After iterating through all intervals, `merged` will contain the non-overlapping intervals. Return `merged`.

This approach has a time complexity of O(N log N) due to sorting, and O(N) for the single pass. So, the overall time complexity is O(N log N). The space complexity is O(N) for storing the `merged` array.

### JavaScript Code Solution

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) {
        return [];
    }

    // Sort intervals by their start times
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [];
    for (const interval of intervals) {
        // If the merged list is empty or if the current interval does not overlap
        // with the last merged interval, simply add it.
        if (merged.length === 0 || interval[0] > merged[merged.length - 1][1]) {
            merged.push(interval);
        } else {
            // Otherwise, there is an overlap, so merge the current and last intervals
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }

    return merged;
};
```
