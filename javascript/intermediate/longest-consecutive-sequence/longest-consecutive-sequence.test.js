const longestConsecutive = require('./longest-consecutive-sequence');

describe('Longest Consecutive Sequence', () => {
  test('should return 4 for [100,4,200,1,3,2]', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
  });

  test('should return 9 for [0,3,7,2,5,8,4,6,0,1]', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
  });

  test('should return 0 for empty array', () => {
    expect(longestConsecutive([])).toBe(0);
  });

  test('should return 1 for single element', () => {
    expect(longestConsecutive([1])).toBe(1);
    expect(longestConsecutive([100])).toBe(1);
  });

  test('should handle no consecutive sequence', () => {
    expect(longestConsecutive([1, 3, 5, 7, 9])).toBe(1);
  });

  test('should handle all consecutive sequence', () => {
    expect(longestConsecutive([1, 2, 3, 4, 5])).toBe(5);
  });

  test('should handle duplicates', () => {
    expect(longestConsecutive([1, 2, 0, 1])).toBe(3);
    expect(longestConsecutive([1, 1, 1, 1])).toBe(1);
  });

  test('should handle negative numbers', () => {
    expect(longestConsecutive([-1, -2, -3, 0, 1])).toBe(5);
    expect(longestConsecutive([-5, -4, -3, -2, -1])).toBe(5);
  });

  test('should handle unordered array', () => {
    expect(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])).toBe(7);
  });

  test('should handle multiple sequences', () => {
    expect(longestConsecutive([1, 2, 3, 100, 101, 102, 103])).toBe(4);
  });

  test('should handle large numbers', () => {
    expect(longestConsecutive([1000000, 999999, 1000001])).toBe(3);
  });

  test('should handle zero in sequence', () => {
    expect(longestConsecutive([-1, 0, 1, 2])).toBe(4);
  });
});