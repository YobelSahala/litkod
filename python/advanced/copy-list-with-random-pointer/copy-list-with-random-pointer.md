### Copy List with Random Pointers

A linked list of `n` nodes is given such that each node contains an additional random pointer, which could point to any node in the list, or `null`.

Construct a **deep copy** of the list. The deep copy should consist of exactly `n` brand new nodes, where each new node has its `val` and `next` pointer set to the same values as the original node. The `random` pointer of the new nodes should point to new nodes in the copied list such that if the original `random` pointer pointed to the `j`th node, the new `random` pointer should point to the `j`th node as well.

Return *the head of the copied linked list*.

The linked list is represented in the input/output as a list of `n` nodes. Each node is represented as a pair of `[val, random_index]` where:

*   `val`: an integer representing `Node.val`
*   `random_index`: the index of the node (from `0` to `n-1`) that the `random` pointer points to, or `null` if it does not point to any node.

**Example 1:**

![image](https://assets.leetcode.com/uploads/2020/08/29/copy-list-random-1.jpg)

```
Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
```

**Example 2:**

![image](https://assets.leetcode.com/uploads/2020/08/29/copy-list-random-2.jpg)

```
Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
```

**Example 3:**

![image](https://assets.leetcode.com/uploads/2020/08/29/copy-list-random-3.jpg)

```
Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
```

**Constraints:**

*   `0 <= n <= 1000`
*   `-10^4 <= Node.val <= 10^4`
*   `Node.random` is `null` or points to an earlier node in the list.
