### Minimum Path Sum: Step-by-Step Solution

This problem asks us to find a path from the top-left corner to the bottom-right corner of a grid filled with non-negative numbers, such that the sum of all numbers along the path is minimized. We can only move down or right.

#### 1. Understanding the Problem

This is a classic dynamic programming problem. To reach any cell `(r, c)`, we must have come from either `(r-1, c)` (moving down) or `(r, c-1)` (moving right). The minimum path sum to `(r, c)` will be the current cell's value plus the minimum of the path sums to `(r-1, c)` and `(r, c-1)`.

#### 2. Dynamic Programming Approach

Let `dp[r][c]` be the minimum path sum to reach cell `(r, c)`.

Here is the algorithm:

1.  Create a 2D `dp` array (or table) of the same dimensions as the `grid`.
2.  **Base Case:** `dp[0][0]` is simply `grid[0][0]` (the starting point).
3.  **Initialize First Row and Column:**
    - For the first row (`r = 0`, `c > 0`): `dp[0][c] = dp[0][c-1] + grid[0][c]`. (Can only come from the left).
    - For the first column (`c = 0`, `r > 0`): `dp[r][0] = dp[r-1][0] + grid[r][0]`. (Can only come from above).
4.  **Fill the rest of the DP table:** Iterate `r` from `1` to `m - 1` and `c` from `1` to `n - 1`:
    a. Apply the recurrence relation: `dp[r][c] = grid[r][c] + min(dp[r-1][c], dp[r][c-1])`.
5.  The answer is `dp[m-1][n-1]`.

This approach has a time complexity of O(m * n) because we fill each cell in the DP table once. The space complexity is O(m * n) for the DP table.

#### 3. In-place Dynamic Programming (Space Optimization)

We can optimize the space complexity to O(1) by modifying the input `grid` directly, using it as our DP table. This is possible because `grid[r][c]` only depends on `grid[r-1][c]` and `grid[r][c-1]`.

1.  Initialize the first row and column as in the DP approach (modifying `grid` directly).
2.  Fill the rest of the `grid` using the recurrence relation: `grid[r][c] = grid[r][c] + min(grid[r-1][c], grid[r][c-1])`.
3.  The answer is `grid[m-1][n-1]`.

This approach has a time complexity of O(m * n) and a space complexity of O(1).

### Python Code Solution

```python
# --- Dynamic Programming Approach (in-place) ---
def min_path_sum(grid):
    """
    Finds the minimum path sum from top-left to bottom-right of a grid.

    Args:
      grid: A 2D list of non-negative integers.

    Returns:
      The minimum path sum.
    """
    m = len(grid)
    n = len(grid[0])

    # Initialize first row
    for c in range(1, n):
        grid[0][c] += grid[0][c-1]

    # Initialize first column
    for r in range(1, m):
        grid[r][0] += grid[r-1][0]

    # Fill the rest of the grid
    for r in range(1, m):
        for c in range(1, n):
            grid[r][c] += min(grid[r-1][c], grid[r][c-1])

    return grid[m-1][n-1]

```
