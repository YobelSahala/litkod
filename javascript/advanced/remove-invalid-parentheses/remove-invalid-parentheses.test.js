const removeInvalidParentheses = require('./remove-invalid-parentheses');

// Helper function to normalize results for comparison
function normalizeResults(results) {
  return [...new Set(results)].sort();
}

describe('Remove Invalid Parentheses', () => {
  test('should return ["(())","()()"] for "()())"', () => {
    const result = removeInvalidParentheses("()())");
    const normalized = normalizeResults(result);
    expect(normalized).toEqual(["(())","()()"]);
  });

  test('should return [""] for "((("', () => {
    const result = removeInvalidParentheses("(((");
    expect(result).toEqual([""]);
  });

  test('should return [""] for "())"', () => {
    const result = removeInvalidParentheses("())");
    expect(result).toEqual(["()"]);
  });

  test('should handle empty string', () => {
    expect(removeInvalidParentheses("")).toEqual([""]);
  });

  test('should handle valid parentheses', () => {
    expect(removeInvalidParentheses("()")).toEqual(["()"]);
    expect(removeInvalidParentheses("(())")).toEqual(["(())"]);
  });

  test('should handle no parentheses', () => {
    expect(removeInvalidParentheses("abc")).toEqual(["abc"]);
  });

  test('should handle mixed characters', () => {
    const result = removeInvalidParentheses("(a)())");
    expect(result).toContain("(a())");
    expect(result).toContain("(a)()");
  });

  test('should handle complex cases', () => {
    const result = removeInvalidParentheses("(v)())()");
    expect(result.length).toBeGreaterThan(0);
    result.forEach(s => {
      expect(isValidParentheses(s)).toBe(true);
    });
  });
});

// Helper function to validate parentheses
function isValidParentheses(s) {
  let count = 0;
  for (let char of s) {
    if (char === '(') count++;
    else if (char === ')') {
      count--;
      if (count < 0) return false;
    }
  }
  return count === 0;
}