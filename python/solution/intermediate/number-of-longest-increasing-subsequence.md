### Number of Longest Increasing Subsequence: Step-by-Step Solution

This problem is an extension of the Longest Increasing Subsequence (LIS) problem. Here, we need to not only find the length of the LIS but also count how many such subsequences exist.

#### 1. Understanding the Problem

For `nums = [1,3,5,4,7]`, the LIS length is 4. The LIS are `[1,3,5,7]` and `[1,3,4,7]`. So the answer is 2.

This problem requires dynamic programming, similar to the LIS length problem, but we need to store more information.

#### 2. Dynamic Programming Approach

We will use two DP arrays:
- `dp_len[i]`: The length of the longest increasing subsequence ending at index `i`.
- `dp_count[i]`: The number of longest increasing subsequences ending at index `i`.

Here is the algorithm:

1.  Initialize `dp_len` and `dp_count` arrays, both of size `n` (length of `nums`).
    - Fill `dp_len` with `1`s (each element itself is an LIS of length 1).
    - Fill `dp_count` with `1`s (there's 1 way to form an LIS of length 1 with just that element).
2.  Initialize `max_len = 0` and `ans_count = 0`.
3.  Iterate `i` from `0` to `n - 1`:
    a. For each `nums[i]`, iterate `j` from `0` to `i - 1`:
        i. If `nums[i] > nums[j]` (meaning `nums[i]` can extend the subsequence ending at `nums[j]`):
            - **If `dp_len[j] + 1 > dp_len[i]`:** This means we found a *new* longer LIS ending at `i`. Update `dp_len[i] = dp_len[j] + 1` and set `dp_count[i] = dp_count[j]` (because all LIS of this new length come from `j`).
            - **Else if `dp_len[j] + 1 == dp_len[i]`:** This means we found another LIS of the *same* length ending at `i`. Add the count from `j` to `dp_count[i]`: `dp_count[i] += dp_count[j]`.
    b. After checking all `j` for current `i`:
        - **Update `max_len` and `ans_count`:**
            - If `dp_len[i] > max_len`: We found a new overall longest length. Update `max_len = dp_len[i]` and `ans_count = dp_count[i]`.
            - Else if `dp_len[i] == max_len`: We found another LIS of the overall longest length. Add `dp_count[i]` to `ans_count`.
4.  Return `ans_count`.

This approach has a time complexity of O(n^2) due to the nested loops. The space complexity is O(n) for the two DP arrays.

### Python Code Solution

```python
def find_number_of_lis(nums):
    """
    Finds the number of longest increasing subsequences.

    Args:
      nums: A list of integers.

    Returns:
      The number of longest increasing subsequences.
    """
    n = len(nums)
    if n == 0:
        return 0

    dp_len = [1] * n    # dp_len[i] = length of LIS ending at nums[i]
    dp_count = [1] * n  # dp_count[i] = number of LIS ending at nums[i]

    max_len = 0
    ans_count = 0

    for i in range(n):
        for j in range(i):
            if nums[i] > nums[j]:
                if dp_len[j] + 1 > dp_len[i]:
                    dp_len[i] = dp_len[j] + 1
                    dp_count[i] = dp_count[j]
                elif dp_len[j] + 1 == dp_len[i]:
                    dp_count[i] += dp_count[j]
        
        # Update overall max_len and ans_count
        if dp_len[i] > max_len:
            max_len = dp_len[i]
            ans_count = dp_count[i]
        elif dp_len[i] == max_len:
            ans_count += dp_count[i]
            
    return ans_count

```
