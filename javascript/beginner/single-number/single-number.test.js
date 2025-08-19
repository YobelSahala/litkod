const singleNumber = require('./single-number');

describe('Single Number', () => {
  test('should return 1 for [2,2,1]', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  test('should return 4 for [4,1,2,1,2]', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  test('should handle single element array', () => {
    expect(singleNumber([1])).toBe(1);
    expect(singleNumber([42])).toBe(42);
  });

  test('should handle negative numbers', () => {
    expect(singleNumber([-1, -1, -2])).toBe(-2);
    expect(singleNumber([3, -3, 5, 3, -3])).toBe(5);
  });

  test('should handle zero', () => {
    expect(singleNumber([0, 1, 1])).toBe(0);
    expect(singleNumber([0, 0, 1])).toBe(1);
  });

  test('should handle larger arrays', () => {
    expect(singleNumber([1, 2, 3, 4, 5, 1, 2, 3, 4])).toBe(5);
    expect(singleNumber([7, 7, 8, 8, 9, 9, 10])).toBe(10);
  });

  test('should work with different positions of single number', () => {
    expect(singleNumber([1, 2, 2])).toBe(1); // at start
    expect(singleNumber([2, 1, 2])).toBe(1); // in middle
    expect(singleNumber([2, 2, 1])).toBe(1); // at end
  });

  test('should handle large numbers', () => {
    expect(singleNumber([30000, 30000, 1])).toBe(1);
    expect(singleNumber([1, 30000, 30000])).toBe(1);
  });

  test('should handle mixed positive and negative', () => {
    expect(singleNumber([-1, 1, -1])).toBe(1);
    expect(singleNumber([1, -1, 1])).toBe(-1);
  });
});