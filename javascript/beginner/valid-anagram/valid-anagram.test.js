const isAnagram = require('./valid-anagram');

describe('Valid Anagram', () => {
  test('should return true for "anagram" and "nagaram"', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('should return false for "rat" and "car"', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  test('should handle empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });

  test('should handle single character strings', () => {
    expect(isAnagram('a', 'a')).toBe(true);
    expect(isAnagram('a', 'b')).toBe(false);
  });

  test('should handle strings with different lengths', () => {
    expect(isAnagram('abc', 'abcd')).toBe(false);
    expect(isAnagram('hello', 'hi')).toBe(false);
  });

  test('should handle strings with repeated characters', () => {
    expect(isAnagram('aab', 'aba')).toBe(true);
    expect(isAnagram('aab', 'aaa')).toBe(false);
  });

  test('should handle case sensitive strings', () => {
    expect(isAnagram('Listen', 'silent')).toBe(false); // case sensitive
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  test('should handle longer anagrams', () => {
    expect(isAnagram('conversation', 'voices rant on')).toBe(false); // spaces matter
    expect(isAnagram('astronomer', 'moon starer')).toBe(false); // spaces matter
  });

  test('should handle identical strings', () => {
    expect(isAnagram('hello', 'hello')).toBe(true);
    expect(isAnagram('test', 'test')).toBe(true);
  });

  test('should handle complex anagrams', () => {
    expect(isAnagram('elbow', 'below')).toBe(true);
    expect(isAnagram('study', 'dusty')).toBe(true);
    expect(isAnagram('night', 'thing')).toBe(true);
  });

  test('should handle strings with all same characters', () => {
    expect(isAnagram('aaa', 'aaa')).toBe(true);
    expect(isAnagram('aaa', 'aaab')).toBe(false);
  });
});