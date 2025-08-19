const trap = require('./trapping-rain-water');

describe('Trapping Rain Water', () => {
  test('should return 6 for [0,1,0,2,1,0,1,3,2,1,2,1]', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });

  test('should return 9 for [4,2,0,3,2,5]', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toBe(9);
  });

  test('should return 0 for empty array', () => {
    expect(trap([])).toBe(0);
  });

  test('should return 0 for single element', () => {
    expect(trap([1])).toBe(0);
  });

  test('should return 0 for two elements', () => {
    expect(trap([1, 2])).toBe(0);
    expect(trap([2, 1])).toBe(0);
  });

  test('should handle no trapping possible', () => {
    expect(trap([1, 2, 3, 4, 5])).toBe(0);
    expect(trap([5, 4, 3, 2, 1])).toBe(0);
  });

  test('should handle simple valley', () => {
    expect(trap([3, 0, 2])).toBe(2);
    expect(trap([2, 0, 3])).toBe(2);
  });

  test('should handle multiple valleys', () => {
    expect(trap([3, 0, 2, 0, 4])).toBe(7);
  });

  test('should handle all zeros', () => {
    expect(trap([0, 0, 0])).toBe(0);
  });

  test('should handle flat tops', () => {
    expect(trap([3, 3, 1, 3, 3])).toBe(2);
  });

  test('should handle large heights', () => {
    expect(trap([100, 0, 100])).toBe(100);
  });
});