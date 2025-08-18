### Remove Duplicates from Sorted Array: Step-by-Step Solution

This problem requires us to modify an array in-place to remove duplicates, such that each unique element appears once, and then return the new length of the unique portion. The key constraints are that the array is sorted and we cannot use extra space.

#### 1. Understanding the Problem

Because the array is sorted, all duplicate elements will be adjacent to each other. This is a critical piece of information. We need to overwrite the duplicate elements with the next unique element we find, effectively condensing the array.

#### 2. The Two-Pointer Approach

This problem is a classic example of the **two-pointer** technique. We can use two pointers to iterate through the array:

1.  `insertPos` (or `slow` pointer): This pointer keeps track of the position where the next unique element should be placed. It starts at index 1, because the first element of the array is always unique by definition.
2.  `i` (or `fast` pointer): This pointer iterates through the array from the second element (`i=1`) to the end, checking for unique elements.

Here is the algorithm:

1.  Handle the edge case: If the array is empty, return 0.
2.  Initialize `insertPos = 1`.
3.  Iterate with the `i` pointer from `1` to `nums.length - 1`.
    a. At each position `i`, compare the current element `nums[i]` with the previous element `nums[i-1]`.
    b. If `nums[i]` is **different** from `nums[i-1]`, it means we have found a new unique element.
    c. We then place this unique element at the `insertPos`: `nums[insertPos] = nums[i]`.
    d. After placing the unique element, we increment `insertPos` to prepare for the next unique element.
4.  If `nums[i]` is the same as `nums[i-1]`, we do nothing but increment `i` (which the loop does automatically). The `insertPos` does not move, as we are waiting to find the next unique element to place there.
5.  After the loop finishes, `insertPos` will be equal to the number of unique elements (`k`). Return `insertPos`.

This approach works because the `insertPos` only moves when a new unique element is found, and it overwrites any duplicates that were between the last unique element and the current one.

This has a time complexity of O(n) because we iterate through the array once. The space complexity is O(1) because we modify the array in-place.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    // insertPos is the index where the next unique element should be placed.
    let insertPos = 1;

    for (let i = 1; i < nums.length; i++) {
        // If we find a new unique element
        if (nums[i] !== nums[i - 1]) {
            // Place it at the insertPos
            nums[insertPos] = nums[i];
            // Increment the insertPos
            insertPos++;
        }
    }

    return insertPos;
};
```
