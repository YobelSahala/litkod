### Number of Islands: Step-by-Step Solution

This problem asks us to count the number of islands in a 2D binary grid. An island is formed by connecting adjacent '1's (land) horizontally or vertically. This is a classic graph traversal problem, solvable with either Depth-First Search (DFS) or Breadth-First Search (BFS).

#### 1. Understanding the Problem

We are given a grid of '1's and '0's. We need to find connected components of '1's. Each connected component represents an island. Once we find a piece of land ('1'), we need to explore all its connected land cells and mark them as visited so we don't count them again as part of a new island.

#### 2. Approach: Depth-First Search (DFS)

DFS is a natural fit for this problem. When we encounter a '1', we increment our island count and then start a DFS traversal from that cell. The DFS will visit all connected '1's and effectively "sink" them (change them to '0' or mark them as visited) so they are not counted again.

Here is the algorithm:

1.  Initialize `num_islands = 0`.
2.  Get the dimensions of the grid: `rows = len(grid)`, `cols = len(grid[0])`.
3.  Iterate through each cell `(r, c)` in the grid:
    a. If `grid[r][c]` is a '1' (land):
        i. Increment `num_islands`.
        ii. Start a DFS from `(r, c)` to explore and mark all connected land cells.
            - Define a helper DFS function, `dfs(r, c)`:
                - **Base Cases:** If `(r, c)` is out of bounds, or `grid[r][c]` is '0' (water), or `grid[r][c]` has already been visited (e.g., marked as '2' or '#'), simply return.
                - **Mark as Visited:** Change `grid[r][c]` to '0' (or any other marker) to indicate it has been visited and is part of the current island.
                - **Explore Neighbors:** Recursively call `dfs` for all four adjacent neighbors: `(r+1, c)`, `(r-1, c)`, `(r, c+1)`, `(r, c-1)`.
4.  After iterating through all cells, `num_islands` will hold the total count.

This approach has a time complexity of O(rows * cols) because each cell is visited at most a constant number of times. The space complexity is O(rows * cols) in the worst case (e.g., a grid full of '1's) due to the recursion stack for DFS.

#### 3. Approach: Breadth-First Search (BFS)

BFS can also be used. When we find a '1', we increment the island count and then start a BFS traversal from that cell. The BFS will use a queue to explore all connected land cells level by level, marking them as visited.

1.  Initialize `num_islands = 0`.
2.  Get the dimensions of the grid: `rows = len(grid)`, `cols = len(grid[0])`.
3.  Iterate through each cell `(r, c)` in the grid:
    a. If `grid[r][c]` is a '1' (land):
        i. Increment `num_islands`.
        ii. Change `grid[r][c]` to '0' (mark as visited).
        iii. Initialize a queue and add `(r, c)` to it.
        iv. While the queue is not empty:
            - Dequeue a `(row, col)` cell.
            - For each of its four neighbors `(nr, nc)`:
                - If `(nr, nc)` is within bounds and `grid[nr][nc]` is '1' (land):
                    - Change `grid[nr][nc]` to '0' (mark as visited).
                    - Enqueue `(nr, nc)`.
4.  After iterating through all cells, `num_islands` will hold the total count.

This approach also has a time complexity of O(rows * cols) and a space complexity of O(rows * cols) in the worst case (for the queue).

### Python Code Solution

```python
from collections import deque

# --- DFS Approach ---
def num_islands_dfs(grid):
    """
    Counts the number of islands in a 2D grid using DFS.

    Args:
      grid: A list of lists of strings representing the grid.

    Returns:
      The number of islands.
    """
    if not grid or not grid[0]:
        return 0

    rows, cols = len(grid), len(grid[0])
    num_islands = 0

    def dfs(r, c):
        # Base cases for DFS
        if (r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0'):
            return

        # Mark as visited by changing '1' to '0'
        grid[r][c] = '0'

        # Explore neighbors
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                num_islands += 1
                dfs(r, c)
                
    return num_islands

# --- BFS Approach ---
def num_islands_bfs(grid):
    """
    Counts the number of islands in a 2D grid using BFS.

    Args:
      grid: A list of lists of strings representing the grid.

    Returns:
      The number of islands.
    """
    if not grid or not grid[0]:
        return 0

    rows, cols = len(grid), len(grid[0])
    num_islands = 0

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                num_islands += 1
                grid[r][c] = '0' # Mark as visited
                
                queue = deque([(r, c)])
                while queue:
                    row, col = queue.popleft()

                    # Explore neighbors
                    for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                        nr, nc = row + dr, col + dc
                        if (0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1'):
                            grid[nr][nc] = '0' # Mark as visited
                            queue.append((nr, nc))
                            
    return num_islands

```
