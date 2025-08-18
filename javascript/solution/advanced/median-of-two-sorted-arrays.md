### Median of Two Sorted Arrays: Step-by-Step Solution

This is a classic hard problem that requires a good understanding of binary search and partitions. The key challenge is to achieve the `O(log(m+n))` time complexity.

#### 1. Understanding the Median

The median is the middle value in a sorted dataset. 
- If the total number of elements is **odd**, the median is the single middle element.
- If the total number of elements is **even**, the median is the average of the two middle elements.

If we were to merge the two sorted arrays `nums1` and `nums2` into a single sorted array, we could easily find the median. However, merging them would take O(m+n) time, which doesn't meet the complexity requirement.

#### 2. The Core Idea: Binary Search on Partitions

The trick is to find a partition in both arrays that divides the combined elements into two halves: a "left part" and a "right part", where every element in the left part is less than or equal to every element in the right part.

Let's say we partition `nums1` at index `i` and `nums2` at index `j`. 
- The left part will contain `nums1[0...i-1]` and `nums2[0...j-1]`.
- The right part will contain `nums1[i...m-1]` and `nums2[j...n-1]`.

For this partition to be correct for finding the median, two conditions must be met:

1.  **Equal Halves:** The total number of elements in the left part must be equal to (or one more than, if the total is odd) the total number of elements in the right part. `i + j = Math.floor((m + n + 1) / 2)` (using the floor handles both odd and even cases).
2.  **Order:** The largest element in the left part must be less than or equal to the smallest element in the right part. This simplifies to checking if `max(left_part) <= min(right_part)`. Since the arrays are sorted, this means `nums1[i-1] <= nums2[j]` and `nums2[j-1] <= nums1[i]`. 

#### 3. The Algorithm

We can perform a binary search on the smaller of the two arrays (let's say `nums1`) to find the perfect partition point `i`.

1.  Ensure `nums1` is the smaller array to optimize the binary search range. If not, swap them.
2.  Start a binary search in `nums1`. The search space for the partition index `i` is from `0` to `m`.
3.  In each step of the binary search, pick a partition index `partitionX` (our `i`) in `nums1`. Let `low = 0`, `high = m`.
    a. `partitionX = Math.floor((low + high) / 2)`
    b. From condition 1, calculate the required partition for `nums2`: `partitionY = Math.floor((m + n + 1) / 2) - partitionX`.
    c. Now, identify the four key elements that define our partitions:
        - `maxX`: The maximum element on the left side of the `nums1` partition (`nums1[partitionX - 1]`). Handle edge cases where `partitionX` is 0 by using `Number.NEGATIVE_INFINITY`.
        - `minX`: The minimum element on the right side of the `nums1` partition (`nums1[partitionX]`). Handle edge cases where `partitionX` is `m` by using `Number.POSITIVE_INFINITY`.
        - `maxY`: The maximum element on the left side of the `nums2` partition (`nums2[partitionY - 1]`). Handle edge cases where `partitionY` is 0.
        - `minY`: The minimum element on the right side of the `nums2` partition (`nums2[partitionY]`). Handle edge cases where `partitionY` is `n`.
    d. **Check the partition:**
        - If `maxX <= minY` and `maxY <= minX`, we have found the correct partition.
            - If the total number of elements `(m + n)` is even, the median is `(Math.max(maxX, maxY) + Math.min(minX, minY)) / 2`.
            - If the total is odd, the median is `Math.max(maxX, maxY)`.
        - If `maxX > minY`, it means our `partitionX` is too large. We need to move left in `nums1`. So, `high = partitionX - 1`.
        - If `maxY > minX`, it means our `partitionX` is too small. We need to move right in `nums1`. So, `low = partitionX + 1`.
4.  Repeat the binary search until the condition is met.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minX = (partitionX === m) ? Number.POSITIVE_INFINITY : nums1[partitionX];

        const maxY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minY = (partitionY === n) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted");
};
```
