const lowestCommonAncestor = require('./lowest-common-ancestor-of-a-binary-tree');

// Helper class for TreeNode
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('Lowest Common Ancestor of a Binary Tree', () => {
    test('should find LCA of nodes in different subtrees', () => {
        // Tree:      3
        //           / \
        //          5   1
        //         / \ / \
        //        6  2 0  8
        //          / \
        //         7   4
        const node7 = new TreeNode(7);
        const node4 = new TreeNode(4);
        const node6 = new TreeNode(6);
        const node2 = new TreeNode(2, node7, node4);
        const node0 = new TreeNode(0);
        const node8 = new TreeNode(8);
        const node5 = new TreeNode(5, node6, node2);
        const node1 = new TreeNode(1, node0, node8);
        const root = new TreeNode(3, node5, node1);

        expect(lowestCommonAncestor(root, node5, node1)).toBe(root);
        expect(lowestCommonAncestor(root, node5, node4)).toBe(node5);
        expect(lowestCommonAncestor(root, node5, node6)).toBe(node5);
    });

    test('should handle when one node is ancestor of another', () => {
        // Tree:      3
        //           / \
        //          5   1
        //         / \ / \
        //        6  2 0  8
        //          / \
        //         7   4
        const node7 = new TreeNode(7);
        const node4 = new TreeNode(4);
        const node6 = new TreeNode(6);
        const node2 = new TreeNode(2, node7, node4);
        const node0 = new TreeNode(0);
        const node8 = new TreeNode(8);
        const node5 = new TreeNode(5, node6, node2);
        const node1 = new TreeNode(1, node0, node8);
        const root = new TreeNode(3, node5, node1);

        // When p is ancestor of q
        expect(lowestCommonAncestor(root, node5, node7)).toBe(node5);
        expect(lowestCommonAncestor(root, node2, node4)).toBe(node2);
    });

    test('should handle root as one of the nodes', () => {
        // Simple tree: 1
        //             /
        //            2
        const node2 = new TreeNode(2);
        const root = new TreeNode(1, node2);

        expect(lowestCommonAncestor(root, root, node2)).toBe(root);
    });

    test('should handle two-node tree', () => {
        // Tree: 1
        //      /
        //     2
        const node2 = new TreeNode(2);
        const root = new TreeNode(1, node2);

        expect(lowestCommonAncestor(root, root, node2)).toBe(root);
    });

    test('should handle single node tree', () => {
        const root = new TreeNode(1);
        expect(lowestCommonAncestor(root, root, root)).toBe(root);
    });

    test('should handle nodes in same subtree', () => {
        // Tree:      1
        //           / \
        //          2   3
        //         / \
        //        4   5
        const node4 = new TreeNode(4);
        const node5 = new TreeNode(5);
        const node2 = new TreeNode(2, node4, node5);
        const node3 = new TreeNode(3);
        const root = new TreeNode(1, node2, node3);

        expect(lowestCommonAncestor(root, node4, node5)).toBe(node2);
    });

    test('should handle deep tree', () => {
        // Tree:        1
        //            /   \
        //           2     3
        //          /
        //         4
        //        /
        //       5
        const node5 = new TreeNode(5);
        const node4 = new TreeNode(4, node5);
        const node2 = new TreeNode(2, node4);
        const node3 = new TreeNode(3);
        const root = new TreeNode(1, node2, node3);

        expect(lowestCommonAncestor(root, node5, node3)).toBe(root);
        expect(lowestCommonAncestor(root, node5, node4)).toBe(node4);
    });
});