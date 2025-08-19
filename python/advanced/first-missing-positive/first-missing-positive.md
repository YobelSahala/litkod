### First Missing Positive

Given an unsorted integer array `nums`, return *the smallest missing positive integer*.

You must implement an algorithm that runs in `O(n)` time and uses `O(1)` extra space.

**Example 1:**

```
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,3] are 1, 2, 3. 3 is the smallest missing positive integer.
```

**Example 2:**

```
Input: nums = [3,4,-1,1]
Output: 2
Explanation: The numbers in the range [1,4] are 1, 2, 3, 4. 2 is the smallest missing positive integer.
```

**Example 3:**

```
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The numbers in the range [1,12] are 1, 2, ..., 12. 1 is the smallest missing positive integer.
```

**Constraints:**

*   `1 <= nums.length <= 5 * 10^5`
*   `-2^31 <= nums[i] <= 2^31 - 1`
