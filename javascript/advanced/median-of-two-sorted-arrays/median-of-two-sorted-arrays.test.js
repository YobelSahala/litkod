const findMedianSortedArrays = require('./median-of-two-sorted-arrays');

describe('Median of Two Sorted Arrays', () => {
  test('should return 2.0 for nums1=[1,3], nums2=[2]', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2.0);
  });

  test('should return 2.5 for nums1=[1,2], nums2=[3,4]', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  test('should handle empty first array', () => {
    expect(findMedianSortedArrays([], [1])).toBe(1.0);
    expect(findMedianSortedArrays([], [1, 2])).toBe(1.5);
  });

  test('should handle empty second array', () => {
    expect(findMedianSortedArrays([1], [])).toBe(1.0);
    expect(findMedianSortedArrays([1, 2], [])).toBe(1.5);
  });

  test('should handle single element in each array', () => {
    expect(findMedianSortedArrays([1], [2])).toBe(1.5);
    expect(findMedianSortedArrays([2], [1])).toBe(1.5);
  });

  test('should handle arrays of different lengths', () => {
    expect(findMedianSortedArrays([1, 3], [2, 7, 8, 9, 10])).toBe(7.0);
  });

  test('should handle negative numbers', () => {
    expect(findMedianSortedArrays([-5, -2], [-3, 0])).toBe(-2.5);
  });

  test('should handle duplicate values', () => {
    expect(findMedianSortedArrays([1, 1], [1, 2])).toBe(1.0);
  });

  test('should handle large differences', () => {
    expect(findMedianSortedArrays([1, 2], [1000, 2000])).toBe(501);
  });

  test('should handle odd total length', () => {
    expect(findMedianSortedArrays([1, 2, 3], [4, 5])).toBe(3.0);
  });

  test('should handle even total length', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4, 5, 6])).toBe(3.5);
  });
});