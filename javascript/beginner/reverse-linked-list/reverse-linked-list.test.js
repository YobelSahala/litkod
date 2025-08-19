const reverseList = require('./reverse-linked-list');

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

// Helper function to convert linked list to array
function linkedListToArray(head) {
  const result = [];
  let current = head;
  
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  
  return result;
}

describe('Reverse Linked List', () => {
  test('should reverse [1,2,3,4,5] to [5,4,3,2,1]', () => {
    const head = createLinkedList([1, 2, 3, 4, 5]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  test('should reverse [1,2] to [2,1]', () => {
    const head = createLinkedList([1, 2]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([2, 1]);
  });

  test('should handle empty list', () => {
    const head = createLinkedList([]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([]);
  });

  test('should handle single node', () => {
    const head = createLinkedList([1]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([1]);
  });

  test('should handle list with negative values', () => {
    const head = createLinkedList([-1, -2, -3]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([-3, -2, -1]);
  });

  test('should handle list with duplicate values', () => {
    const head = createLinkedList([1, 2, 2, 1]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([1, 2, 2, 1]);
  });

  test('should handle large values within constraints', () => {
    const head = createLinkedList([5000, -5000, 0, 100]);
    const reversed = reverseList(head);
    expect(linkedListToArray(reversed)).toEqual([100, 0, -5000, 5000]);
  });
});