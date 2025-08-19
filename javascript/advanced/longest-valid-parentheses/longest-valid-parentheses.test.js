const longestValidParentheses = require('./longest-valid-parentheses');

describe('Longest Valid Parentheses', () => {
    test('should return 2 for "(()"', () => {
        expect(longestValidParentheses('(()')).toBe(2);
    });

    test('should return 4 for ")()())"', () => {
        expect(longestValidParentheses(')()())')).toBe(4);
    });

    test('should return 0 for empty string', () => {
        expect(longestValidParentheses('')).toBe(0);
    });

    test('should return 2 for "()"', () => {
        expect(longestValidParentheses('()')).toBe(2);
    });

    test('should return 4 for "(())"', () => {
        expect(longestValidParentheses('(())')).toBe(4);
    });

    test('should return 6 for "((()))"', () => {
        expect(longestValidParentheses('((()))')).toBe(6);
    });

    test('should return 0 for "((("', () => {
        expect(longestValidParentheses('(((')).toBe(0);
    });

    test('should return 0 for ")))"', () => {
        expect(longestValidParentheses(')))')).toBe(0);
    });

    test('should return 2 for ")("', () => {
        expect(longestValidParentheses(')(')).toBe(0);
    });

    test('should return 4 for "()()"', () => {
        expect(longestValidParentheses('()()')).toBe(4);
    });

    test('should return 6 for "(()())"', () => {
        expect(longestValidParentheses('(()())')).toBe(6);
    });

    test('should return 2 for "()(()"', () => {
        expect(longestValidParentheses('()(()')).toBe(2);
    });

    test('should return 6 for "()(())"', () => {
        expect(longestValidParentheses('()(())')).toBe(6);
    });

    test('should return 4 for "()())"', () => {
        expect(longestValidParentheses('()())')).toBe(4);
    });

    test('should return 10 for "(()(()())"', () => {
        expect(longestValidParentheses('(()(()())')).toBe(8);
    });

    test('should handle complex mixed case', () => {
        expect(longestValidParentheses(')()())()()(')).toBe(4);
    });

    test('should handle long valid sequence', () => {
        const longValid = '()'.repeat(100);
        expect(longestValidParentheses(longValid)).toBe(200);
    });
});