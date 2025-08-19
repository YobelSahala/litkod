const rob = require('./house-robber');

describe('House Robber', () => {
  test('should return 4 for [1,2,3,1]', () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  test('should return 12 for [2,7,9,3,1]', () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });

  test('should handle single house', () => {
    expect(rob([5])).toBe(5);
    expect(rob([0])).toBe(0);
  });

  test('should handle two houses', () => {
    expect(rob([1, 2])).toBe(2);
    expect(rob([2, 1])).toBe(2);
    expect(rob([5, 1])).toBe(5);
  });

  test('should handle all same values', () => {
    expect(rob([3, 3, 3, 3])).toBe(6);
  });

  test('should handle increasing values', () => {
    expect(rob([1, 2, 3, 4, 5])).toBe(9); // 1 + 3 + 5
  });

  test('should handle decreasing values', () => {
    expect(rob([5, 4, 3, 2, 1])).toBe(9); // 5 + 3 + 1
  });

  test('should handle alternating pattern', () => {
    expect(rob([5, 1, 5, 1])).toBe(10); // 5 + 5
    expect(rob([1, 5, 1, 5])).toBe(10); // 5 + 5
  });

  test('should handle zeros', () => {
    expect(rob([0, 0, 0])).toBe(0);
    expect(rob([5, 0, 5])).toBe(10);
    expect(rob([0, 5, 0])).toBe(5);
  });

  test('should handle larger arrays', () => {
    expect(rob([2, 1, 1, 9, 9, 1, 1, 2])).toBe(14); // Optimal: rob houses 0,3,5,7 → 2+9+1+2=14
  });

  test('should handle edge cases', () => {
    expect(rob([100])).toBe(100);
    expect(rob([100, 1, 1, 100])).toBe(200);
  });
});