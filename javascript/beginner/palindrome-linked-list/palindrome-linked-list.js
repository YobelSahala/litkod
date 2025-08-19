/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null || head.next === null) {
        return true;
    }

    // 1. Find the middle of the list
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the second half
    let prev = null;
    let current = slow;
    while (current !== null) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    // `prev` is now the head of the reversed second half

    // 3. Compare the first and reversed second halves
    let firstHalfPtr = head;
    let secondHalfPtr = prev;
    while (secondHalfPtr !== null) {
        if (firstHalfPtr.val !== secondHalfPtr.val) {
            return false;
        }
        firstHalfPtr = firstHalfPtr.next;
        secondHalfPtr = secondHalfPtr.next;
    }

    return true;
};

module.exports = isPalindrome;