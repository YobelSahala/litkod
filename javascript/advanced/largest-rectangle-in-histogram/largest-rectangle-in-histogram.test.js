const largestRectangleArea = require('./largest-rectangle-in-histogram');

describe('Largest Rectangle in Histogram', () => {
  test('should return 10 for heights=[2,1,5,6,2,3]', () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
  });

  test('should return 4 for heights=[2,4]', () => {
    expect(largestRectangleArea([2, 4])).toBe(4);
  });

  test('should handle single element', () => {
    expect(largestRectangleArea([5])).toBe(5);
  });

  test('should handle empty array', () => {
    expect(largestRectangleArea([])).toBe(0);
  });

  test('should handle all same heights', () => {
    expect(largestRectangleArea([3, 3, 3, 3])).toBe(12);
  });

  test('should handle increasing heights', () => {
    expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
  });

  test('should handle decreasing heights', () => {
    expect(largestRectangleArea([5, 4, 3, 2, 1])).toBe(9);
  });

  test('should handle zeros', () => {
    expect(largestRectangleArea([0, 1, 0])).toBe(1);
    expect(largestRectangleArea([1, 0, 1])).toBe(1);
  });

  test('should handle large single bar', () => {
    expect(largestRectangleArea([1, 1, 100, 1, 1])).toBe(100);
  });

  test('should handle two equal peaks', () => {
    expect(largestRectangleArea([6, 2, 5, 4, 5, 1, 6])).toBe(12);
  });

  test('should handle complex histogram', () => {
    expect(largestRectangleArea([1, 2, 2, 1, 3, 3, 3, 2])).toBe(9);
  });
});