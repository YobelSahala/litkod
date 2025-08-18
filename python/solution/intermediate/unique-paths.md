### Unique Paths: Step-by-Step Solution

This problem asks us to find the number of unique paths a robot can take to reach the bottom-right corner of an `m x n` grid, starting from the top-left corner. The robot can only move down or right.

#### 1. Understanding the Problem

This is a classic combinatorial problem that can be solved using dynamic programming or combinatorics. Notice that to reach any cell `(r, c)`, the robot must have come from either `(r-1, c)` (moving down) or `(r, c-1)` (moving right).

#### 2. Dynamic Programming Approach

Let `dp[r][c]` be the number of unique paths to reach cell `(r, c)`. The recurrence relation is:
`dp[r][c] = dp[r-1][c] + dp[r][c-1]`

Here is the algorithm:

1.  Create a 2D `dp` array (or table) of size `m x n`, initialized with zeros.
2.  **Base Cases:**
    - All cells in the first row (`dp[0][c]`) can only be reached by moving right from the start, so `dp[0][c] = 1` for all `c`.
    - All cells in the first column (`dp[r][0]`) can only be reached by moving down from the start, so `dp[r][0] = 1` for all `r`.
3.  Iterate `r` from `1` to `m - 1` and `c` from `1` to `n - 1`:
    a. Apply the recurrence relation: `dp[r][c] = dp[r-1][c] + dp[r][c-1]`.
4.  The answer is `dp[m-1][n-1]`.

This approach has a time complexity of O(m * n) because we fill each cell in the DP table once. The space complexity is O(m * n) for the DP table.

#### 3. Combinatorial Approach

To reach the bottom-right corner from the top-left, the robot must make a total of `(m - 1)` down moves and `(n - 1)` right moves. The total number of moves will be `(m - 1) + (n - 1)`. The problem then becomes: in a sequence of `(m - 1) + (n - 1)` moves, how many ways can we choose `(m - 1)` positions for the down moves (or `(n - 1)` positions for the right moves)?

This is a combination problem: `C(total_moves, down_moves)` or `C(total_moves, right_moves)`.

`C(N, K) = N! / (K! * (N - K)!)`

Where `N = (m - 1) + (n - 1)` and `K = (m - 1)` (or `n - 1`).

This approach has a time complexity of O(min(m, n)) because we calculate factorials or iterate to compute combinations. The space complexity is O(1).

### Python Code Solution

```python
import math

# --- Dynamic Programming Approach ---
def unique_paths_dp(m, n):
    """
    Calculates unique paths using dynamic programming.

    Args:
      m: Number of rows.
      n: Number of columns.

    Returns:
      The number of unique paths.
    """
    dp = [[0] * n for _ in range(m)]

    # Base cases: first row and first column are all 1s
    for r in range(m):
        dp[r][0] = 1
    for c in range(n):
        dp[0][c] = 1

    # Fill the rest of the DP table
    for r in range(1, m):
        for c in range(1, n):
            dp[r][c] = dp[r - 1][c] + dp[r][c - 1]

    return dp[m - 1][n - 1]

# --- Combinatorial Approach ---
def unique_paths_combinatorial(m, n):
    """
    Calculates unique paths using combinatorics.

    Args:
      m: Number of rows.
      n: Number of columns.

    Returns:
      The number of unique paths.
    """
    # Total number of steps needed
    total_steps = (m - 1) + (n - 1)
    # Number of down steps (or right steps)
    down_steps = m - 1

    # Calculate C(total_steps, down_steps)
    return math.comb(total_steps, down_steps)

```
