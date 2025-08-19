const maxSubArray = require('./maximum-subarray');

describe('Maximum Subarray', () => {
  test('should return 6 for [-2,1,-3,4,-1,2,1,-5,4]', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('should return 1 for [1]', () => {
    expect(maxSubArray([1])).toBe(1);
  });

  test('should return 23 for [5,4,-1,7,8]', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });

  test('should handle all negative numbers', () => {
    expect(maxSubArray([-2, -3, -1, -5])).toBe(-1);
    expect(maxSubArray([-1])).toBe(-1);
  });

  test('should handle all positive numbers', () => {
    expect(maxSubArray([1, 2, 3, 4])).toBe(10);
    expect(maxSubArray([5, 7, 3])).toBe(15);
  });

  test('should handle mixed positive and negative numbers', () => {
    expect(maxSubArray([1, -3, 2, 1, -1])).toBe(3);
    expect(maxSubArray([-1, 2, 3, -4, 5])).toBe(6);
  });

  test('should handle array with zeros', () => {
    expect(maxSubArray([0, 0, 0])).toBe(0);
    expect(maxSubArray([-1, 0, -1])).toBe(0);
    expect(maxSubArray([0, 2, -1, 0])).toBe(2);
  });

  test('should handle two element arrays', () => {
    expect(maxSubArray([1, 2])).toBe(3);
    expect(maxSubArray([-1, -2])).toBe(-1);
    expect(maxSubArray([5, -3])).toBe(5);
  });

  test('should handle larger arrays', () => {
    expect(maxSubArray([8, -19, 5, -4, 20])).toBe(21);
    expect(maxSubArray([1, 2, -5, 4, -2, 6, -1])).toBe(8);
  });

  test('should handle edge constraint values', () => {
    expect(maxSubArray([10000, -10000, 10000])).toBe(10000);
    expect(maxSubArray([-10000, -10000])).toBe(-10000);
  });
});