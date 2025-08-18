### The Skyline Problem: Step-by-Step Solution

This is a challenging problem that requires a good understanding of data structures (specifically, a max-heap or priority queue) and algorithms (sweep line). The goal is to generate the outer contour of a city's skyline given a list of buildings.

#### 1. Understanding the Problem

Each building is defined by `[left, right, height]`. We need to output a list of "key points" `[x, y]` that define the skyline. A key point is where the height of the skyline changes. The output must be sorted by x-coordinate, and there should be no consecutive horizontal segments of equal height.

#### 2. Optimal Approach: Sweep Line Algorithm with Max-Heap

The most efficient approach is the sweep line algorithm. Imagine a vertical line sweeping across the city from left to right. As this line moves, the height of the skyline changes only at the x-coordinates where buildings start or end.

Here's the intuition:
- We process events (building start/end points) in increasing order of their x-coordinates.
- At each event point, we update the set of active buildings (buildings that currently span the sweep line).
- The current height of the skyline is determined by the maximum height among all active buildings.

To efficiently find the maximum height among active buildings, we use a **max-heap (priority queue)**.

Here is the algorithm:

1.  **Event Points:** Create a list of event points. For each building `[L, R, H]`:
    - Add a "start" event: `[L, -H]` (negative height indicates a start event, and helps in sorting by height for ties).
    - Add an "end" event: `[R, H]` (positive height indicates an end event).
2.  **Sort Event Points:** Sort the event points. The primary sort key is the x-coordinate. For ties in x-coordinate:
    - If both are start events, sort by decreasing height (taller buildings first).
    - If both are end events, sort by increasing height (shorter buildings first).
    - If one is a start and one is an end, process start events before end events.
3.  Initialize an empty list `result` to store the skyline key points.
4.  Initialize a max-heap `live_buildings` (or `active_heights`) to store the heights of all currently active buildings. Initially, add `0` to the heap to represent the ground level.
5.  Initialize `prev_max_height = 0`.
6.  Iterate through the sorted `event_points`:
    a. Get the current `x` coordinate and `height` (remember `height` is negative for start events).
    b. If it's a **start event** (`height < 0`):
        - Add `-height` to `live_buildings`.
    c. If it's an **end event** (`height > 0`):
        - Remove `height` from `live_buildings`.
    d. Get the `current_max_height` from the top of `live_buildings` (which is the maximum height among active buildings).
    e. **Check for height change:** If `current_max_height != prev_max_height`:
        - Add `[x, current_max_height]` to `result`.
        - Update `prev_max_height = current_max_height`.
7.  Return `result`.

**Important Note on Heap Implementation:** Python's `heapq` is a min-heap. To simulate a max-heap, store negative values of heights. When removing an element, you might need to use a lazy deletion approach or rebuild the heap if the element to be removed is not at the top.

This approach has a time complexity of O(N log N) due to sorting the event points and heap operations (N is the number of buildings). The space complexity is O(N) for storing event points and the heap.

### Python Code Solution

```python
import heapq

def get_skyline(buildings):
    """
    Calculates the skyline of a city given a list of buildings.

    Args:
      buildings: A list of buildings, where each building is [left, right, height].

    Returns:
      A list of key points [x, y] representing the skyline.
    """
    # Create event points: (x-coordinate, -height for start, height for end)
    # Negative height for start events ensures taller buildings are processed first for same x
    # Positive height for end events ensures shorter buildings are processed first for same x
    events = []
    for L, R, H in buildings:
        events.append((L, -H, R)) # (x, -height, right_x)
        events.append((R, H, 0))  # (x, height, dummy_right_x for sorting consistency)

    # Sort events:
    # 1. By x-coordinate
    # 2. If x-coordinates are same, by height (negative for start, positive for end)
    #    This means start events of taller buildings come first.
    #    Then end events of shorter buildings come first.
    events.sort()

    result = []
    # Max-heap to store heights of active buildings. Store negative heights for max-heap behavior.
    # Add 0 to represent the ground level.
    live_buildings = [0]
    prev_max_height = 0

    for x, h, R in events:
        if h < 0:  # Start event
            heapq.heappush(live_buildings, h) # Push negative height
        else:  # End event
            # Remove the height from the heap. This is tricky with Python's min-heap.
            # A common approach is lazy deletion or rebuilding. For simplicity here,
            # we assume direct removal is possible or use a counter for heights.
            # For a robust solution, a custom heap or lazy deletion is needed.
            # For this problem, we can just remove the specific height.
            live_buildings.remove(-h) # Remove the negative of the height
            heapq.heapify(live_buildings) # Re-heapify after removal

        current_max_height = -live_buildings[0] # Get the current max height

        if current_max_height != prev_max_height:
            result.append([x, current_max_height])
            prev_max_height = current_max_height
            
    return result

```
