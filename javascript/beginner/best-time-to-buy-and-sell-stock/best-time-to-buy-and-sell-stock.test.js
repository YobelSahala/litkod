const maxProfit = require('./best-time-to-buy-and-sell-stock');

describe('Best Time to Buy and Sell Stock', () => {
  test('should return 5 for [7,1,5,3,6,4]', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('should return 0 for [7,6,4,3,1]', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  test('should handle single price', () => {
    expect(maxProfit([5])).toBe(0);
  });

  test('should handle two prices - increasing', () => {
    expect(maxProfit([1, 5])).toBe(4);
  });

  test('should handle two prices - decreasing', () => {
    expect(maxProfit([5, 1])).toBe(0);
  });

  test('should handle all same prices', () => {
    expect(maxProfit([3, 3, 3, 3])).toBe(0);
  });

  test('should handle large profit difference', () => {
    expect(maxProfit([1, 10000])).toBe(9999);
  });

  test('should find optimal buy/sell points', () => {
    expect(maxProfit([2, 4, 1, 5, 3, 7])).toBe(6); // buy at 1, sell at 7
  });

  test('should handle zero prices', () => {
    expect(maxProfit([0, 1, 2, 3])).toBe(3);
    expect(maxProfit([3, 2, 1, 0])).toBe(0);
  });

  test('should handle complex patterns', () => {
    expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4); // buy at 2, sell at 6
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4); // buy at 1, sell at 5
  });
});