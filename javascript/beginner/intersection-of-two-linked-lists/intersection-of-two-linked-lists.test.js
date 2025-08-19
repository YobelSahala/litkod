const getIntersectionNode = require('./intersection-of-two-linked-lists');

// Helper function to create ListNode
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

describe('Intersection of Two Linked Lists', () => {
  test('should find intersection when lists intersect', () => {
    // Create intersection node
    const intersectionNode = new ListNode(8);
    intersectionNode.next = new ListNode(4);
    intersectionNode.next.next = new ListNode(5);
    
    // Create first list: [4,1] -> intersection
    const headA = new ListNode(4);
    headA.next = new ListNode(1);
    headA.next.next = intersectionNode;
    
    // Create second list: [5,6,1] -> intersection  
    const headB = new ListNode(5);
    headB.next = new ListNode(6);
    headB.next.next = new ListNode(1);
    headB.next.next.next = intersectionNode;
    
    expect(getIntersectionNode(headA, headB)).toBe(intersectionNode);
  });

  test('should find intersection when one list is shorter', () => {
    // Create intersection node
    const intersectionNode = new ListNode(2);
    intersectionNode.next = new ListNode(4);
    
    // Create first list: [1,9,1] -> intersection
    const headA = new ListNode(1);
    headA.next = new ListNode(9);
    headA.next.next = new ListNode(1);
    headA.next.next.next = intersectionNode;
    
    // Create second list: [3] -> intersection
    const headB = new ListNode(3);
    headB.next = intersectionNode;
    
    expect(getIntersectionNode(headA, headB)).toBe(intersectionNode);
  });

  test('should return null when lists do not intersect', () => {
    // Create first list: [2,6,4]
    const headA = new ListNode(2);
    headA.next = new ListNode(6);
    headA.next.next = new ListNode(4);
    
    // Create second list: [1,5]
    const headB = new ListNode(1);
    headB.next = new ListNode(5);
    
    expect(getIntersectionNode(headA, headB)).toBe(null);
  });

  test('should handle empty lists', () => {
    expect(getIntersectionNode(null, null)).toBe(null);
  });

  test('should handle one empty list', () => {
    const head = new ListNode(1);
    expect(getIntersectionNode(head, null)).toBe(null);
    expect(getIntersectionNode(null, head)).toBe(null);
  });

  test('should handle same single node', () => {
    const node = new ListNode(1);
    expect(getIntersectionNode(node, node)).toBe(node);
  });

  test('should handle lists of same length without intersection', () => {
    const headA = new ListNode(1);
    headA.next = new ListNode(2);
    headA.next.next = new ListNode(3);
    
    const headB = new ListNode(4);
    headB.next = new ListNode(5);
    headB.next.next = new ListNode(6);
    
    expect(getIntersectionNode(headA, headB)).toBe(null);
  });

  test('should handle lists where intersection is the first node', () => {
    const intersectionNode = new ListNode(1);
    intersectionNode.next = new ListNode(2);
    
    expect(getIntersectionNode(intersectionNode, intersectionNode)).toBe(intersectionNode);
  });
});