const containsDuplicate = require('./contains-duplicate');

describe('Contains Duplicate', () => {
  test('should return true for [1,2,3,1]', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test('should return false for [1,2,3,4]', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test('should return true for [1,1,1,3,3,4,3,2,4,2]', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  test('should return false for single element array', () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  test('should return true for duplicate consecutive elements', () => {
    expect(containsDuplicate([1, 1])).toBe(true);
  });

  test('should return true for duplicate non-consecutive elements', () => {
    expect(containsDuplicate([1, 2, 1])).toBe(true);
  });

  test('should handle negative numbers', () => {
    expect(containsDuplicate([-1, -2, -1])).toBe(true);
    expect(containsDuplicate([-1, -2, -3])).toBe(false);
  });

  test('should handle zeros', () => {
    expect(containsDuplicate([0, 0])).toBe(true);
    expect(containsDuplicate([0, 1, 2])).toBe(false);
  });

  test('should handle large arrays', () => {
    const uniqueArray = Array.from({length: 1000}, (_, i) => i);
    expect(containsDuplicate(uniqueArray)).toBe(false);
    
    const arrayWithDuplicate = [...uniqueArray, 500];
    expect(containsDuplicate(arrayWithDuplicate)).toBe(true);
  });

  test('should handle edge values', () => {
    expect(containsDuplicate([1000000000, -1000000000, 1000000000])).toBe(true);
    expect(containsDuplicate([1000000000, -1000000000, 0])).toBe(false);
  });
});