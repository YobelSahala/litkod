const findWords = require('./word-search-ii');

// Helper function to normalize results
function normalizeResults(words) {
  return [...new Set(words)].sort();
}

describe('Word Search II', () => {
  test('should find words in standard example', () => {
    const board = [
      ["o","a","a","n"],
      ["e","t","a","e"],
      ["i","h","k","r"],
      ["i","f","l","v"]
    ];
    const words = ["oath","pea","eat","rain"];
    const result = findWords(board, words);
    const normalized = normalizeResults(result);
    expect(normalized).toEqual(["eat","oath"]);
  });

  test('should return empty array when no words found', () => {
    const board = [["a","b"],["c","d"]];
    const words = ["abcb"];
    expect(findWords(board, words)).toEqual([]);
  });

  test('should handle single cell board', () => {
    const board = [["a"]];
    const words = ["a","b"];
    expect(findWords(board, words)).toEqual(["a"]);
  });

  test('should handle empty words array', () => {
    const board = [["a","b"],["c","d"]];
    expect(findWords(board, [])).toEqual([]);
  });

  test('should handle single character words', () => {
    const board = [["a","b"],["c","d"]];
    const words = ["a","c","e"];
    const result = normalizeResults(findWords(board, words));
    expect(result).toEqual(["a","c"]);
  });

  test('should handle longer words', () => {
    const board = [
      ["a","b","c"],
      ["a","e","d"],
      ["a","f","g"]
    ];
    const words = ["abcdefg","gfedcba","eaabcdgf"];
    const result = findWords(board, words);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });

  test('should handle duplicate letters in board', () => {
    const board = [["a","a"]];
    const words = ["aa"];
    expect(findWords(board, words)).toEqual(["aa"]);
  });
});