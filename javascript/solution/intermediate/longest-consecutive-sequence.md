### Longest Consecutive Sequence: Step-by-Step Solution

This problem asks us to find the length of the longest sequence of consecutive elements in an unsorted array of integers. The challenge is to do this in O(n) time complexity.

#### 1. Brute-Force Approach

A naive approach would be to sort the array first (O(n log n)) and then iterate through it to find the longest consecutive sequence. While this works, the sorting step makes it slower than the required O(n).

#### 2. Optimal Approach: Using a Hash Set

The most efficient way to solve this problem is by using a hash set (or `Set` in JavaScript) to store all the numbers. This allows for O(1) average time complexity for lookups, which is crucial for achieving O(n) overall time.

Here's the intuition:
-   We want to find the *start* of a consecutive sequence. A number `x` is the start of a consecutive sequence if `x-1` is *not* present in the set.
-   Once we find a starting number, we can then check for `x+1`, `x+2`, and so on, to find the length of that consecutive sequence.

Here is the algorithm:

1.  Convert the input `nums` array into a hash set, `numSet`. This allows for O(1) average time lookups. This takes O(n) time.
2.  Initialize `longestStreak = 0`.
3.  Iterate through each `num` in the original `nums` array:
    a. **Check if `num` is the start of a sequence:** Check if `num - 1` is *not* in `numSet`. If `num - 1` is present, it means `num` is part of a longer sequence that started earlier, so we can skip this `num` and continue to the next one.
    b. If `num - 1` is *not* in `numSet`, then `num` is the potential start of a new consecutive sequence.
        i. Initialize `currentNum = num` and `currentStreak = 1`.
        ii. While `numSet.has(currentNum + 1)`:
            - Increment `currentNum` by 1.
            - Increment `currentStreak` by 1.
        iii. Update `longestStreak = Math.max(longestStreak, currentStreak)`.
4.  Return `longestStreak`.

This approach has a time complexity of O(n). Although there's a nested `while` loop, each number in the `numSet` is visited at most twice (once by the outer `for` loop and once by the inner `while` loop). The space complexity is O(n) for the hash set.

### JavaScript Code Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of nums) {
        // Check if the current number is the start of a sequence
        // (i.e., num - 1 is not in the set)
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
```
