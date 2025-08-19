const wordBreak = require('./word-break');

describe('Word Break', () => {
  test('should return true for "leetcode", ["leet","code"]', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
  });

  test('should return true for "applepenapple", ["apple","pen"]', () => {
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
  });

  test('should return false for "catsandog", ["cats","dog","sand","and","cat"]', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false);
  });

  test('should handle empty string', () => {
    expect(wordBreak('', ['a', 'b'])).toBe(true);
    expect(wordBreak('', [])).toBe(true);
  });

  test('should handle single character strings', () => {
    expect(wordBreak('a', ['a'])).toBe(true);
    expect(wordBreak('a', ['b'])).toBe(false);
  });

  test('should handle exact match', () => {
    expect(wordBreak('hello', ['hello'])).toBe(true);
  });

  test('should handle no matching words', () => {
    expect(wordBreak('hello', ['world', 'foo', 'bar'])).toBe(false);
  });

  test('should handle overlapping word possibilities', () => {
    expect(wordBreak('abcd', ['a', 'abc', 'b', 'cd'])).toBe(true);
  });

  test('should handle repeated words in dictionary', () => {
    expect(wordBreak('aaaa', ['a', 'aa'])).toBe(true);
    expect(wordBreak('aaaa', ['aa'])).toBe(true);
  });

  test('should handle case where multiple segmentations are possible', () => {
    expect(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog'])).toBe(true);
  });

  test('should handle words that are substrings of target', () => {
    expect(wordBreak('cars', ['car', 'ca', 'rs'])).toBe(true);
  });

  test('should handle longer strings', () => {
    expect(wordBreak('goalspecial', ['go', 'goal', 'goals', 'special'])).toBe(true);
  });

  test('should handle strings that cannot be broken', () => {
    expect(wordBreak('abcdefgh', ['abc', 'def'])).toBe(false);
  });

  test('should handle dictionary with longer words than target', () => {
    expect(wordBreak('cat', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(true);
  });

  test('should handle complex segmentation', () => {
    expect(wordBreak('fohhemkka', ['fo', 'hh', 'em', 'kk', 'a'])).toBe(true);
    expect(wordBreak('fohhemkka', ['fo', 'hhe', 'mk', 'ka'])).toBe(true);
  });

  test('should handle edge cases with single char repeats', () => {
    expect(wordBreak('bb', ['a', 'b', 'bbb', 'bbbb'])).toBe(true);
  });
});