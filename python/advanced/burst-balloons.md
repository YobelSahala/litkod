### Burst Balloons

You are given `n` balloons, indexed from `0` to `n - 1`. Each balloon is painted with a number on it represented by an array `nums`. You are asked to burst all the balloons.

If you burst the `i`th balloon, you will get `nums[left] * nums[i] * nums[right]` coins. Here `left` and `right` are adjacent indices of `i` after the `i`th balloon is burst. Note that `left` and `right` are not necessarily `i-1` and `i+1` because some balloons might have been burst already.

Return *the maximum coins you can collect by bursting the balloons wisely*.

**Example 1:**

```
Input: nums = [3,1,5,8]
Output: 167
Explanation: 
nums = [3,1,5,8] --> [3,5,8] (burst 1) --> [3,8] (burst 5) --> [8] (burst 3) --> [] (burst 8)
coins =  3*1*5    +   3*5*8   +  1*3*8   +  1*8*1   = 167
```

**Example 2:**

```
Input: nums = [1,5]
Output: 10
```

**Constraints:**

*   `n == nums.length`
*   `1 <= n <= 500`
*   `0 <= nums[i] <= 100`
