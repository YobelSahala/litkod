### Longest Increasing Path in a Matrix: Step-by-Step Solution

This problem asks us to find the length of the longest increasing path in a given `m x n` integer `matrix`. We can move in four directions (left, right, up, down) but not diagonally or outside the boundary.

#### 1. Understanding the Problem

An increasing path means that each subsequent cell in the path must have a strictly greater value than the current cell. We are looking for the maximum length of such a path.

#### 2. Optimal Approach: DFS with Memoization

This problem has optimal substructure and overlapping subproblems, making it a perfect candidate for dynamic programming with memoization. We can use Depth-First Search (DFS) to explore paths from each cell, and memoize the results to avoid redundant calculations.

Let `memo[r][c]` store the length of the longest increasing path starting from cell `(r, c)`.

Here is the algorithm:

1.  Get the dimensions of the matrix: `rows`, `cols`.
2.  Create a `memo` table of the same dimensions, initialized with zeros. This table will store the computed LIS lengths for each cell.
3.  Initialize `max_path = 0`.
4.  Define a recursive DFS function, `dfs(r, c)`:
    a. **Memoization Check:** If `memo[r][c]` is not 0, it means we have already computed the LIS from this cell. Return `memo[r][c]`.
    b. **Initialize current path length:** `current_path_length = 1` (the cell itself contributes 1 to the path).
    c. **Explore Neighbors:** For each of the four possible directions (up, down, left, right):
        i. Calculate the coordinates of the `neighbor_r, neighbor_c`.
        ii. **Validity Check:** If the neighbor is within bounds and `matrix[neighbor_r][neighbor_c] > matrix[r][c]` (strictly increasing condition):
            - Recursively call `dfs(neighbor_r, neighbor_c)` to get the LIS length starting from the neighbor.
            - Update `current_path_length = max(current_path_length, 1 + dfs(neighbor_r, neighbor_c))`.
    d. **Memoize Result:** Store the computed `current_path_length` in `memo[r][c]`.
    e. Return `memo[r][c]`.
5.  Iterate through each cell `(r, c)` in the `matrix`:
    a. Call `dfs(r, c)`.
    b. Update `max_path = max(max_path, dfs(r, c))`.
6.  Return `max_path`.

This approach has a time complexity of O(rows * cols) because each cell is visited and computed once. The space complexity is O(rows * cols) for the `memo` table and the recursion stack.

### Python Code Solution

```python
def longest_increasing_path(matrix):
    """
    Finds the length of the longest increasing path in a matrix.

    Args:
      matrix: A 2D list of integers.

    Returns:
      The length of the longest increasing path.
    """
    if not matrix or not matrix[0]:
        return 0

    rows, cols = len(matrix), len(matrix[0])
    memo = [[0] * cols for _ in range(rows)]
    max_path = 0

    # Define possible moves (down, up, right, left)
    directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

    def dfs(r, c):
        # If already computed, return memoized value
        if memo[r][c] != 0:
            return memo[r][c]

        # Current cell itself contributes 1 to the path
        current_max_len = 1

        # Explore neighbors
        for dr, dc in directions:
            nr, nc = r + dr, c + dc

            # Check bounds and strictly increasing condition
            if (0 <= nr < rows and 0 <= nc < cols and matrix[nr][nc] > matrix[r][c]):
                current_max_len = max(current_max_len, 1 + dfs(nr, nc))

        # Memoize the result
        memo[r][c] = current_max_len
        return current_max_len

    # Iterate through each cell and start DFS from it
    for r in range(rows):
        for c in range(cols):
            max_path = max(max_path, dfs(r, c))
            
    return max_path

```
