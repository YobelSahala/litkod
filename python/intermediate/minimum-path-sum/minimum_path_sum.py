"""
Solution for Minimum Path Sum problem.

Given a m x n grid filled with non-negative numbers, find a path from top left 
to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Time complexity: O(m * n)
Space complexity: O(1) - modifies input grid in place
"""

from typing import List


def min_path_sum(grid: List[List[int]]) -> int:
    """
    Find the minimum path sum from top-left to bottom-right.
    
    Args:
        grid: 2D grid of non-negative integers
        
    Returns:
        Minimum sum of path from top-left to bottom-right
        
    Example:
        >>> min_path_sum([[1,3,1],[1,5,1],[4,2,1]])
        7
        >>> min_path_sum([[1,2,3],[4,5,6]])
        12
    """
    if not grid or not grid[0]:
        return 0
    
    m = len(grid)
    n = len(grid[0])
    
    # Initialize first row (can only come from left)
    for c in range(1, n):
        grid[0][c] += grid[0][c - 1]
    
    # Initialize first column (can only come from above)
    for r in range(1, m):
        grid[r][0] += grid[r - 1][0]
    
    # Fill the rest of the grid
    for r in range(1, m):
        for c in range(1, n):
            grid[r][c] += min(grid[r - 1][c], grid[r][c - 1])
    
    return grid[m - 1][n - 1]


def min_path_sum_without_modifying(grid: List[List[int]]) -> int:
    """
    Find minimum path sum without modifying the input grid.
    
    Args:
        grid: 2D grid of non-negative integers
        
    Returns:
        Minimum sum of path from top-left to bottom-right
    """
    if not grid or not grid[0]:
        return 0
    
    m, n = len(grid), len(grid[0])
    
    # Create a copy to avoid modifying the original grid
    dp = [[0] * n for _ in range(m)]
    dp[0][0] = grid[0][0]
    
    # Initialize first row
    for c in range(1, n):
        dp[0][c] = dp[0][c - 1] + grid[0][c]
    
    # Initialize first column
    for r in range(1, m):
        dp[r][0] = dp[r - 1][0] + grid[r][0]
    
    # Fill the rest of the dp table
    for r in range(1, m):
        for c in range(1, n):
            dp[r][c] = grid[r][c] + min(dp[r - 1][c], dp[r][c - 1])
    
    return dp[m - 1][n - 1]


def min_path_sum_optimized(grid: List[List[int]]) -> int:
    """
    Space-optimized version using only O(n) space.
    
    Args:
        grid: 2D grid of non-negative integers
        
    Returns:
        Minimum sum of path from top-left to bottom-right
    """
    if not grid or not grid[0]:
        return 0
    
    m, n = len(grid), len(grid[0])
    
    # Use a 1D array to store the minimum path sum for each column
    dp = [float('inf')] * n
    dp[0] = 0
    
    for r in range(m):
        dp[0] += grid[r][0]  # Can only come from above for first column
        for c in range(1, n):
            dp[c] = grid[r][c] + min(dp[c], dp[c - 1])
    
    return dp[n - 1]