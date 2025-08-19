const climbStairs = require('./climbing-stairs');

describe('Climbing Stairs', () => {
  test('should return 2 for n=2', () => {
    expect(climbStairs(2)).toBe(2);
  });

  test('should return 3 for n=3', () => {
    expect(climbStairs(3)).toBe(3);
  });

  test('should return 1 for n=1', () => {
    expect(climbStairs(1)).toBe(1);
  });

  test('should return 5 for n=4', () => {
    expect(climbStairs(4)).toBe(5);
  });

  test('should return 8 for n=5', () => {
    expect(climbStairs(5)).toBe(8);
  });

  test('should handle larger values', () => {
    expect(climbStairs(10)).toBe(89);
    expect(climbStairs(20)).toBe(10946);
  });

  test('should handle edge cases', () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
  });

  test('should follow fibonacci sequence', () => {
    // F(1) = 1, F(2) = 2, F(n) = F(n-1) + F(n-2)
    for (let n = 3; n <= 10; n++) {
      const expected = climbStairs(n - 1) + climbStairs(n - 2);
      expect(climbStairs(n)).toBe(expected);
    }
  });
});