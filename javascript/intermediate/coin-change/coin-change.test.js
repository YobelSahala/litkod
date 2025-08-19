const coinChange = require('./coin-change');

describe('Coin Change', () => {
  test('should return 2 for coins=[1,3,4], amount=6', () => {
    expect(coinChange([1, 3, 4], 6)).toBe(2); // 3 + 3 = 6
  });

  test('should return -1 for coins=[2], amount=3', () => {
    expect(coinChange([2], 3)).toBe(-1);
  });

  test('should return 0 for amount=0', () => {
    expect(coinChange([1], 0)).toBe(0);
    expect(coinChange([1, 3, 4], 0)).toBe(0);
  });

  test('should handle single coin matching amount', () => {
    expect(coinChange([1], 1)).toBe(1);
    expect(coinChange([5], 5)).toBe(1);
  });

  test('should handle standard coin denominations', () => {
    expect(coinChange([1, 5, 10, 25], 30)).toBe(2); // 25 + 5
    expect(coinChange([1, 5, 10, 25], 67)).toBe(6); // 25 + 25 + 10 + 5 + 1 + 1 = 67
  });

  test('should handle large amount with small coins', () => {
    expect(coinChange([1], 100)).toBe(100);
    expect(coinChange([1, 2], 100)).toBe(50); // 50 coins of value 2
  });

  test('should handle impossible amounts', () => {
    expect(coinChange([3, 5], 1)).toBe(-1);
    expect(coinChange([2], 1)).toBe(-1);
    expect(coinChange([5, 10], 3)).toBe(-1);
  });

  test('should find optimal solution with multiple coin types', () => {
    expect(coinChange([1, 3, 4], 6)).toBe(2); // 3 + 3 = 6
    expect(coinChange([2, 5, 10], 15)).toBe(2); // 5 + 10 = 15
  });

  test('should handle greedy-suboptimal cases', () => {
    // Greedy would choose 6 + 6 + 1 + 1 + 1 = 5 coins
    // Optimal is 6 + 6 + 3 = 3 coins
    expect(coinChange([1, 3, 4, 6], 15)).toBe(3);
  });

  test('should handle edge cases', () => {
    expect(coinChange([1, 2, 5], 11)).toBe(3); // 5 + 5 + 1
    expect(coinChange([2, 3, 5], 9)).toBe(3); // 3 + 3 + 3
  });

  test('should handle single large coin', () => {
    expect(coinChange([100], 200)).toBe(2);
    expect(coinChange([100], 99)).toBe(-1);
  });

  test('should handle coins larger than amount', () => {
    expect(coinChange([5, 10, 20], 3)).toBe(-1);
    expect(coinChange([1, 5, 10], 3)).toBe(3); // 1 + 1 + 1
  });
});