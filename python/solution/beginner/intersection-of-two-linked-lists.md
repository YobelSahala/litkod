### Intersection of Two Linked Lists: Step-by-Step Solution

This problem asks us to find the node where two singly linked lists intersect. The intersection is defined by reference, not by value. This means we are looking for the exact same node object that exists in both lists.

#### 1. Hash Set Approach

A simple approach is to store all the nodes of one list in a hash set and then iterate through the second list to see if any of its nodes exist in the set.

1.  Create an empty hash set, `nodes_in_A`.
2.  Traverse `listA` from `headA` to the end. Add every node (by reference) to the `nodes_in_A` set.
3.  Now, traverse `listB` from `headB` to the end.
4.  For each node in `listB`, check if it is present in `nodes_in_A`. The first node that is found in the set is the intersection point. Return it.
5.  If the end of `listB` is reached without finding a common node, there is no intersection. Return `None`.

This approach has a time complexity of O(m + n) and a space complexity of O(m) (or O(n)), where m and n are the lengths of the lists.

#### 2. Optimal Approach: Two Pointers

This is a very clever approach that uses two pointers and avoids the need for extra space.

The core idea is that if we traverse both lists, they will have a common path from the intersection point to the end. If the lists have different lengths, the pointers will not align. To solve this, we can make both pointers travel the same total distance. We achieve this by having each pointer traverse its own list and then switch to the head of the other list.

Let `lenA` be the length of list A and `lenB` be the length of list B.
- Pointer `pA` travels `lenA` and then `lenB`.
- Pointer `pB` travels `lenB` and then `lenA`.

Both pointers travel a total distance of `lenA + lenB`. By the time they have both completed this distance, they are guaranteed to meet at the intersection point. If there is no intersection, they will both reach the end (`None`) at the same time and be equal, correctly terminating the loop.

Here is the algorithm:

1.  Initialize two pointers, `pA = headA` and `pB = headB`.
2.  Loop as long as `pA` is not equal to `pB`.
    a. In the loop, advance `pA` one step. If `pA` reaches the end of its list (`None`), redirect it to the head of the other list: `pA = headB`.
    b. Similarly, advance `pB` one step. If `pB` reaches the end of its list (`None`), redirect it to the head of the other list: `pB = headA`.
3.  When the loop terminates, `pA` and `pB` will be equal. This will either be the intersection node or `None` if the lists do not intersect. Return `pA` (or `pB`).

This approach has a time complexity of O(m + n) and a space complexity of O(1).

### Python Code Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

def get_intersection_node(headA, headB):
    """
    Finds the intersection node of two linked lists.

    Args:
      headA: The head of the first linked list.
      headB: The head of the second linked list.

    Returns:
      The intersection node, or None if there is no intersection.
    """
    if not headA or not headB:
        return None

    pA = headA
    pB = headB

    while pA is not pB:
        # If pA reaches the end of its list, redirect it to the head of B
        pA = pA.next if pA else headB
        # If pB reaches the end of its list, redirect it to the head of A
        pB = pB.next if pB else headA

    return pA

```
