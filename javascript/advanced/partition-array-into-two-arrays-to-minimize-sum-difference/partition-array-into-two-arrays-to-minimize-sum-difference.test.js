const minimumDifference = require('./partition-array-into-two-arrays-to-minimize-sum-difference');

describe('Partition Array Into Two Arrays to Minimize Sum Difference', () => {
  test('should return 2 for [3,9,7,3]', () => {
    expect(minimumDifference([3,9,7,3])).toBe(2);
  });

  test('should return 72 for [-36,36]', () => {
    expect(minimumDifference([-36,36])).toBe(72);
  });

  test('should return 0 for [2,-1,0,4,-2,-9]', () => {
    expect(minimumDifference([2,-1,0,4,-2,-9])).toBe(0);
  });

  test('should handle small arrays', () => {
    expect(minimumDifference([1,1])).toBe(0);
    expect(minimumDifference([1,2])).toBe(1);
  });

  test('should handle negative numbers', () => {
    expect(minimumDifference([-1,-1,-1,-1])).toBe(0);
  });

  test('should handle mixed positive and negative', () => {
    expect(minimumDifference([1,-1,1,-1])).toBe(0);
  });

  test('should handle larger arrays', () => {
    expect(minimumDifference([1,2,3,4,5,6])).toBe(1);
  });
});