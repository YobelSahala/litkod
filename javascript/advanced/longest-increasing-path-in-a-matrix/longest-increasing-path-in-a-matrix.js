/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const memo = Array(rows).fill(0).map(() => Array(cols).fill(0));
    let maxPath = 0;

    // Define possible moves (down, up, right, left)
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    function dfs(r, c) {
        // If already computed, return memoized value
        if (memo[r][c] !== 0) {
            return memo[r][c];
        }

        // Current cell itself contributes 1 to the path
        let currentMaxLen = 1;

        // Explore neighbors
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // Check bounds and strictly increasing condition
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && matrix[nr][nc] > matrix[r][c]) {
                currentMaxLen = Math.max(currentMaxLen, 1 + dfs(nr, nc));
            }
        }

        // Memoize the result
        memo[r][c] = currentMaxLen;
        return currentMaxLen;
    }

    // Iterate through each cell and start DFS from it
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            maxPath = Math.max(maxPath, dfs(r, c));
        }
    }

    return maxPath;
};

module.exports = longestIncreasingPath;