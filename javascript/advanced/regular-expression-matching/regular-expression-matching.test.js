const isMatch = require('./regular-expression-matching');

describe('Regular Expression Matching', () => {
  test('should return false for s="aa", p="a"', () => {
    expect(isMatch('aa', 'a')).toBe(false);
  });

  test('should return true for s="aa", p="a*"', () => {
    expect(isMatch('aa', 'a*')).toBe(true);
  });

  test('should return true for s="ab", p=".*"', () => {
    expect(isMatch('ab', '.*')).toBe(true);
  });

  test('should handle empty strings', () => {
    expect(isMatch('', '')).toBe(true);
    expect(isMatch('', 'a*')).toBe(true);
    expect(isMatch('', 'a*b*')).toBe(true);
  });

  test('should handle single character matches', () => {
    expect(isMatch('a', 'a')).toBe(true);
    expect(isMatch('a', 'b')).toBe(false);
    expect(isMatch('a', '.')).toBe(true);
  });

  test('should handle star patterns', () => {
    expect(isMatch('', 'a*')).toBe(true);
    expect(isMatch('a', 'a*')).toBe(true);
    expect(isMatch('aa', 'a*')).toBe(true);
    expect(isMatch('aaa', 'a*')).toBe(true);
  });

  test('should handle dot patterns', () => {
    expect(isMatch('ab', '..')).toBe(true);
    expect(isMatch('ab', '.c')).toBe(false);
  });

  test('should handle complex patterns', () => {
    expect(isMatch('aab', 'c*a*b')).toBe(true);
    expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false);
  });

  test('should handle patterns with multiple stars', () => {
    expect(isMatch('ab', 'a*b*')).toBe(true);
    expect(isMatch('abc', 'a*b*c*')).toBe(true);
    expect(isMatch('', 'a*b*c*')).toBe(true);
  });

  test('should handle dot-star patterns', () => {
    expect(isMatch('ab', '.*')).toBe(true);
    expect(isMatch('abc', '.*')).toBe(true);
    expect(isMatch('', '.*')).toBe(true);
  });

  test('should handle mixed patterns', () => {
    expect(isMatch('aaa', 'a*a')).toBe(true);
    expect(isMatch('aaa', 'ab*a*c*a')).toBe(true);
  });

  test('should handle edge cases', () => {
    expect(isMatch('a', 'ab*')).toBe(true);
    expect(isMatch('bbbba', '.*a*a')).toBe(true);
  });
});