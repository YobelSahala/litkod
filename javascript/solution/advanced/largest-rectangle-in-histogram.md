### Largest Rectangle in Histogram: Step-by-Step Solution

This problem asks us to find the largest rectangular area in a histogram, where each bar has a width of 1. This is a classic problem that can be solved efficiently using a monotonic stack.

#### 1. Understanding the Problem

For any given bar `heights[i]`, it can potentially be the shortest bar in a rectangle. The rectangle's height would be `heights[i]`, and its width would extend as far left and right as possible, as long as all bars within that range are at least `heights[i]` tall.

#### 2. Brute-Force Approach

A naive approach would be to consider every possible pair of bars `(i, j)` as the left and right boundaries of a rectangle. For each pair, find the minimum height between `i` and `j`, and calculate the area. This would be O(n^3). An optimization would be to fix `i` and iterate `j`, keeping track of the minimum height, making it O(n^2). Both are too slow for `n = 10^5`.

#### 3. Optimal Approach: Monotonic Stack

The most efficient solution uses a monotonic stack (specifically, a monotonically increasing stack of indices). The idea is to find, for each bar, the first bar to its left that is smaller than it, and the first bar to its right that is smaller than it. These define the boundaries of the largest rectangle where the current bar is the limiting height.

Here's the intuition:
- When we encounter a bar that is shorter than the bar at the top of our stack, it means the bar at the top of the stack can no longer extend to the right. We can then calculate the area for the bar at the top of the stack.
- The width of the rectangle for the popped bar will be `current_index - stack.top - 1` (where `stack.top` is the index of the bar just before the popped one, which is the first smaller bar to its left).

Here is the algorithm:

1.  Initialize an empty stack `stack`.
2.  Initialize `max_area = 0`.
3.  Iterate through the `heights` array with an index `i` from `0` to `len(heights)` (we iterate one past the end to handle remaining bars in the stack).
    a. Let `current_height` be `heights[i]` if `i < len(heights)`, otherwise `0` (to pop remaining bars).
    b. While the `stack` is not empty and `current_height < heights[stack[-1]]`:
        i. Pop the `top_index` from the stack.
        ii. Get the `h = heights[top_index]`.
        iii. Calculate the `width`:
            - If the stack is empty after popping, it means `h` extends to the beginning of the histogram. So, `width = i`.
            - Else, `width = i - stack[-1] - 1` (the distance from the current `i` to the new top of the stack, minus 1).
        iv. Update `max_area = max(max_area, h * width)`.
    c. Push the current index `i` onto the stack.
4.  Return `max_area`.

This approach has a time complexity of O(n) because each bar is pushed onto and popped from the stack at most once. The space complexity is O(n) in the worst case for the stack.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = []; // Stores indices of bars in increasing order of height
    let maxArea = 0;
    const n = heights.length;

    // Iterate one past the end to clear the stack with a virtual bar of height 0
    for (let i = 0; i <= n; i++) {
        const currentHeight = (i === n) ? 0 : heights[i];

        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()]; // Height of the bar being popped
            
            // Calculate width: if stack is empty, it means this bar extends to the beginning
            // otherwise, it extends from stack[stack.length - 1] + 1 to i - 1
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            
            maxArea = Math.max(maxArea, h * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
};
```
