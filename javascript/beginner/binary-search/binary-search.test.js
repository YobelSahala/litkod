const search = require('./binary-search');

describe('Binary Search', () => {
  test('should return correct index for first example', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test('should return -1 for non-existent target', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  test('should find element at beginning of array', () => {
    expect(search([-1, 0, 3, 5, 9, 12], -1)).toBe(0);
  });

  test('should find element at end of array', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 12)).toBe(5);
  });

  test('should handle single element array - found', () => {
    expect(search([5], 5)).toBe(0);
  });

  test('should handle single element array - not found', () => {
    expect(search([5], 3)).toBe(-1);
  });

  test('should handle two element array', () => {
    expect(search([1, 3], 1)).toBe(0);
    expect(search([1, 3], 3)).toBe(1);
    expect(search([1, 3], 2)).toBe(-1);
  });

  test('should handle larger arrays', () => {
    const nums = [-10, -5, -2, 0, 3, 7, 10, 15, 20, 25];
    expect(search(nums, 7)).toBe(5);
    expect(search(nums, -10)).toBe(0);
    expect(search(nums, 25)).toBe(9);
    expect(search(nums, 4)).toBe(-1);
  });

  test('should handle array with negative numbers', () => {
    expect(search([-100, -50, -10, -1], -50)).toBe(1);
    expect(search([-100, -50, -10, -1], -25)).toBe(-1);
  });
});