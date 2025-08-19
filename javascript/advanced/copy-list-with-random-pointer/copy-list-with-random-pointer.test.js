const copyRandomList = require('./copy-list-with-random-pointer');

// Helper Node class
class Node {
  constructor(val, next, random) {
    this.val = val;
    this.next = (next===undefined ? null : next);
    this.random = (random===undefined ? null : random);
  }
}

// Helper function to create list from array representation
function createListWithRandom(arr) {
  if (!arr.length) return null;
  
  const nodes = arr.map(val => new Node(val));
  
  // Set next pointers
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }
  
  return nodes[0];
}

describe('Copy List with Random Pointer', () => {
  test('should handle empty list', () => {
    expect(copyRandomList(null)).toBe(null);
  });

  test('should handle single node without random', () => {
    const head = new Node(1);
    const copied = copyRandomList(head);
    expect(copied.val).toBe(1);
    expect(copied.next).toBe(null);
    expect(copied.random).toBe(null);
    expect(copied).not.toBe(head);
  });

  test('should handle single node with self random', () => {
    const head = new Node(1);
    head.random = head;
    const copied = copyRandomList(head);
    expect(copied.val).toBe(1);
    expect(copied.random).toBe(copied);
    expect(copied).not.toBe(head);
  });

  test('should handle two nodes with cross random', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.next = node2;
    node1.random = node2;
    node2.random = node1;
    
    const copied = copyRandomList(node1);
    expect(copied.val).toBe(1);
    expect(copied.next.val).toBe(2);
    expect(copied.random).toBe(copied.next);
    expect(copied.next.random).toBe(copied);
  });

  test('should handle complex list', () => {
    const node1 = new Node(7);
    const node2 = new Node(13);
    const node3 = new Node(11);
    const node4 = new Node(10);
    const node5 = new Node(1);
    
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    
    node1.random = null;
    node2.random = node1;
    node3.random = node5;
    node4.random = node3;
    node5.random = node1;
    
    const copied = copyRandomList(node1);
    
    // Verify structure
    expect(copied.val).toBe(7);
    expect(copied.random).toBe(null);
    expect(copied.next.val).toBe(13);
    expect(copied.next.random).toBe(copied);
  });
});