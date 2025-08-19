const isValidBST = require('./validate-binary-search-tree');

// Helper function to create TreeNode
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

describe('Validate Binary Search Tree', () => {
  test('should return true for valid BST [2,1,3]', () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(isValidBST(root)).toBe(true);
  });

  test('should return false for invalid BST [5,1,4,null,null,3,6]', () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(1);
    root.right = new TreeNode(4);
    root.right.left = new TreeNode(3);
    root.right.right = new TreeNode(6);
    expect(isValidBST(root)).toBe(false);
  });

  test('should return true for empty tree', () => {
    expect(isValidBST(null)).toBe(true);
  });

  test('should return true for single node', () => {
    const root = new TreeNode(1);
    expect(isValidBST(root)).toBe(true);
  });

  test('should handle left subtree only', () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    expect(isValidBST(root)).toBe(true);
  });

  test('should handle right subtree only', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    expect(isValidBST(root)).toBe(true);
  });

  test('should return false for duplicate values', () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(5);
    expect(isValidBST(root)).toBe(false);
  });

  test('should handle negative values', () => {
    const root = new TreeNode(0);
    root.left = new TreeNode(-1);
    root.right = new TreeNode(1);
    expect(isValidBST(root)).toBe(true);
  });

  test('should detect invalid BST with correct local ordering', () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(2);
    root.right = new TreeNode(5);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(4); // Invalid: 4 > 3
    expect(isValidBST(root)).toBe(false);
  });

  test('should handle larger valid BST', () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(15);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(7);
    root.right.left = new TreeNode(12);
    root.right.right = new TreeNode(18);
    expect(isValidBST(root)).toBe(true);
  });

  test('should handle edge case with min/max values', () => {
    const root = new TreeNode(2147483647); // Max int value
    expect(isValidBST(root)).toBe(true);
  });

  test('should return false when left subtree has value greater than root', () => {
    const root = new TreeNode(5);
    root.left = new TreeNode(3);
    root.left.right = new TreeNode(6); // 6 > 5
    expect(isValidBST(root)).toBe(false);
  });
});