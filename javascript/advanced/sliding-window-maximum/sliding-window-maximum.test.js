const maxSlidingWindow = require('./sliding-window-maximum');

describe('Sliding Window Maximum', () => {
  test('should return [3,3,5,5,6,7] for nums=[1,3,-1,-3,5,3,6,7], k=3', () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7]);
  });

  test('should return [1] for nums=[1], k=1', () => {
    expect(maxSlidingWindow([1], 1)).toEqual([1]);
  });

  test('should handle empty array', () => {
    expect(maxSlidingWindow([], 1)).toEqual([]);
  });

  test('should handle k=0', () => {
    expect(maxSlidingWindow([1, 2, 3], 0)).toEqual([]);
  });

  test('should handle single element window', () => {
    expect(maxSlidingWindow([1, 2, 3, 4, 5], 1)).toEqual([1, 2, 3, 4, 5]);
  });

  test('should handle window size equal to array length', () => {
    expect(maxSlidingWindow([1, 2, 3], 3)).toEqual([3]);
  });

  test('should handle negative numbers', () => {
    expect(maxSlidingWindow([-1, -2, -3, -4], 2)).toEqual([-1, -2, -3]);
  });

  test('should handle all same numbers', () => {
    expect(maxSlidingWindow([5, 5, 5, 5], 2)).toEqual([5, 5, 5]);
  });

  test('should handle decreasing sequence', () => {
    expect(maxSlidingWindow([5, 4, 3, 2, 1], 3)).toEqual([5, 4, 3]);
  });

  test('should handle increasing sequence', () => {
    expect(maxSlidingWindow([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5]);
  });

  test('should handle mixed positive and negative', () => {
    expect(maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4)).toEqual([7, 7, 7, 7, 7]);
  });
});