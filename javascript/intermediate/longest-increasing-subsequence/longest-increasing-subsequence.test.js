const lengthOfLIS = require('./longest-increasing-subsequence');

describe('Longest Increasing Subsequence', () => {
  test('should return 4 for [10,9,2,5,3,7,101,18]', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
  });

  test('should return 4 for [0,1,0,3,2,3]', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
  });

  test('should return 1 for [7,7,7,7,7,7,7]', () => {
    expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1);
  });

  test('should handle single element', () => {
    expect(lengthOfLIS([1])).toBe(1);
  });

  test('should handle increasing array', () => {
    expect(lengthOfLIS([1, 2, 3, 4, 5])).toBe(5);
  });

  test('should handle decreasing array', () => {
    expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1);
  });

  test('should handle two elements', () => {
    expect(lengthOfLIS([1, 2])).toBe(2);
    expect(lengthOfLIS([2, 1])).toBe(1);
  });

  test('should handle arrays with zeros', () => {
    expect(lengthOfLIS([0, 1, 2, 3])).toBe(4);
    expect(lengthOfLIS([-1, 0, 1, 2])).toBe(4);
  });

  test('should handle negative numbers', () => {
    expect(lengthOfLIS([-10, -9, -2, -5, -3, -7, -101, -18])).toBe(4);
  });

  test('should handle mixed positive and negative', () => {
    expect(lengthOfLIS([-1, 3, -3, 0, 5, 3, 5, 9])).toBe(5);
  });

  test('should handle alternating pattern', () => {
    expect(lengthOfLIS([1, 3, 2, 4, 3, 5])).toBe(4);
  });

  test('should handle larger arrays', () => {
    expect(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])).toBe(6);
  });

  test('should handle edge cases', () => {
    expect(lengthOfLIS([2, 2])).toBe(1);
    expect(lengthOfLIS([1, 2, 2, 3])).toBe(3);
  });
});