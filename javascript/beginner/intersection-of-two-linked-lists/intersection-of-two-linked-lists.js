/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }

    let pA = headA;
    let pB = headB;

    // If pA and pB meet, it's the intersection point or null
    // If they don't meet, they will both become null at the same time
    // after traversing both lists.
    while (pA !== pB) {
        // Move pA to next node, or to headB if it reaches end of listA
        pA = (pA === null) ? headB : pA.next;
        // Move pB to next node, or to headA if it reaches end of listB
        pB = (pB === null) ? headA : pB.next;
    }

    return pA; // pA (or pB) is the intersection node or null
};

module.exports = getIntersectionNode;