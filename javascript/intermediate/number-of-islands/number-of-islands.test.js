const numIslands = require('./number-of-islands');

describe('Number of Islands', () => {
  test('should return 1 for single island', () => {
    const grid = [
      ["1","1","1","1","0"],
      ["1","1","0","1","0"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"]
    ];
    expect(numIslands(grid)).toBe(1);
  });

  test('should return 3 for three separate islands', () => {
    const grid = [
      ["1","1","0","0","0"],
      ["1","1","0","0","0"],
      ["0","0","1","0","0"],
      ["0","0","0","1","1"]
    ];
    expect(numIslands(grid)).toBe(3);
  });

  test('should return 0 for all water', () => {
    const grid = [
      ["0","0","0"],
      ["0","0","0"],
      ["0","0","0"]
    ];
    expect(numIslands(grid)).toBe(0);
  });

  test('should return 1 for all land', () => {
    const grid = [
      ["1","1","1"],
      ["1","1","1"],
      ["1","1","1"]
    ];
    expect(numIslands(grid)).toBe(1);
  });

  test('should handle empty grid', () => {
    expect(numIslands([])).toBe(0);
  });

  test('should handle single cell grids', () => {
    expect(numIslands([["1"]])).toBe(1);
    expect(numIslands([["0"]])).toBe(0);
  });

  test('should handle diagonal islands (not connected)', () => {
    const grid = [
      ["1","0","1"],
      ["0","1","0"],
      ["1","0","1"]
    ];
    expect(numIslands(grid)).toBe(5);
  });

  test('should handle L-shaped island', () => {
    const grid = [
      ["1","1","0"],
      ["1","0","0"],
      ["1","1","1"]
    ];
    expect(numIslands(grid)).toBe(1);
  });

  test('should handle multiple disconnected islands', () => {
    const grid = [
      ["1","0","1","0","1"],
      ["0","0","0","0","0"],
      ["1","0","1","0","1"]
    ];
    expect(numIslands(grid)).toBe(6);
  });

  test('should handle complex island shapes', () => {
    const grid = [
      ["1","1","1","0","0"],
      ["0","1","0","0","1"],
      ["0","0","1","1","1"],
      ["0","0","0","1","0"]
    ];
    expect(numIslands(grid)).toBe(2);
  });

  test('should handle rectangular grids', () => {
    const grid = [
      ["1","0","1","0","1","0","1"]
    ];
    expect(numIslands(grid)).toBe(4);
  });

  test('should handle vertical strips', () => {
    const grid = [
      ["1"],
      ["0"],
      ["1"],
      ["0"],
      ["1"]
    ];
    expect(numIslands(grid)).toBe(3);
  });
});