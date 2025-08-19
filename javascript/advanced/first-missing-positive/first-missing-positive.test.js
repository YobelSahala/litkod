const firstMissingPositive = require('./first-missing-positive');

describe('First Missing Positive', () => {
  test('should return 3 for [1,2,0]', () => {
    expect(firstMissingPositive([1, 2, 0])).toBe(3);
  });

  test('should return 2 for [3,4,-1,1]', () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  });

  test('should return 1 for [7,8,9,11,12]', () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
  });

  test('should handle single element arrays', () => {
    expect(firstMissingPositive([1])).toBe(2);
    expect(firstMissingPositive([0])).toBe(1);
    expect(firstMissingPositive([-1])).toBe(1);
  });

  test('should handle empty array', () => {
    expect(firstMissingPositive([])).toBe(1);
  });

  test('should handle array with only negative numbers', () => {
    expect(firstMissingPositive([-1, -2, -3])).toBe(1);
  });

  test('should handle consecutive positive integers', () => {
    expect(firstMissingPositive([1, 2, 3, 4, 5])).toBe(6);
  });

  test('should handle duplicates', () => {
    expect(firstMissingPositive([1, 1, 1, 1])).toBe(2);
    expect(firstMissingPositive([2, 2, 2, 2])).toBe(1);
  });

  test('should handle mixed positive, negative, and zero', () => {
    expect(firstMissingPositive([0, 1, 2, 3])).toBe(4);
    expect(firstMissingPositive([-1, 0, 1, 2])).toBe(3);
  });

  test('should handle larger arrays', () => {
    expect(firstMissingPositive([1, 1000000])).toBe(2);
  });

  test('should handle arrays with gaps', () => {
    expect(firstMissingPositive([1, 3, 5, 7])).toBe(2);
    expect(firstMissingPositive([2, 3, 4, 5])).toBe(1);
  });
});