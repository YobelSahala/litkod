const twoSum = require('./two-sum');

describe('Two Sum', () => {
  test('should return indices for first example', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('should return indices for second example', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('should return indices for third example', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test('should handle negative numbers', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test('should handle large numbers', () => {
    expect(twoSum([1000000000, 2000000000, -1000000000], 1000000000)).toEqual([1, 2]);
  });

  test('should handle two elements array', () => {
    expect(twoSum([1, 2], 3)).toEqual([0, 1]);
  });

  test('should find solution at different positions', () => {
    expect(twoSum([1, 5, 3, 7, 2], 9)).toEqual([3, 4]);
  });

  test('should handle zero values', () => {
    expect(twoSum([0, 0], 0)).toEqual([0, 1]);
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });
});