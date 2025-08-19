const threeSum = require('./3sum');

describe('3Sum', () => {
  test('should return [[-1,-1,2],[-1,0,1]] for [-1,0,1,2,-1,-4]', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([[-1, -1, 2], [-1, 0, 1]]));
  });

  test('should return [] for [0,1,1]', () => {
    expect(threeSum([0, 1, 1])).toEqual([]);
  });

  test('should return [[0,0,0]] for [0,0,0]', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  test('should handle minimum length array', () => {
    expect(threeSum([1, 2, -3])).toEqual([[-3, 1, 2]]);
  });

  test('should handle array with no valid triplets', () => {
    expect(threeSum([1, 2, 3])).toEqual([]);
  });

  test('should handle array with all positive numbers', () => {
    expect(threeSum([1, 2, 3, 4, 5])).toEqual([]);
  });

  test('should handle array with all negative numbers', () => {
    expect(threeSum([-1, -2, -3, -4, -5])).toEqual([]);
  });

  test('should handle array with multiple zeros', () => {
    expect(threeSum([0, 0, 0, 0])).toEqual([[0, 0, 0]]);
  });

  test('should avoid duplicate triplets', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4, -1, 0, 1]);
    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([[-1, -1, 2], [-1, 0, 1]]));
  });

  test('should handle larger arrays', () => {
    const result = threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
    expect(result.length).toBeGreaterThan(0);
    // Verify each triplet sums to 0
    result.forEach(triplet => {
      expect(triplet[0] + triplet[1] + triplet[2]).toBe(0);
    });
  });

  test('should handle edge case with exact three elements', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    expect(threeSum([1, -1, 0])).toEqual([[-1, 0, 1]]);
  });

  test('should return sorted triplets', () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    result.forEach(triplet => {
      expect(triplet[0]).toBeLessThanOrEqual(triplet[1]);
      expect(triplet[1]).toBeLessThanOrEqual(triplet[2]);
    });
  });
});