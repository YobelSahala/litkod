### Contains Duplicate: Step-by-Step Solution

This problem asks us to determine if an array of integers contains any duplicate values. We need to return `true` if a value appears more than once and `false` otherwise.

#### 1. Brute-Force Approach

The most straightforward method is to compare every element with every other element in the array. This can be done with two nested loops. The outer loop picks an element, and the inner loop checks if that element appears again in the rest of the array. This approach has a time complexity of O(n^2), which would be too slow for the given constraints.

#### 2. Sorting Approach

If we sort the array first, any duplicate elements will become adjacent to each other. We can then iterate through the sorted array and check if any element is the same as the one right next to it.

1.  Sort the `nums` array. This takes O(n log n) time.
2.  Iterate through the sorted array from the first element to the second-to-last element.
3.  For each element `nums[i]`, compare it with the next element `nums[i+1]`. If they are equal, we have found a duplicate. Return `true`.
4.  If the loop finishes without finding any duplicates, it means all elements are unique. Return `false`.

This approach is much better, with a time complexity dominated by the sort at O(n log n).

#### 3. Optimal Approach: Using a Hash Set

The most efficient way to solve this is by using a hash set (the `Set` object in JavaScript). A `Set` provides O(1) average time complexity for insertion and lookup.

Here is the algorithm:

1.  Initialize an empty `Set`, `seen`.
2.  Iterate through each `num` in the `nums` array:
    a. For each `num`, check if it is already in our `seen` set using `seen.has(num)`.
    b. If `seen` already has the `num`, it means we have encountered this number before. We have found a duplicate, so we can immediately return `true`.
    c. If `num` is not in `seen`, we add it to the set using `seen.add(num)` to keep track of the numbers we have encountered so far.
3.  If the loop completes without finding any duplicates in the set, it means every element was unique. Return `false`.

This approach has a time complexity of O(n) because we iterate through the array once, and each `Set` operation (add, has) takes O(1) on average. The space complexity is O(n) in the worst case, where all elements are unique and we have to store all of them in the set.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return true;
        }
        seen.add(nums[i]);
    }
    return false;
};

// A more concise, idiomatic way to write the same logic in JS:
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateConcise = function(nums) {
    // A Set can only store unique values.
    // If the size of the Set is less than the length of the original array,
    // it means some elements were discarded, hence there were duplicates.
    return new Set(nums).size < nums.length;
};
```
