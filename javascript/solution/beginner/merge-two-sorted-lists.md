### Merge Two Sorted Lists: Step-by-Step Solution

This problem involves merging two sorted linked lists into a single sorted linked list. The key is to efficiently combine the nodes while maintaining the sorted order.

#### 1. Understanding the Problem

We are given the heads of two linked lists that are already sorted. We need to build a new sorted list that contains all the nodes from both input lists. The relative order of elements from the same list should be preserved.

#### 2. Iterative Approach with a Dummy Node

A clean and common way to solve this is to use a dummy head node for the new list. This dummy node simplifies the code because we don't have to handle the special case of inserting into an empty list.

- We'll maintain a `tail` pointer that always points to the last node in our newly formed list.
- We'll also have pointers to the current nodes in `list1` and `list2`.

Here is the algorithm:

1.  Create a `dummy` node to serve as the starting point of the merged list. Initialize a `tail` pointer to this `dummy` node.
2.  Initialize two pointers, `p1 = list1` and `p2 = list2`, to traverse the input lists.
3.  Loop as long as both `p1` and `p2` are not `null`:
    a. Compare the values of the nodes `p1.val` and `p2.val`.
    b. If `p1.val <= p2.val`, it means the node from `list1` should come next. So, we set `tail.next = p1` and advance the `p1` pointer: `p1 = p1.next`.
    c. Otherwise, the node from `list2` should come next. Set `tail.next = p2` and advance the `p2` pointer: `p2 = p2.next`.
    d. In either case, we must advance the `tail` pointer to the node we just added: `tail = tail.next`.
4.  After the loop, one of the lists might still have remaining nodes. We simply append the rest of the non-empty list to our merged list. We can do this by checking `if (p1)` or `if (p2)` and setting `tail.next` accordingly.
5.  The merged list starts *after* our `dummy` node. So, we return `dummy.next`.

This approach has a time complexity of O(m + n), where m and n are the lengths of the two lists, because we visit each node once. The space complexity is O(1) because we are just rearranging the existing nodes and using a few extra pointers.

### JavaScript Code Solution

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
```
