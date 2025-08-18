### 3Sum: Step-by-Step Solution

This problem asks us to find all unique triplets in an array `nums` that sum up to zero. The challenge lies in efficiently finding these triplets and avoiding duplicate results.

#### 1. Brute-Force Approach

The most straightforward approach is to use three nested loops to check every possible combination of three numbers. This would have a time complexity of O(n^3), which is too slow for the given constraints.

#### 2. Optimal Approach: Sorting + Two Pointers

The most efficient and commonly accepted solution involves sorting the array first and then using a two-pointer technique.

Here's the intuition:
- **Sorting:** Sorting the array allows us to easily skip duplicate elements and efficiently move pointers to find the desired sum.
- **Fix one element:** We can iterate through the array, fixing one element (`nums[i]`) at a time. Then, the problem reduces to finding two other elements (`nums[j]` and `nums[k]`) in the *remaining* part of the array such that `nums[j] + nums[k] == -nums[i]`.
- **Two Pointers:** For the remaining part of the array (from `i+1` to the end), we can use two pointers, `left` and `right`, to find the pair that sums to `-nums[i]`. This is similar to the "Two Sum" problem, but with the added complexity of handling duplicates and moving pointers based on the sum.

Here is the algorithm:

1.  **Sort the array:** Sort `nums` in non-decreasing order. This takes O(n log n) time.
2.  Initialize an empty list `result` to store the unique triplets.
3.  Iterate through the array with a pointer `i` from `0` to `len(nums) - 3` (since we need at least two more elements after `i`).
    a. **Skip duplicates for `nums[i]`:** If `i > 0` and `nums[i] == nums[i-1]`, continue to the next iteration. This ensures we don't process the same `nums[i]` multiple times.
    b. Initialize two pointers: `left = i + 1` and `right = len(nums) - 1`.
    c. Enter a `while left < right` loop:
        i. Calculate the `current_sum = nums[i] + nums[left] + nums[right]`.
        ii. **If `current_sum == 0`:**
            - We found a triplet! Add `[nums[i], nums[left], nums[right]]` to `result`.
            - **Skip duplicates for `nums[left]`:** Increment `left` while `left < right` and `nums[left] == nums[left+1]`.
            - **Skip duplicates for `nums[right]`:** Decrement `right` while `left < right` and `nums[right] == nums[right-1]`.
            - Move both pointers: `left += 1` and `right -= 1`.
        iii. **If `current_sum < 0`:** The sum is too small. We need a larger sum, so increment `left`.
        iv. **If `current_sum > 0`:** The sum is too large. We need a smaller sum, so decrement `right`.
4.  Return `result`.

This approach has a time complexity of O(n^2) (O(n log n) for sorting + O(n^2) for the nested loops) and a space complexity of O(1) (excluding the space for the result list).

### Python Code Solution

```python
def three_sum(nums):
    """
    Finds all unique triplets in the array that sum to zero.

    Args:
      nums: A list of integers.

    Returns:
      A list of lists, where each inner list is a unique triplet.
    """
    nums.sort()
    result = []
    n = len(nums)

    for i in range(n - 2):
        # Skip duplicate for the first element of the triplet
        if i > 0 and nums[i] == nums[i - 1]:
            continue

        left, right = i + 1, n - 1

        while left < right:
            current_sum = nums[i] + nums[left] + nums[right]

            if current_sum == 0:
                result.append([nums[i], nums[left], nums[right]])

                # Skip duplicates for the second element
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                # Skip duplicates for the third element
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1

                left += 1
                right -= 1
            elif current_sum < 0:
                left += 1
            else: # current_sum > 0
                right -= 1
                
    return result

```
