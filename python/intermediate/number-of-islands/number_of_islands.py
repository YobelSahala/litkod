"""
Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally 
or vertically. You may assume all four edges of the grid are all surrounded by water.
"""


def numIslands(grid):
    """
    Count the number of islands in a grid.
    
    Args:
        grid: 2D list of characters ('1' for land, '0' for water)
        
    Returns:
        Number of islands
        
    Time Complexity: O(m * n) where m and n are grid dimensions
    Space Complexity: O(min(m, n)) for DFS recursion stack
    """
    if not grid or not grid[0]:
        return 0
    
    rows = len(grid)
    cols = len(grid[0])
    num_islands = 0
    
    def dfs(r, c):
        """Depth-first search to mark all connected land cells."""
        # Base cases for DFS
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return
        
        # Mark as visited by changing '1' to '0'
        grid[r][c] = '0'
        
        # Explore all four neighbors
        dfs(r + 1, c)  # down
        dfs(r - 1, c)  # up
        dfs(r, c + 1)  # right
        dfs(r, c - 1)  # left
    
    # Iterate through each cell in the grid
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                num_islands += 1
                dfs(r, c)  # Mark all connected land cells
    
    return num_islands