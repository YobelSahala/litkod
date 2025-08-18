### Maximal Rectangle: Step-by-Step Solution

This problem asks us to find the largest rectangle containing only `'1'`s in a binary `matrix` and return its area. This is a classic problem that can be reduced to the "Largest Rectangle in Histogram" problem.

#### 1. Understanding the Problem

Imagine each row of the binary matrix as the base of a histogram. For each cell `(r, c)` that contains a `'1'`, its height in the histogram formed by that row and all rows above it would be the number of consecutive `'1'`s extending upwards from `(r, c)`.

#### 2. Optimal Approach: Reduce to Largest Rectangle in Histogram

The key insight is to transform the 2D problem into a series of 1D problems. We can iterate through each row of the matrix. For each row, we construct a histogram where the height of each bar `j` is the number of consecutive `'1'`s ending at `(current_row, j)` and extending upwards.

Here is the algorithm:

1.  Initialize `max_area = 0`.
2.  Get the dimensions of the matrix: `rows`, `cols`.
3.  Create a `heights` array of size `cols`, initialized with zeros. This array will represent the heights of the bars in our current histogram.
4.  Iterate through each `row` in the `matrix`:
    a. **Update `heights` array:** For each column `c` in the current `row`:
        - If `matrix[row][c]` is `'1'`, increment `heights[c]` (extend the current bar upwards).
        - If `matrix[row][c]` is `'0'`, reset `heights[c]` to `0` (the bar is broken).
    b. **Calculate Largest Rectangle in Current Histogram:** Call the `largest_rectangle_area` function (from the previous problem) with the current `heights` array. Update `max_area = max(max_area, largest_rectangle_area(heights))`.
5.  Return `max_area`.

**`largest_rectangle_area` function (Monotonic Stack):**
(As implemented in the previous problem, this function takes a list of heights and returns the largest rectangle area. It uses a monotonic stack to achieve O(N) time complexity.)

This overall approach has a time complexity of O(rows * cols) because we iterate through each cell once, and for each row, we call `largest_rectangle_area` which takes O(cols) time. The space complexity is O(cols) for the `heights` array and the stack used by `largest_rectangle_area`.

### Python Code Solution

```python
def largest_rectangle_area(heights):
    """
    Helper function: Finds the area of the largest rectangle in a histogram.
    (Copied from the previous problem's solution)
    """
    stack = [] # Stores indices of bars in increasing order of height
    max_area = 0
    n = len(heights)

    for i in range(n + 1): # Iterate one past the end to clear the stack
        current_height = heights[i] if i < n else 0

        while stack and current_height < heights[stack[-1]]:
            h = heights[stack.pop()] # Height of the bar being popped
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, h * width)
        
        stack.append(i)
        
    return max_area


def maximal_rectangle(matrix):
    """
    Finds the largest rectangle containing only '1's in a binary matrix.

    Args:
      matrix: A list of lists of strings ('0's and '1's).

    Returns:
      The area of the maximal rectangle.
    """
    if not matrix or not matrix[0]:
        return 0

    rows = len(matrix)
    cols = len(matrix[0])
    
    # heights array will store the current histogram for each row
    heights = [0] * cols
    max_overall_area = 0

    for r in range(rows):
        for c in range(cols):
            if matrix[r][c] == '1':
                heights[c] += 1 # Extend the bar upwards
            else:
                heights[c] = 0 # Reset the bar if '0' is encountered
        
        # Calculate the largest rectangle area for the current histogram (heights array)
        max_overall_area = max(max_overall_area, largest_rectangle_area(heights))
        
    return max_overall_area

```
