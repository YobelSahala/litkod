const groupAnagrams = require('./group-anagrams');

// Helper function to normalize results for comparison
function normalizeResult(result) {
  return result.map(group => group.sort()).sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a[0].localeCompare(b[0]);
  });
}

describe('Group Anagrams', () => {
  test('should group ["eat","tea","tan","ate","nat","bat"] correctly', () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    const normalized = normalizeResult(result);
    const expected = normalizeResult([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
    expect(normalized).toEqual(expected);
  });

  test('should handle single word', () => {
    const result = groupAnagrams(["a"]);
    expect(result).toEqual([["a"]]);
  });

  test('should handle empty array', () => {
    const result = groupAnagrams([]);
    expect(result).toEqual([]);
  });

  test('should handle words with no anagrams', () => {
    const result = groupAnagrams(["abc", "def", "ghi"]);
    expect(result).toHaveLength(3);
    expect(result.every(group => group.length === 1)).toBe(true);
  });

  test('should handle all words being anagrams', () => {
    const result = groupAnagrams(["abc", "bca", "cab", "acb"]);
    expect(result).toHaveLength(1);
    expect(result[0]).toHaveLength(4);
    expect(result[0]).toEqual(expect.arrayContaining(["abc", "bca", "cab", "acb"]));
  });

  test('should handle empty strings', () => {
    const result = groupAnagrams(["", "", "a"]);
    expect(result).toHaveLength(2);
    const normalized = normalizeResult(result);
    expect(normalized).toEqual([["a"], ["", ""]]);
  });

  test('should handle single character words', () => {
    const result = groupAnagrams(["a", "b", "a", "c", "b"]);
    const normalized = normalizeResult(result);
    const expected = normalizeResult([["a", "a"], ["b", "b"], ["c"]]);
    expect(normalized).toEqual(expected);
  });

  test('should handle case sensitivity', () => {
    const result = groupAnagrams(["abc", "ABC", "bca"]);
    expect(result).toHaveLength(2); // "abc" and "bca" are anagrams, "ABC" is different
  });

  test('should handle longer words', () => {
    const result = groupAnagrams(["listen", "silent", "hello", "world"]);
    expect(result).toHaveLength(3);
    // "listen" and "silent" should be grouped together
    const listenGroup = result.find(group => group.includes("listen"));
    expect(listenGroup).toEqual(expect.arrayContaining(["listen", "silent"]));
  });

  test('should handle duplicate words', () => {
    const result = groupAnagrams(["abc", "abc", "bca", "def"]);
    expect(result).toHaveLength(2);
    const abcGroup = result.find(group => group.includes("abc"));
    expect(abcGroup).toHaveLength(3);
    expect(abcGroup).toEqual(expect.arrayContaining(["abc", "abc", "bca"]));
  });

  test('should handle words with repeated characters', () => {
    const result = groupAnagrams(["aab", "aba", "baa", "abc"]);
    expect(result).toHaveLength(2);
    const aabGroup = result.find(group => group.includes("aab"));
    expect(aabGroup).toHaveLength(3);
    expect(aabGroup).toEqual(expect.arrayContaining(["aab", "aba", "baa"]));
  });
});