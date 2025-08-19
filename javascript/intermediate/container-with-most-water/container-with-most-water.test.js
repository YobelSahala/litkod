const maxArea = require('./container-with-most-water');

describe('Container With Most Water', () => {
  test('should return 49 for [1,8,6,2,5,4,8,3,7]', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test('should return 1 for [1,1]', () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  test('should handle minimum array size', () => {
    expect(maxArea([2, 1])).toBe(1);
    expect(maxArea([1, 2])).toBe(1);
  });

  test('should handle array with zero heights', () => {
    expect(maxArea([0, 1, 0])).toBe(0);
    expect(maxArea([0, 0])).toBe(0);
  });

  test('should handle increasing heights', () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6); // height 2 and 5 with distance 3
  });

  test('should handle decreasing heights', () => {
    expect(maxArea([5, 4, 3, 2, 1])).toBe(6); // height 5 and 2 with distance 3
  });

  test('should handle all same heights', () => {
    expect(maxArea([3, 3, 3, 3])).toBe(9); // height 3 with max distance 3
  });

  test('should handle large differences in heights', () => {
    expect(maxArea([1, 1000, 1, 1, 1])).toBe(4); // containers at indices 0,4 give area 1×4=4
    expect(maxArea([1000, 1, 1, 1, 1000])).toBe(4000); // max height with max width
  });

  test('should find optimal container position', () => {
    expect(maxArea([2, 3, 4, 5, 18, 17, 6])).toBe(17); // height 17 and 3 with distance 4
  });

  test('should handle peak in the middle', () => {
    expect(maxArea([1, 2, 1])).toBe(2); // Use the two outer containers
  });

  test('should handle alternating heights', () => {
    expect(maxArea([1, 5, 1, 5, 1, 5])).toBe(20); // Use first and last 5 with distance 4
  });

  test('should handle edge case with large array', () => {
    const heights = new Array(1000).fill(1);
    heights[0] = 1000;
    heights[999] = 1000;
    expect(maxArea(heights)).toBe(999 * 1000);
  });

  test('should prefer wider containers when heights are equal', () => {
    expect(maxArea([5, 1, 1, 1, 5])).toBe(20); // Use the two 5s with distance 4
  });
});