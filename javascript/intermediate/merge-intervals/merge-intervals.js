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

module.exports = merge;