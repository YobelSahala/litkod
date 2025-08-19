const productExceptSelf = require('./product-of-array-except-self');

describe('Product of Array Except Self', () => {
  test('should return [24,12,8,6] for [1,2,3,4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  test('should return [0,0,9,0,0] for [-1,1,0,-3,3]', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  test('should handle array with two elements', () => {
    expect(productExceptSelf([1, 2])).toEqual([2, 1]);
    expect(productExceptSelf([3, 4])).toEqual([4, 3]);
  });

  test('should handle array with zeros', () => {
    expect(productExceptSelf([0, 1])).toEqual([1, 0]);
    expect(productExceptSelf([1, 0])).toEqual([0, 1]);
    expect(productExceptSelf([0, 0])).toEqual([0, 0]);
  });

  test('should handle negative numbers', () => {
    expect(productExceptSelf([-1, 2, -3])).toEqual([-6, 3, -2]);
    expect(productExceptSelf([-2, -1, -3])).toEqual([3, 6, 2]);
  });

  test('should handle array with ones', () => {
    expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });

  test('should handle mixed positive and negative with zero', () => {
    expect(productExceptSelf([2, -1, 0, 3])).toEqual([0, 0, -6, 0]);
  });

  test('should handle larger arrays', () => {
    const result = productExceptSelf([1, 2, 3, 4, 5]);
    expect(result).toEqual([120, 60, 40, 30, 24]);
  });

  test('should handle array with multiple zeros', () => {
    expect(productExceptSelf([0, 0, 2, 1])).toEqual([0, 0, 0, 0]);
  });

  test('should handle edge case with single zero', () => {
    expect(productExceptSelf([1, 2, 0, 4, 5])).toEqual([0, 0, 40, 0, 0]);
  });
});