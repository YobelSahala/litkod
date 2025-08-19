const canJump = require('./jump-game');

describe('Jump Game', () => {
  test('should return true for [2,3,1,1,4]', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  test('should return false for [3,2,1,0,4]', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });

  test('should handle single element array', () => {
    expect(canJump([0])).toBe(true);
    expect(canJump([1])).toBe(true);
    expect(canJump([5])).toBe(true);
  });

  test('should handle two element arrays', () => {
    expect(canJump([1, 0])).toBe(true);
    expect(canJump([0, 1])).toBe(false);
    expect(canJump([2, 0])).toBe(true);
  });

  test('should handle array with all zeros except first', () => {
    expect(canJump([1, 0, 0, 0])).toBe(false);
    expect(canJump([3, 0, 0, 0])).toBe(true);
  });

  test('should handle array with large jumps', () => {
    expect(canJump([5, 0, 0, 0, 0])).toBe(true);
    expect(canJump([4, 0, 0, 0, 0])).toBe(true);
    expect(canJump([3, 0, 0, 0])).toBe(true);
  });

  test('should handle arrays where we can just reach the end', () => {
    expect(canJump([1, 1, 1, 1])).toBe(true);
    expect(canJump([2, 0, 1])).toBe(true);
  });

  test('should handle arrays with no zeros', () => {
    expect(canJump([1, 2, 3, 4])).toBe(true);
    expect(canJump([5, 4, 3, 2, 1])).toBe(true);
  });

  test('should handle arrays with zeros in middle', () => {
    expect(canJump([2, 0, 1, 1])).toBe(true);
    expect(canJump([1, 0, 1, 1])).toBe(false);
    expect(canJump([3, 0, 0, 1])).toBe(true);
  });

  test('should handle edge case where first element is 0', () => {
    expect(canJump([0, 1])).toBe(false);
    expect(canJump([0, 2, 3])).toBe(false);
    expect(canJump([0])).toBe(true); // Special case: already at the end
  });

  test('should handle longer arrays', () => {
    expect(canJump([2, 3, 1, 1, 4, 2, 1])).toBe(true);
    expect(canJump([1, 1, 1, 0, 1])).toBe(false);
  });

  test('should handle optimal path selection', () => {
    expect(canJump([2, 1, 0, 1, 4])).toBe(false); // Can't skip the 0 trap at index 2
  });

  test('should handle arrays with multiple valid paths', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false); // Can't pass the 0 at index 3
    expect(canJump([4, 2, 1, 0, 1])).toBe(true); // Can jump over the 0
  });

  test('should handle maximum constraints', () => {
    // Test with larger arrays
    const largeArray = new Array(100).fill(1);
    expect(canJump(largeArray)).toBe(true);
    
    const impossibleArray = [1, 0, ...new Array(98).fill(1)];
    expect(canJump(impossibleArray)).toBe(false);
  });
});