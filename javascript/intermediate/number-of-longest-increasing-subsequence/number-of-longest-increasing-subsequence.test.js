const findNumberOfLIS = require('./number-of-longest-increasing-subsequence');

describe('Number of Longest Increasing Subsequence', () => {
  test('should return 2 for [1,3,5,4,7]', () => {
    expect(findNumberOfLIS([1, 3, 5, 4, 7])).toBe(2);
  });

  test('should return 5 for [2,2,2,2,2]', () => {
    expect(findNumberOfLIS([2, 2, 2, 2, 2])).toBe(5);
  });

  test('should handle single element', () => {
    expect(findNumberOfLIS([1])).toBe(1);
  });

  test('should handle increasing array', () => {
    expect(findNumberOfLIS([1, 2, 3, 4])).toBe(1);
  });

  test('should handle decreasing array', () => {
    expect(findNumberOfLIS([4, 3, 2, 1])).toBe(4);
  });

  test('should handle two elements', () => {
    expect(findNumberOfLIS([1, 2])).toBe(1);
    expect(findNumberOfLIS([2, 1])).toBe(2);
  });

  test('should handle arrays with multiple LIS of same length', () => {
    expect(findNumberOfLIS([1, 2, 4, 3, 5])).toBe(2);
  });

  test('should handle complex case', () => {
    expect(findNumberOfLIS([1, 3, 5, 4, 7, 2, 6])).toBe(4);
  });

  test('should handle all same values', () => {
    expect(findNumberOfLIS([5, 5, 5])).toBe(3);
  });

  test('should handle alternating pattern', () => {
    expect(findNumberOfLIS([1, 3, 2, 4])).toBe(2);
  });

  test('should handle negative numbers', () => {
    expect(findNumberOfLIS([-1, 0, 1, 2])).toBe(1);
    expect(findNumberOfLIS([0, -1, 1, 2])).toBe(2);
  });

  test('should handle empty array', () => {
    expect(findNumberOfLIS([])).toBe(0);
  });

  test('should handle larger arrays', () => {
    expect(findNumberOfLIS([1, 2, 3, 1, 2, 3, 1, 2, 3])).toBe(10);
  });
});