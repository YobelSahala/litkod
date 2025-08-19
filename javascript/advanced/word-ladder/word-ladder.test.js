const ladderLength = require('./word-ladder');

describe('Word Ladder', () => {
  test('should return 5 for beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]', () => {
    const wordList = ["hot","dot","dog","lot","log","cog"];
    expect(ladderLength("hit", "cog", wordList)).toBe(5);
  });

  test('should return 0 when endWord not in wordList', () => {
    const wordList = ["hot","dot","dog","lot","log"];
    expect(ladderLength("hit", "cog", wordList)).toBe(0);
  });

  test('should handle direct transformation', () => {
    const wordList = ["hot"];
    expect(ladderLength("hit", "hot", wordList)).toBe(2);
  });

  test('should handle same begin and end word', () => {
    const wordList = ["hot", "dot"];
    expect(ladderLength("hot", "hot", wordList)).toBe(1);
  });

  test('should handle no possible transformation', () => {
    const wordList = ["hot", "dot", "tog"];
    expect(ladderLength("hit", "cog", wordList)).toBe(0);
  });

  test('should handle longer transformation chain', () => {
    const wordList = ["a", "b", "c"];
    expect(ladderLength("a", "c", wordList)).toBe(2);
  });

  test('should handle single character words', () => {
    const wordList = ["a", "b", "c"];
    expect(ladderLength("a", "b", wordList)).toBe(2);
  });

  test('should handle empty wordList', () => {
    expect(ladderLength("hit", "cog", [])).toBe(0);
  });

  test('should handle multiple valid paths', () => {
    const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
    expect(ladderLength("hit", "cog", wordList)).toBe(5);
  });

  test('should handle longer words', () => {
    const wordList = ["lest", "leet", "lose", "code", "lode", "robe", "lost"];
    expect(ladderLength("leet", "code", wordList)).toBe(6);
  });
});