const maxDepth = require('./maximum-depth-of-binary-tree');

// Helper function to create TreeNode
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

describe('Maximum Depth of Binary Tree', () => {
  test('should return 3 for tree [3,9,20,null,null,15,7]', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    expect(maxDepth(root)).toBe(3);
  });

  test('should return 2 for tree [1,null,2]', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    expect(maxDepth(root)).toBe(2);
  });

  test('should return 0 for empty tree', () => {
    expect(maxDepth(null)).toBe(0);
  });

  test('should return 1 for single node tree', () => {
    const root = new TreeNode(1);
    expect(maxDepth(root)).toBe(1);
  });

  test('should handle left-skewed tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    expect(maxDepth(root)).toBe(4);
  });

  test('should handle right-skewed tree', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    expect(maxDepth(root)).toBe(3);
  });

  test('should handle balanced tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);
    expect(maxDepth(root)).toBe(3);
  });

  test('should handle unbalanced tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.left.left = new TreeNode(4);
    root.right = new TreeNode(5);
    expect(maxDepth(root)).toBe(4);
  });
});