const maxCoins = require('./burst-balloons');

describe('Burst Balloons', () => {
  test('should return 167 for [3,1,5,8]', () => {
    expect(maxCoins([3,1,5,8])).toBe(167);
  });

  test('should return 10 for [1,5]', () => {
    expect(maxCoins([1,5])).toBe(10);
  });

  test('should handle single balloon', () => {
    expect(maxCoins([5])).toBe(5);
  });

  test('should handle empty array', () => {
    expect(maxCoins([])).toBe(0);
  });

  test('should handle two balloons', () => {
    expect(maxCoins([2,3])).toBe(9);
  });

  test('should handle all ones', () => {
    expect(maxCoins([1,1,1])).toBe(3);
  });

  test('should handle larger array', () => {
    expect(maxCoins([7,9,8,0,2])).toBe(637);
  });
});