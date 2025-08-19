/**
 * Definition for singly-linked list.
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode();
    let tail = dummy;

    let p1 = list1;
    let p2 = list2;

    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            tail.next = p1;
            p1 = p1.next;
        } else {
            tail.next = p2;
            p2 = p2.next;
        }
        tail = tail.next;
    }

    // Append the remaining nodes
    if (p1 !== null) {
        tail.next = p1;
    } else if (p2 !== null) {
        tail.next = p2;
    }

    return dummy.next;
};

module.exports = { mergeTwoLists, ListNode };