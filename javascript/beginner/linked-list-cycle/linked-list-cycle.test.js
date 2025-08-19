const hasCycle = require('./linked-list-cycle');

// Helper function to create ListNode
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

describe('Linked List Cycle', () => {
  test('should return true for list with cycle', () => {
    const head = new ListNode(3);
    const node2 = new ListNode(2);
    const node0 = new ListNode(0);
    const node4 = new ListNode(-4);
    
    head.next = node2;
    node2.next = node0;
    node0.next = node4;
    node4.next = node2; // Creates cycle back to node2
    
    expect(hasCycle(head)).toBe(true);
  });

  test('should return true for two-node cycle', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    
    node1.next = node2;
    node2.next = node1; // Creates cycle
    
    expect(hasCycle(node1)).toBe(true);
  });

  test('should return false for single node without cycle', () => {
    const head = new ListNode(1);
    expect(hasCycle(head)).toBe(false);
  });

  test('should return false for empty list', () => {
    expect(hasCycle(null)).toBe(false);
  });

  test('should return false for linear list', () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    
    expect(hasCycle(head)).toBe(false);
  });

  test('should return true for self-loop', () => {
    const head = new ListNode(1);
    head.next = head; // Points to itself
    
    expect(hasCycle(head)).toBe(true);
  });

  test('should return true for cycle at end', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node3; // Cycle back to node3
    
    expect(hasCycle(node1)).toBe(true);
  });

  test('should return false for two-node linear list', () => {
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    
    node1.next = node2;
    // node2.next is null by default
    
    expect(hasCycle(node1)).toBe(false);
  });
});