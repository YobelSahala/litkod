const search = require('./search-in-rotated-sorted-array');

describe('Search in Rotated Sorted Array', () => {
  test('should return 4 for nums=[4,5,6,7,0,1,2], target=0', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
  });

  test('should return -1 for nums=[4,5,6,7,0,1,2], target=3', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
  });

  test('should return -1 for nums=[1], target=0', () => {
    expect(search([1], 0)).toBe(-1);
  });

  test('should return 0 for nums=[1], target=1', () => {
    expect(search([1], 1)).toBe(0);
  });

  test('should handle no rotation (sorted array)', () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(search([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(search([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test('should handle rotation at different positions', () => {
    // Rotated at position 1
    expect(search([2, 3, 4, 5, 1], 1)).toBe(4);
    // Rotated at position 2  
    expect(search([3, 4, 5, 1, 2], 1)).toBe(3);
    // Rotated at position 3
    expect(search([4, 5, 1, 2, 3], 1)).toBe(2);
  });

  test('should handle target in left sorted portion', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1);
    expect(search([4, 5, 6, 7, 0, 1, 2], 7)).toBe(3);
  });

  test('should handle target in right sorted portion', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 1)).toBe(5);
    expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
  });

  test('should handle two element arrays', () => {
    expect(search([1, 2], 1)).toBe(0);
    expect(search([1, 2], 2)).toBe(1);
    expect(search([2, 1], 1)).toBe(1);
    expect(search([2, 1], 2)).toBe(0);
  });

  test('should handle duplicates at pivot', () => {
    expect(search([3, 1, 2], 1)).toBe(1);
    expect(search([3, 1, 2], 2)).toBe(2);
    expect(search([3, 1, 2], 3)).toBe(0);
  });

  test('should handle edge cases with target at boundaries', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0); // First element
    expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6); // Last element
  });

  test('should handle arrays where pivot is at the end', () => {
    expect(search([2, 3, 4, 5, 6, 7, 1], 1)).toBe(6);
    expect(search([2, 3, 4, 5, 6, 7, 1], 7)).toBe(5);
  });

  test('should handle larger rotated arrays', () => {
    const nums = [6, 7, 8, 9, 10, 1, 2, 3, 4, 5];
    expect(search(nums, 1)).toBe(5);
    expect(search(nums, 10)).toBe(4);
    expect(search(nums, 11)).toBe(-1);
  });
});