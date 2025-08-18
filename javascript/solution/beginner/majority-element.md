### Majority Element: Step-by-Step Solution

The majority element is the element that appears more than `n / 2` times in an array of size `n`. A key guarantee in this problem is that the majority element always exists.

#### 1. Hash Map Approach

A straightforward way to solve this is to count the occurrences of each element using a hash map (`Map` or plain `Object`).

1.  Create a hash map to store the frequency of each number.
2.  Iterate through the `nums` array. For each `num`, increment its count in the hash map.
3.  As you iterate, if the count of any `num` exceeds `n / 2`, you have found the majority element. Return it.

This approach is easy to understand and has a time complexity of O(n) and a space complexity of O(n) in the worst case (though it would be O(k) where k is the number of unique elements).

#### 2. Sorting Approach

If we sort the array, the majority element is guaranteed to be the element at the middle index (`n / 2`). Why? Because if an element appears more than `n / 2` times, it must occupy the middle position once the array is sorted.

1.  Sort the `nums` array. This takes O(n log n) time.
2.  Return the element at index `Math.floor(nums.length / 2)`.

This is a very concise solution, but its time complexity is not as optimal as the next approach.

#### 3. Optimal Approach: Boyer-Moore Voting Algorithm

This is a clever and highly efficient algorithm designed specifically for this problem. It finds the majority element in linear time and constant space.

The intuition is that if we have a majority element, it will outnumber all other elements combined. The algorithm works by maintaining a `candidate` for the majority element and a `count`.

Here is the algorithm:

1.  Initialize `candidate = null` and `count = 0`.
2.  Iterate through each `num` in the `nums` array:
    a. If `count` is `0`, it means we don't have a current candidate (or the previous candidate was "cancelled out"). Set the current `num` as the new `candidate` and set `count` to `1`.
    b. If the current `num` is the same as our `candidate`, increment `count`.
    c. If the current `num` is different from our `candidate`, decrement `count`.
3.  After the loop, the `candidate` variable will hold the majority element. Return `candidate`.

This works because the count for the majority element will always end up being positive, as it appears more than `n / 2` times and cannot be fully cancelled out by the other elements.

This algorithm has a time complexity of O(n) and a space complexity of O(1), making it the optimal solution.

### JavaScript Code Solution

```javascript
// --- Sorting Approach ---
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementSorting = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
};

// --- Boyer-Moore Voting Algorithm ---
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElementBoyerMoore = function(nums) {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};
```
