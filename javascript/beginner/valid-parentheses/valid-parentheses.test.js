const isValid = require('./valid-parentheses');

describe('Valid Parentheses', () => {
  test('should return true for "()"', () => {
    expect(isValid('()')).toBe(true);
  });

  test('should return true for "()[]{}"', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('should return false for "(]"', () => {
    expect(isValid('(]')).toBe(false);
  });

  test('should return true for empty string', () => {
    expect(isValid('')).toBe(true);
  });

  test('should return false for single opening bracket', () => {
    expect(isValid('(')).toBe(false);
    expect(isValid('[')).toBe(false);
    expect(isValid('{')).toBe(false);
  });

  test('should return false for single closing bracket', () => {
    expect(isValid(')')).toBe(false);
    expect(isValid(']')).toBe(false);
    expect(isValid('}')).toBe(false);
  });

  test('should handle nested brackets correctly', () => {
    expect(isValid('([{}])')).toBe(true);
    expect(isValid('(([{}]))')).toBe(true);
    expect(isValid('([)]')).toBe(false);
  });

  test('should handle multiple bracket types', () => {
    expect(isValid('()[]')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('({[]})')).toBe(true);
    expect(isValid('({[}])')).toBe(false);
  });

  test('should handle mismatched brackets', () => {
    expect(isValid('(((')).toBe(false);
    expect(isValid(')))')).toBe(false);
    expect(isValid('())')).toBe(false);
    expect(isValid('(()')).toBe(false);
  });

  test('should handle complex valid patterns', () => {
    expect(isValid('(){}[]')).toBe(true);
    expect(isValid('({[(){}[]]})')).toBe(true);
  });

  test('should handle complex invalid patterns', () => {
    expect(isValid('([)]')).toBe(false);
    expect(isValid('({[}])')).toBe(false);
    expect(isValid('())')).toBe(false);
    expect(isValid('(()')).toBe(false);
  });
});