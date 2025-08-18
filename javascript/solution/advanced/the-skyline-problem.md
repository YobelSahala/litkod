### The Skyline Problem: Step-by-Step Solution

This is a challenging problem that requires a good understanding of data structures (specifically, a max-heap or priority queue) and algorithms (sweep line). The goal is to generate the outer contour of a city's skyline given a list of buildings.

#### 1. Understanding the Problem

Each building is defined by `[left, right, height]`. We need to output a list of "key points" `[x, y]` that define the skyline. A key point is where the height of the skyline changes. The output must be sorted by x-coordinate, and there should be no consecutive horizontal segments of equal height.

#### 2. Optimal Approach: Sweep Line Algorithm with Max-Heap

The most efficient approach is the sweep line algorithm. Imagine a vertical line sweeping across the city from left to right. As this line moves, the height of the skyline changes only at the x-coordinates where buildings start or end.

Here's the intuition:
-   We process events (building start/end points) in increasing order of their x-coordinates.
-   At each event point, we update the set of active buildings (buildings that currently span the sweep line).
-   The current height of the skyline is determined by the maximum height among all active buildings.

To efficiently find the maximum height among active buildings, we use a **max-heap (priority queue)**. Since JavaScript doesn't have a built-in max-heap, we can simulate one using a `Map` to store height frequencies and then iterate to find the max, or use a custom heap implementation.

Here is the algorithm:

1.  **Event Points:** Create a list of event points. For each building `[L, R, H]`:
    -   Add a "start" event: `[L, -H]` (negative height indicates a start event, and helps in sorting by height for ties).
    -   Add an "end" event: `[R, H]` (positive height indicates an end event).
2.  **Sort Event Points:** Sort the event points. The primary sort key is the x-coordinate. For ties in x-coordinate:
    -   If both are start events, sort by decreasing height (taller buildings first).
    -   If both are end events, sort by increasing height (shorter buildings first).
    -   If one is a start and one is an end, process start events before end events.
3.  Initialize an empty array `result` to store the skyline key points.
4.  Initialize a `Map` called `heightCounts` to store the frequency of each active height. This will simulate a max-heap for finding the current max height. Also, keep track of the `currentMaxHeight`.
5.  Initialize `prevMaxHeight = 0`.
6.  Iterate through the sorted `eventPoints`:
    a. Get the current `x` coordinate and `height` (remember `height` is negative for start events).
    b. If it's a **start event** (`height < 0`):
        -   Increment the count of `-height` in `heightCounts`.
    c. If it's an **end event** (`height > 0`):
        -   Decrement the count of `height` in `heightCounts`.
    d. **Find `currentMaxHeight`:** Iterate downwards from the largest possible height (or from the previous `currentMaxHeight`) to find the largest height with a count greater than 0 in `heightCounts`. A more efficient way is to maintain a sorted list of active heights or a custom max-heap.
    e. **Check for height change:** If `currentMaxHeight !== prevMaxHeight`:
        -   Add `[x, currentMaxHeight]` to `result`.
        -   Update `prevMaxHeight = currentMaxHeight`.
7.  Return `result`.

**Note on JavaScript Heap Simulation:** A true max-heap implementation would be complex for a self-contained solution. The provided conceptual solution will use a `Map` to track counts and then find the max height by iterating through possible heights or by keeping track of the current max height and adjusting it. For competitive programming, a custom `PriorityQueue` class is usually used.

This approach has a time complexity of O(N log N) due to sorting the event points and heap operations (N is the number of buildings). The space complexity is O(N) for storing event points and the heap.

### JavaScript Code Solution

```javascript
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    const events = [];
    for (const [L, R, H] of buildings) {
        events.push([L, -H]); // Start event: negative height
        events.push([R, H]);  // End event: positive height
    }

    // Sort events:
    // 1. By x-coordinate
    // 2. If x-coordinates are same:
    //    - Start events (-H) come before end events (H)
    //    - Taller start events come before shorter start events
    //    - Shorter end events come before taller end events
    events.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        // For same x, process start events before end events
        // For start events, process taller first (negative height)
        // For end events, process shorter first (positive height)
        return a[1] - b[1];
    });

    const result = [];
    // Map to store counts of active heights. Simulates a max-heap.
    const heightCounts = new Map();
    heightCounts.set(0, 1); // Ground level is always active
    let currentMaxHeight = 0;

    for (const [x, h] of events) {
        const height = Math.abs(h);
        if (h < 0) { // Start event
            heightCounts.set(height, (heightCounts.get(height) || 0) + 1);
        } else { // End event
            heightCounts.set(height, heightCounts.get(height) - 1);
        }

        // Find the new current max height
        // This part is not O(logN) without a proper heap. 
        // For a true O(logN) solution, a custom MaxHeap class would be needed.
        // Here, we iterate through the map keys to find the max, which is O(N) in worst case.
        // A more optimized approach would be to use a balanced BST or a custom MaxHeap.
        let newMaxHeight = 0;
        for (const [hVal, count] of heightCounts.entries()) {
            if (count > 0) {
                newMaxHeight = Math.max(newMaxHeight, hVal);
            }
        }

        if (newMaxHeight !== currentMaxHeight) {
            result.push([x, newMaxHeight]);
            currentMaxHeight = newMaxHeight;
        }
    }

    return result;
};
```
