/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) {
        return 0;
    }

    const rows = grid.length;
    const cols = grid[0].length;
    let numIslands = 0;

    function dfs(r, c) {
        // Base cases for DFS
        if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
            return;
        }

        // Mark as visited by changing '1' to '0'
        grid[r][c] = '0';

        // Explore neighbors
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1') {
                numIslands++;
                dfs(r, c);
            }
        }
    }

    return numIslands;
};

module.exports = numIslands;