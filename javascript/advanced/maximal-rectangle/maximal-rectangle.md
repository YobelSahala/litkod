### Maximal Rectangle: Step-by-Step Solution

This problem asks us to find the largest rectangle containing only `'1'`s in a binary `matrix` and return *its area*. This is a classic problem that can be reduced to the "Largest Rectangle in Histogram" problem.

#### 1. Understanding the Problem

Imagine each row of the binary matrix as the base of a histogram. For each cell `(r, c)` that contains a `'1'`, its height in the histogram formed by that row and all rows above it would be the number of consecutive `'1'`s extending upwards from `(r, c)`.

#### 2. Optimal Approach: Reduce to Largest Rectangle in Histogram

The key insight is to transform the 2D problem into a series of 1D problems. We can iterate through each row of the matrix. For each row, we construct a histogram where the height of each bar `j` is the number of consecutive `'1'`s ending at `(current_row, j)` and extending upwards.

Here is the algorithm:

1.  Initialize `maxArea = 0`.
2.  Get the dimensions of the matrix: `rows`, `cols`.
3.  Create a `heights` array of size `cols`, initialized with zeros. This array will represent the heights of the bars in our current histogram.
4.  Iterate through each `row` in the `matrix`:
    a. **Update `heights` array:** For each column `c` in the current `row`:
        -   If `matrix[row][c]` is `'1'`, increment `heights[c]` (extend the current bar upwards).
        -   If `matrix[row][c]` is `'0'`, reset `heights[c]` to `0` (the bar is broken).
    b. **Calculate Largest Rectangle in Current Histogram:** Call the `largestRectangleArea` function (from the previous problem) with the current `heights` array. Update `maxArea = Math.max(maxArea, largestRectangleArea(heights))`.
5.  Return `maxArea`.

**`largestRectangleArea` function (Monotonic Stack):**
(As implemented in the previous problem, this function takes a list of heights and returns the largest rectangle area. It uses a monotonic stack to achieve O(N) time complexity.)

This overall approach has a time complexity of O(rows * cols) because we iterate through each cell once, and for each row, we call `largestRectangleArea` which takes O(cols) time. The space complexity is O(cols) for the `heights` array and the stack used by `largestRectangleArea`.

### JavaScript Code Solution

```javascript
/**
 * Helper function: Finds the area of the largest rectangle in a histogram.
 * (Copied from the previous problem's solution)
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

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // heights array will store the current histogram for each row
    const heights = new Array(cols).fill(0);
    let maxOverallArea = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === '1') {
                heights[c]++; // Extend the bar upwards
            } else {
                heights[c] = 0; // Reset the bar if '0' is encountered
            }
        }
        
        // Calculate the largest rectangle area for the current histogram (heights array)
        maxOverallArea = Math.max(maxOverallArea, largestRectangleArea(heights));
    }

    return maxOverallArea;
};
```
