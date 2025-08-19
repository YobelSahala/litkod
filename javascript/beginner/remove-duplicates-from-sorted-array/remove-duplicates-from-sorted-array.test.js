const removeDuplicates = require('./remove-duplicates-from-sorted-array');

describe('Remove Duplicates from Sorted Array', () => {
  test('should remove duplicates and return new length', () => {
    const nums = [1, 1, 2];
    const result = removeDuplicates(nums);
    expect(result).toBe(2);
    expect(nums.slice(0, result)).toEqual([1, 2]);
  });

  test('should handle array with multiple duplicates', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = removeDuplicates(nums);
    expect(result).toBe(5);
    expect(nums.slice(0, result)).toEqual([0, 1, 2, 3, 4]);
  });

  test('should handle empty array', () => {
    const nums = [];
    const result = removeDuplicates(nums);
    expect(result).toBe(0);
  });

  test('should handle single element array', () => {
    const nums = [1];
    const result = removeDuplicates(nums);
    expect(result).toBe(1);
    expect(nums.slice(0, result)).toEqual([1]);
  });

  test('should handle array with no duplicates', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = removeDuplicates(nums);
    expect(result).toBe(5);
    expect(nums.slice(0, result)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle array with all same elements', () => {
    const nums = [1, 1, 1, 1];
    const result = removeDuplicates(nums);
    expect(result).toBe(1);
    expect(nums.slice(0, result)).toEqual([1]);
  });

  test('should handle negative numbers', () => {
    const nums = [-3, -1, -1, 0, 0, 0, 1, 1];
    const result = removeDuplicates(nums);
    expect(result).toBe(4);
    expect(nums.slice(0, result)).toEqual([-3, -1, 0, 1]);
  });

  test('should handle two element arrays', () => {
    const nums1 = [1, 1];
    expect(removeDuplicates(nums1)).toBe(1);
    expect(nums1.slice(0, 1)).toEqual([1]);
    
    const nums2 = [1, 2];
    expect(removeDuplicates(nums2)).toBe(2);
    expect(nums2.slice(0, 2)).toEqual([1, 2]);
  });
});