const maximalRectangle = require('./maximal-rectangle');

describe('Maximal Rectangle', () => {
  test('should return 6 for standard example', () => {
    const matrix = [
      ["1","0","1","0","0"],
      ["1","0","1","1","1"],
      ["1","1","1","1","1"],
      ["1","0","0","1","0"]
    ];
    expect(maximalRectangle(matrix)).toBe(6);
  });

  test('should return 0 for all zeros', () => {
    const matrix = [
      ["0","0"],
      ["0","0"]
    ];
    expect(maximalRectangle(matrix)).toBe(0);
  });

  test('should return 1 for single 1', () => {
    const matrix = [["1"]];
    expect(maximalRectangle(matrix)).toBe(1);
  });

  test('should return 0 for single 0', () => {
    const matrix = [["0"]];
    expect(maximalRectangle(matrix)).toBe(0);
  });

  test('should handle single row', () => {
    const matrix = [["1","1","0","1"]];
    expect(maximalRectangle(matrix)).toBe(2);
  });

  test('should handle single column', () => {
    const matrix = [["1"],["1"],["0"],["1"]];
    expect(maximalRectangle(matrix)).toBe(2);
  });

  test('should handle empty matrix', () => {
    expect(maximalRectangle([])).toBe(0);
  });

  test('should handle all ones', () => {
    const matrix = [
      ["1","1"],
      ["1","1"]
    ];
    expect(maximalRectangle(matrix)).toBe(4);
  });
});