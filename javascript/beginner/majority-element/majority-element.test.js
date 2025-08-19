const majorityElement = require('./majority-element');

describe('Majority Element', () => {
  test('should return 3 for [3,2,3]', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  test('should return 2 for [2,2,1,1,1,2,2]', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  test('should handle single element array', () => {
    expect(majorityElement([1])).toBe(1);
  });

  test('should handle two elements with majority', () => {
    expect(majorityElement([1, 1])).toBe(1);
  });

  test('should handle array where majority element is at the end', () => {
    expect(majorityElement([1, 2, 3, 3, 3])).toBe(3);
  });

  test('should handle array where majority element is at the beginning', () => {
    expect(majorityElement([5, 5, 5, 1, 2])).toBe(5);
  });

  test('should handle negative numbers', () => {
    expect(majorityElement([-1, -1, -1, 1, 2])).toBe(-1);
  });

  test('should handle mixed positive and negative', () => {
    expect(majorityElement([1, -1, 1, 1, -1])).toBe(1);
  });

  test('should handle large majority', () => {
    expect(majorityElement([1, 1, 1, 1, 1, 2, 3])).toBe(1);
  });

  test('should handle alternating pattern with clear majority', () => {
    expect(majorityElement([1, 2, 1, 2, 1, 2, 1])).toBe(1);
  });

  test('should handle zero as majority element', () => {
    expect(majorityElement([0, 0, 1, 1, 0])).toBe(0);
  });

  test('should handle larger arrays', () => {
    const arr = Array(100).fill(7).concat([1, 2, 3]);
    expect(majorityElement(arr)).toBe(7);
  });
});