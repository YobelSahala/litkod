const getSkyline = require('./the-skyline-problem');

describe('The Skyline Problem', () => {
  test('should return correct skyline for standard example', () => {
    const buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]];
    const expected = [[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]];
    expect(getSkyline(buildings)).toEqual(expected);
  });

  test('should return correct skyline for single building', () => {
    const buildings = [[0,2,3]];
    const expected = [[0,3],[2,0]];
    expect(getSkyline(buildings)).toEqual(expected);
  });

  test('should handle empty input', () => {
    expect(getSkyline([])).toEqual([]);
  });

  test('should handle non-overlapping buildings', () => {
    const buildings = [[0,2,3],[4,6,2]];
    const expected = [[0,3],[2,0],[4,2],[6,0]];
    expect(getSkyline(buildings)).toEqual(expected);
  });

  test('should handle same height buildings', () => {
    const buildings = [[0,2,3],[1,3,3]];
    const expected = [[0,3],[3,0]];
    expect(getSkyline(buildings)).toEqual(expected);
  });

  test('should handle nested buildings', () => {
    const buildings = [[0,4,3],[1,3,5]];
    const expected = [[0,3],[1,5],[3,3],[4,0]];
    expect(getSkyline(buildings)).toEqual(expected);
  });

  test('should handle adjacent buildings', () => {
    const buildings = [[0,2,3],[2,4,2]];
    const expected = [[0,3],[2,2],[4,0]];
    expect(getSkyline(buildings)).toEqual(expected);
  });
});