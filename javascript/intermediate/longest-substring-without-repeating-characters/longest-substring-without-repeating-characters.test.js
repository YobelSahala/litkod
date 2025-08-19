const lengthOfLongestSubstring = require('./longest-substring-without-repeating-characters');

describe('Longest Substring Without Repeating Characters', () => {
  test('should return 3 for "abcabcbb"', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  test('should return 1 for "bbbbb"', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
  });

  test('should return 3 for "pwwkew"', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  test('should return 0 for empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  test('should return 1 for single character', () => {
    expect(lengthOfLongestSubstring('a')).toBe(1);
  });

  test('should handle string with no repeating characters', () => {
    expect(lengthOfLongestSubstring('abcdef')).toBe(6);
  });

  test('should handle string with all same characters', () => {
    expect(lengthOfLongestSubstring('aaaaaaa')).toBe(1);
  });

  test('should handle string with spaces', () => {
    expect(lengthOfLongestSubstring('a b c d e')).toBe(3); // Multiple spaces cause repeats
    expect(lengthOfLongestSubstring('  ')).toBe(1);
  });

  test('should handle string with digits', () => {
    expect(lengthOfLongestSubstring('0123456789')).toBe(10);
    expect(lengthOfLongestSubstring('1234512345')).toBe(5);
  });

  test('should handle string with symbols', () => {
    expect(lengthOfLongestSubstring('!@#$%^&*()')).toBe(10);
  });

  test('should handle complex patterns', () => {
    expect(lengthOfLongestSubstring('abba')).toBe(2); // "ab" or "ba"
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3); // "abc"
    expect(lengthOfLongestSubstring('dvdf')).toBe(3); // "vdf"
  });

  test('should handle alternating patterns', () => {
    expect(lengthOfLongestSubstring('abab')).toBe(2);
    expect(lengthOfLongestSubstring('tmmzuxt')).toBe(5); // "mzuxt"
  });

  test('should handle longer strings', () => {
    expect(lengthOfLongestSubstring('anviaj')).toBe(5); // "nviaj"
    expect(lengthOfLongestSubstring('ohvhjdml')).toBe(6); // "vhjdml"
  });

  test('should handle edge cases', () => {
    expect(lengthOfLongestSubstring('au')).toBe(2);
    expect(lengthOfLongestSubstring('aab')).toBe(2); // "ab"
  });
});