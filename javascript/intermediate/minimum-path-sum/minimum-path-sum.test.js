const minPathSum = require('./minimum-path-sum');

describe('Minimum Path Sum', () => {
  test('should return 7 for [[1,3,1],[1,5,1],[4,2,1]]', () => {
    const grid = [[1,3,1],[1,5,1],[4,2,1]];
    expect(minPathSum(grid)).toBe(7);
  });

  test('should return 12 for [[1,2,3],[4,5,6]]', () => {
    const grid = [[1,2,3],[4,5,6]];
    expect(minPathSum(grid)).toBe(12);
  });

  test('should handle single cell', () => {
    expect(minPathSum([[5]])).toBe(5);
  });

  test('should handle single row', () => {
    expect(minPathSum([[1,2,3,4]])).toBe(10);
  });

  test('should handle single column', () => {
    expect(minPathSum([[1],[2],[3],[4]])).toBe(10);
  });

  test('should handle 2x2 grid', () => {
    expect(minPathSum([[1,2],[1,1]])).toBe(3);
  });

  test('should handle all zeros', () => {
    expect(minPathSum([[0,0,0],[0,0,0]])).toBe(0);
  });

  test('should handle larger grids', () => {
    const grid = [
      [1,4,8,6,2,2,1,7],
      [4,7,3,1,4,5,5,1],
      [8,8,2,1,1,8,0,1],
      [8,9,2,9,8,0,8,9],
      [5,7,5,5,1,9,5,0],
      [7,2,3,7,9,7,0,8]
    ];
    // Path should find optimal route
    expect(minPathSum(grid)).toBe(44);
  });

  test('should prefer paths with smaller values', () => {
    const grid = [[1,100],[1,1]];
    expect(minPathSum(grid)).toBe(3); // 1 -> 1 -> 1
  });
});