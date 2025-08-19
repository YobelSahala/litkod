const invertTree = require('./invert-binary-tree');

// Helper function to create TreeNode
class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

// Helper function to convert tree to array for easy comparison
function treeToArray(root) {
  if (!root) return [];
  
  const result = [];
  const queue = [root];
  
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  
  // Remove trailing nulls
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }
  
  return result;
}

describe('Invert Binary Tree', () => {
  test('should invert tree [4,2,7,1,3,6,9] to [4,7,2,9,6,3,1]', () => {
    const root = new TreeNode(4);
    root.left = new TreeNode(2);
    root.right = new TreeNode(7);
    root.left.left = new TreeNode(1);
    root.left.right = new TreeNode(3);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(9);
    
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([4, 7, 2, 9, 6, 3, 1]);
  });

  test('should invert tree [2,1,3] to [2,3,1]', () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([2, 3, 1]);
  });

  test('should handle empty tree', () => {
    expect(invertTree(null)).toBe(null);
  });

  test('should handle single node tree', () => {
    const root = new TreeNode(1);
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([1]);
  });

  test('should handle left-skewed tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([1, null, 2, null, 3]);
  });

  test('should handle right-skewed tree', () => {
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);
    
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([1, 2, null, 3]);
  });

  test('should handle symmetric tree', () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(3);
    
    const inverted = invertTree(root);
    expect(treeToArray(inverted)).toEqual([1, 2, 2, 3, 4, 4, 3]);
  });
});