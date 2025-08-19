/**
 * Definition for a Node.
 */
class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = (next === undefined ? null : next);
        this.random = (random === undefined ? null : random);
    }
}

// Using a Hash Map approach
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }

    const oldToNew = new Map(); // Map from old node to new node

    // First pass: Create new nodes and store mapping
    let current = head;
    while (current) {
        oldToNew.set(current, new Node(current.val));
        current = current.next;
    }

    // Second pass: Assign next and random pointers for new nodes
    current = head;
    while (current) {
        const newNode = oldToNew.get(current);
        newNode.next = oldToNew.get(current.next) || null; // Use || null to handle undefined/null
        newNode.random = oldToNew.get(current.random) || null; // Use || null to handle undefined/null
        current = current.next;
    }

    return oldToNew.get(head);
};

module.exports = copyRandomList;