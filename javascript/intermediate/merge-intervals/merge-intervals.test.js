const merge = require('./merge-intervals');

describe('Merge Intervals', () => {
  test('should merge [[1,3],[2,6],[8,10],[15,18]] to [[1,6],[8,10],[15,18]]', () => {
    const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 6], [8, 10], [15, 18]]);
  });

  test('should merge [[1,4],[4,5]] to [[1,5]]', () => {
    const intervals = [[1, 4], [4, 5]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 5]]);
  });

  test('should handle empty array', () => {
    expect(merge([])).toEqual([]);
  });

  test('should handle single interval', () => {
    expect(merge([[1, 4]])).toEqual([[1, 4]]);
  });

  test('should handle non-overlapping intervals', () => {
    const intervals = [[1, 2], [3, 4], [5, 6]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
  });

  test('should handle all overlapping intervals', () => {
    const intervals = [[1, 4], [2, 3]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 4]]);
  });

  test('should handle intervals that need sorting', () => {
    const intervals = [[6, 7], [2, 3], [8, 9], [1, 4]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 4], [6, 7], [8, 9]]);
  });

  test('should merge multiple overlapping intervals', () => {
    const intervals = [[1, 3], [2, 6], [5, 10], [9, 12]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 12]]);
  });

  test('should handle touching intervals', () => {
    const intervals = [[1, 2], [2, 3], [3, 4]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 4]]);
  });

  test('should handle nested intervals', () => {
    const intervals = [[1, 10], [2, 3], [4, 5], [6, 7]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 10]]);
  });

  test('should handle same start times', () => {
    const intervals = [[1, 3], [1, 5], [6, 7]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 5], [6, 7]]);
  });

  test('should handle same end times', () => {
    const intervals = [[1, 3], [2, 3], [4, 5]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 3], [4, 5]]);
  });

  test('should handle identical intervals', () => {
    const intervals = [[1, 3], [1, 3], [2, 4]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 4]]);
  });

  test('should handle complex overlapping pattern', () => {
    const intervals = [[2, 3], [4, 5], [6, 7], [8, 9], [1, 10]];
    const result = merge(intervals);
    expect(result).toEqual([[1, 10]]);
  });
});