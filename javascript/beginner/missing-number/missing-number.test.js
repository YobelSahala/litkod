const missingNumber = require('./missing-number');

describe('Missing Number', () => {
  test('should return 2 for [3,0,1]', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test('should return 2 for [0,1]', () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  test('should return 8 for [9,6,4,2,3,5,7,0,1]', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });

  test('should handle single element array [0]', () => {
    expect(missingNumber([0])).toBe(1);
  });

  test('should handle single element array [1]', () => {
    expect(missingNumber([1])).toBe(0);
  });

  test('should handle when missing number is 0', () => {
    expect(missingNumber([1, 2, 3])).toBe(0);
  });

  test('should handle when missing number is the largest', () => {
    expect(missingNumber([0, 1, 2, 3, 4])).toBe(5);
  });

  test('should handle larger arrays', () => {
    // Array [0,1,2,3,4,6,7,8,9] missing 5
    expect(missingNumber([0, 1, 2, 3, 4, 6, 7, 8, 9])).toBe(5);
  });

  test('should handle arrays in different orders', () => {
    expect(missingNumber([2, 0, 3])).toBe(1);
    expect(missingNumber([4, 3, 2, 1])).toBe(0);
    expect(missingNumber([1, 0, 3, 4])).toBe(2);
  });

  test('should handle edge case with n=1', () => {
    expect(missingNumber([0])).toBe(1);
    expect(missingNumber([1])).toBe(0);
  });

  test('should handle consecutive sequence missing middle element', () => {
    expect(missingNumber([0, 1, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(2);
  });

  test('should handle large range', () => {
    const arr = [];
    for (let i = 0; i <= 99; i++) {
      if (i !== 50) arr.push(i);
    }
    expect(missingNumber(arr)).toBe(50);
  });
});