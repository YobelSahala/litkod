const { mergeTwoLists } = require('./merge-two-sorted-lists');

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

describe('Merge Two Sorted Lists', () => {
  test('should merge [1,2,4] and [1,3,4] to [1,1,2,3,4,4]', () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test('should handle both empty lists', () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([]);
  });

  test('should handle empty first list', () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([0]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([0]);
  });

  test('should handle empty second list', () => {
    const list1 = createLinkedList([1]);
    const list2 = createLinkedList([]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1]);
  });

  test('should handle lists of different lengths', () => {
    const list1 = createLinkedList([1, 2, 3]);
    const list2 = createLinkedList([4, 5, 6, 7, 8]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test('should handle negative values', () => {
    const list1 = createLinkedList([-10, -5, 0]);
    const list2 = createLinkedList([-8, -3, 1]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([-10, -8, -5, -3, 0, 1]);
  });

  test('should handle duplicate values', () => {
    const list1 = createLinkedList([1, 1, 2]);
    const list2 = createLinkedList([1, 2, 2]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 1, 1, 2, 2, 2]);
  });

  test('should handle single node lists', () => {
    const list1 = createLinkedList([1]);
    const list2 = createLinkedList([2]);
    const merged = mergeTwoLists(list1, list2);
    expect(linkedListToArray(merged)).toEqual([1, 2]);
  });
});