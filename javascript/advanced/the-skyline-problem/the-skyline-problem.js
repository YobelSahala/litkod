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

module.exports = getSkyline;