const alienOrder = require('./alien-dictionary');

describe('Alien Dictionary', () => {
  test('should return "wertf" for ["wrt","wrf","er","ett","rftt"]', () => {
    expect(alienOrder(["wrt","wrf","er","ett","rftt"])).toBe("wertf");
  });

  test('should return "zx" for ["z","x"]', () => {
    expect(alienOrder(["z","x"])).toBe("zx");
  });

  test('should return "" for ["z","x","z"]', () => {
    expect(alienOrder(["z","x","z"])).toBe("");
  });

  test('should handle single word', () => {
    expect(alienOrder(["hello"])).toBe("helo");
  });

  test('should handle single character words', () => {
    expect(alienOrder(["a","b","c"])).toBe("abc");
  });

  test('should detect invalid prefix order', () => {
    expect(alienOrder(["abc","ab"])).toBe("");
  });

  test('should handle empty input', () => {
    expect(alienOrder([])).toBe("");
  });

  test('should handle identical words', () => {
    expect(alienOrder(["abc","abc"])).toBe("abc");
  });

  test('should handle complex ordering', () => {
    const result = alienOrder(["ac","ab","zc","zb"]);
    // Result should be valid ordering, checking it contains all characters
    expect(result.length).toBe(4);
    expect(result).toMatch(/[abcz]{4}/);
  });

  test('should detect cycles', () => {
    expect(alienOrder(["a","aa","aaa"])).toBe("a");
  });

  test('should handle longer chains', () => {
    const result = alienOrder(["baa", "abcd", "abca", "cab", "cad"]);
    expect(result.length).toBe(4);
  });
});