const isPalindrome = require('./palindrome-linked-list');

// Helper function to create ListNode
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// Helper function to create linked list from array
function createLinkedList(arr) {
  if (arr.length === 0) return null;
  
  let head = new ListNode(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  
  return head;
}

describe('Palindrome Linked List', () => {
  test('should return true for [1,2,2,1]', () => {
    const head = createLinkedList([1, 2, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  test('should return false for [1,2]', () => {
    const head = createLinkedList([1, 2]);
    expect(isPalindrome(head)).toBe(false);
  });

  test('should return true for single element', () => {
    const head = createLinkedList([1]);
    expect(isPalindrome(head)).toBe(true);
  });

  test('should return true for empty list', () => {
    expect(isPalindrome(null)).toBe(true);
  });

  test('should return true for odd length palindrome', () => {
    const head = createLinkedList([1, 2, 3, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  test('should return true for even length palindrome', () => {
    const head = createLinkedList([1, 2, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  test('should return false for odd length non-palindrome', () => {
    const head = createLinkedList([1, 2, 3, 4, 1]);
    expect(isPalindrome(head)).toBe(false);
  });

  test('should return false for even length non-palindrome', () => {
    const head = createLinkedList([1, 2, 3, 4]);
    expect(isPalindrome(head)).toBe(false);
  });

  test('should handle all same values', () => {
    const head = createLinkedList([1, 1, 1, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  test('should handle two element palindrome', () => {
    const head = createLinkedList([1, 1]);
    expect(isPalindrome(head)).toBe(true);
  });

  test('should handle negative values', () => {
    const head = createLinkedList([-1, 0, -1]);
    expect(isPalindrome(head)).toBe(true);
  });

  test('should handle longer palindromes', () => {
    const head = createLinkedList([1, 2, 3, 4, 5, 4, 3, 2, 1]);
    expect(isPalindrome(head)).toBe(true);
  });
});