/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const nextNode = current.next; // Store the next node
        current.next = prev;          // Reverse the current node's pointer
        prev = current;               // Move prev and current one step forward
        current = nextNode;
    }
    
    return prev;
};

module.exports = reverseList;