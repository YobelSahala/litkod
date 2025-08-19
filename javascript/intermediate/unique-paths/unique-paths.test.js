const uniquePaths = require('./unique-paths');

describe('Unique Paths', () => {
  test('should return 28 for m=3, n=7', () => {
    expect(uniquePaths(3, 7)).toBe(28);
  });

  test('should return 3 for m=3, n=2', () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });

  test('should handle 1x1 grid', () => {
    expect(uniquePaths(1, 1)).toBe(1);
  });

  test('should handle 1xN grids', () => {
    expect(uniquePaths(1, 5)).toBe(1);
    expect(uniquePaths(1, 10)).toBe(1);
  });

  test('should handle Nx1 grids', () => {
    expect(uniquePaths(5, 1)).toBe(1);
    expect(uniquePaths(10, 1)).toBe(1);
  });

  test('should handle 2x2 grid', () => {
    expect(uniquePaths(2, 2)).toBe(2);
  });

  test('should handle 2xN grids', () => {
    expect(uniquePaths(2, 3)).toBe(3);
    expect(uniquePaths(2, 4)).toBe(4);
    expect(uniquePaths(2, 5)).toBe(5);
  });

  test('should handle Nx2 grids', () => {
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths(4, 2)).toBe(4);
    expect(uniquePaths(5, 2)).toBe(5);
  });

  test('should handle square grids', () => {
    expect(uniquePaths(3, 3)).toBe(6);
    expect(uniquePaths(4, 4)).toBe(20);
    expect(uniquePaths(5, 5)).toBe(70);
  });

  test('should handle larger grids', () => {
    expect(uniquePaths(10, 10)).toBe(48620);
    expect(uniquePaths(23, 12)).toBe(193536720);
  });

  test('should be symmetric (m,n) = (n,m)', () => {
    expect(uniquePaths(3, 7)).toBe(uniquePaths(7, 3));
    expect(uniquePaths(4, 6)).toBe(uniquePaths(6, 4));
    expect(uniquePaths(5, 8)).toBe(uniquePaths(8, 5));
  });
});