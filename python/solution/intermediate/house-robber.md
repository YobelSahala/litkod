### House Robber: Step-by-Step Solution

This problem asks us to find the maximum amount of money we can rob from a street of houses without robbing adjacent houses. If two adjacent houses are robbed, an alarm is triggered.

#### 1. Understanding the Problem

This is a classic dynamic programming problem. For each house, we have two choices: either rob it or don't rob it. The decision for the current house depends on the decisions made for the previous houses.

#### 2. Dynamic Programming Approach

Let `dp[i]` be the maximum amount of money that can be robbed from the first `i` houses.

Here is the algorithm:

1.  Handle base cases:
    - If `nums` is empty, return 0.
    - If `nums` has one house, return `nums[0]`.
2.  Create a `dp` array of the same size as `nums`.
3.  Initialize `dp[0] = nums[0]`.
4.  Initialize `dp[1] = max(nums[0], nums[1])` (rob the first or the second, whichever is greater).
5.  Iterate `i` from `2` to `len(nums) - 1`:
    a. For each house `i`, the maximum amount we can rob is the maximum of two options:
        i. Rob house `i`: In this case, we cannot rob house `i-1`. So, the total amount would be `nums[i] + dp[i-2]` (money from current house + max money from houses up to `i-2`).
        ii. Don't rob house `i`: In this case, the total amount would be `dp[i-1]` (max money from houses up to `i-1`).
    b. So, `dp[i] = max(nums[i] + dp[i-2], dp[i-1])`.
6.  The answer is `dp[len(nums) - 1]`.

This approach has a time complexity of O(n) because we iterate through the array once. The space complexity is O(n) for the `dp` array.

#### 3. Space Optimization

Notice that `dp[i]` only depends on `dp[i-1]` and `dp[i-2]`. This means we don't need to store the entire `dp` array. We only need to keep track of the maximum amounts robbed from the previous two houses.

1.  Handle base cases as above.
2.  Initialize `rob1 = 0` (max money from house `i-2`)
3.  Initialize `rob2 = 0` (max money from house `i-1`)
4.  Iterate through each `num` in `nums`:
    a. Calculate `temp = max(num + rob1, rob2)`.
    b. Update `rob1 = rob2`.
    c. Update `rob2 = temp`.
5.  Return `rob2`.

This optimized approach has a time complexity of O(n) and a space complexity of O(1).

### Python Code Solution

```python
# --- Space Optimized DP Approach ---
def rob(nums):
    """
    Calculates the maximum amount of money that can be robbed without alerting the police.

    Args:
      nums: A list of integers representing money in each house.

    Returns:
      The maximum amount of money that can be robbed.
    """
    rob1, rob2 = 0, 0

    # rob1 = max money from nums[i-2]
    # rob2 = max money from nums[i-1]
    # num = nums[i]

    for num in nums:
        temp = max(num + rob1, rob2)
        rob1 = rob2
        rob2 = temp
        
    return rob2

```
