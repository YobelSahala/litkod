### Binary Search: Step-by-Step Solution

Binary search is a highly efficient algorithm for finding an item from a **sorted** list of items. It works by repeatedly dividing the search interval in half. The key constraint is that the array must be sorted.

#### 1. Understanding the Algorithm

The core idea is to eliminate half of the search space in each step.

1.  Compare the `target` value with the middle element of the array.
2.  If the `target` matches the middle element, we have found the item, and we return its index.
3.  If the `target` is greater than the middle element, it can only lie in the right half of the array. So, we discard the left half and repeat the search on the right half.
4.  If the `target` is less than the middle element, it can only lie in the left half. We discard the right half and repeat the search on the left half.

We repeat this process until the `target` is found or the search interval is empty.

#### 2. The Iterative Approach

We can implement this using two pointers, `left` and `right`, to define our search interval.

1.  Initialize `left = 0` and `right = nums.length - 1`.
2.  Loop as long as `left <= right`. This condition is important to ensure the search space is valid.
    a. Calculate the middle index: `mid = Math.floor((left + right) / 2)`.
    b. Get the middle element `midVal = nums[mid]`.
    c. Compare `midVal` with the `target`:
        - If `midVal === target`, we found it. Return `mid`.
        - If `midVal < target`, the target must be in the right half. We update our search space by moving the left pointer: `left = mid + 1`.
        - If `midVal > target`, the target must be in the left half. We update our search space by moving the right pointer: `right = mid - 1`.
3.  If the loop finishes without finding the target (i.e., `left` becomes greater than `right`), it means the target is not in the array. Return `-1`.

This algorithm has a time complexity of O(log n) because we halve the search space in each iteration. The space complexity is O(1) for the iterative approach.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // Use Math.floor to get an integer index
        const mid = Math.floor(left + (right - left) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
};
```
