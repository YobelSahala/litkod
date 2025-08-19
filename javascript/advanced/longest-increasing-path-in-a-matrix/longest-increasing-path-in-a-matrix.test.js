const longestIncreasingPath = require('./longest-increasing-path-in-a-matrix');

describe('Longest Increasing Path in a Matrix', () => {
    test('should return 4 for [[9,9,4],[6,6,8],[2,1,1]]', () => {
        const matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]];
        expect(longestIncreasingPath(matrix)).toBe(4);
        // The longest increasing path is [1, 2, 6, 9]
    });

    test('should return 4 for [[3,4,5],[3,2,6],[2,2,1]]', () => {
        const matrix = [[3, 4, 5], [3, 2, 6], [2, 2, 1]];
        expect(longestIncreasingPath(matrix)).toBe(4);
        // The longest increasing path is [3, 4, 5, 6]
    });

    test('should return 1 for [[1]]', () => {
        const matrix = [[1]];
        expect(longestIncreasingPath(matrix)).toBe(1);
    });

    test('should handle empty matrix', () => {
        expect(longestIncreasingPath([])).toBe(0);
        expect(longestIncreasingPath(null)).toBe(0);
        expect(longestIncreasingPath(undefined)).toBe(0);
    });

    test('should handle matrix with all same values', () => {
        const matrix = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
        expect(longestIncreasingPath(matrix)).toBe(1);
    });

    test('should handle single row matrix', () => {
        const matrix = [[1, 2, 3, 4, 5]];
        expect(longestIncreasingPath(matrix)).toBe(5);
    });

    test('should handle single column matrix', () => {
        const matrix = [[1], [2], [3], [4], [5]];
        expect(longestIncreasingPath(matrix)).toBe(5);
    });

    test('should handle decreasing values', () => {
        const matrix = [[5, 4, 3], [2, 1, 0]];
        expect(longestIncreasingPath(matrix)).toBe(4);
        // Path: [0, 1, 2, 5] or similar increasing path
    });

    test('should handle complex matrix', () => {
        const matrix = [[1, 17, 5], [10, 11, 6], [4, 2, 3]];
        expect(longestIncreasingPath(matrix)).toBe(5);
        // Longest path: [1, 2, 3, 6, 17] or [1, 2, 3, 5, 6] + 11 or similar
    });

    test('should handle large values', () => {
        const matrix = [[1000000000, 999999999], [999999998, 999999997]];
        expect(longestIncreasingPath(matrix)).toBe(3);
        // Path: [999999997, 999999998, 1000000000]
    });
});