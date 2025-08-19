/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Initialize first row (can only come from left)
    for (let c = 1; c < n; c++) {
        grid[0][c] += grid[0][c - 1];
    }

    // Initialize first column (can only come from above)
    for (let r = 1; r < m; r++) {
        grid[r][0] += grid[r - 1][0];
    }

    // Fill the rest of the grid
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1]);
        }
    }

    return grid[m - 1][n - 1];
};

module.exports = minPathSum;