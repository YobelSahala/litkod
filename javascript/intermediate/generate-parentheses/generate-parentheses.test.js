const generateParenthesis = require('./generate-parentheses');

describe('Generate Parentheses', () => {
  test('should generate all combinations for n=3', () => {
    const result = generateParenthesis(3);
    const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
    expect(result.sort()).toEqual(expected.sort());
    expect(result).toHaveLength(5);
  });

  test('should generate all combinations for n=1', () => {
    const result = generateParenthesis(1);
    expect(result).toEqual(["()"]);
  });

  test('should generate all combinations for n=2', () => {
    const result = generateParenthesis(2);
    const expected = ["(())", "()()"];
    expect(result.sort()).toEqual(expected.sort());
    expect(result).toHaveLength(2);
  });

  test('should generate all combinations for n=4', () => {
    const result = generateParenthesis(4);
    expect(result).toHaveLength(14); // Catalan number C(4) = 14
    
    // Verify all results are valid and unique
    const uniqueResults = new Set(result);
    expect(uniqueResults.size).toBe(result.length);
    
    // Verify each result is valid parentheses
    result.forEach(parentheses => {
      expect(isValidParentheses(parentheses)).toBe(true);
      expect(parentheses.length).toBe(8); // 2 * n
    });
  });

  test('should handle edge case n=0', () => {
    const result = generateParenthesis(0);
    expect(result).toEqual([""]);
  });

  test('should generate correct number of combinations (Catalan numbers)', () => {
    // C(0)=1, C(1)=1, C(2)=2, C(3)=5, C(4)=14
    expect(generateParenthesis(0)).toHaveLength(1);
    expect(generateParenthesis(1)).toHaveLength(1);
    expect(generateParenthesis(2)).toHaveLength(2);
    expect(generateParenthesis(3)).toHaveLength(5);
    expect(generateParenthesis(4)).toHaveLength(14);
  });

  test('should generate only well-formed parentheses', () => {
    for (let n = 1; n <= 4; n++) {
      const result = generateParenthesis(n);
      result.forEach(parentheses => {
        expect(isValidParentheses(parentheses)).toBe(true);
        expect(parentheses.length).toBe(2 * n);
        // Count opening and closing parentheses
        const openCount = (parentheses.match(/\(/g) || []).length;
        const closeCount = (parentheses.match(/\)/g) || []).length;
        expect(openCount).toBe(n);
        expect(closeCount).toBe(n);
      });
    }
  });

  test('should generate unique combinations', () => {
    for (let n = 1; n <= 4; n++) {
      const result = generateParenthesis(n);
      const uniqueResults = new Set(result);
      expect(uniqueResults.size).toBe(result.length);
    }
  });
});

// Helper function to validate parentheses
function isValidParentheses(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
    } else if (s[i] === ')') {
      count--;
      if (count < 0) return false;
    }
  }
  return count === 0;
}