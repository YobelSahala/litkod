### Missing Number: Step-by-Step Solution

This problem asks us to find the single missing number in an array that contains `n` distinct numbers in the range `[0, n]`. This is a common problem that can be solved in several ways.

#### 1. Summation Approach

We know that the sum of all numbers from `0` to `n` can be calculated using the formula `n * (n + 1) / 2`. If we calculate this expected sum and then subtract the sum of the numbers present in the given array, the result will be the missing number.

1.  Calculate `n`, which is the length of the `nums` array.
2.  Calculate the `expected_sum = n * (n + 1) / 2`.
3.  Calculate the `actual_sum` of all numbers in the `nums` array.
4.  The missing number is `expected_sum - actual_sum`.

This approach has a time complexity of O(n) for summing the elements and a space complexity of O(1).

#### 2. XOR Approach

This is a very elegant solution that leverages the properties of the XOR bitwise operator. The key properties are:
- `a ^ a = 0`
- `a ^ 0 = a`
- XOR is commutative and associative (`a ^ b ^ c = a ^ (b ^ c)`)

If we XOR all the numbers from `0` to `n` (the complete range) with all the numbers in the `nums` array, the numbers that appear twice will cancel each other out (XOR to 0), leaving only the missing number.

1.  Initialize `missing = n` (or `0`, and then XOR with `n` at the end). We can initialize it with `n` because `n` is part of the expected range `[0, n]` but is not necessarily in the `nums` array.
2.  Iterate from `0` to `n-1` (or `n` if `missing` is initialized to `0`). In each iteration, XOR `missing` with the current index `i` and the corresponding number `nums[i]`.
    `missing = missing ^ i ^ nums[i]`
3.  After the loop, `missing` will hold the value of the missing number.

This approach has a time complexity of O(n) and a space complexity of O(1).

#### 3. Sorting Approach

If we sort the array, we can then iterate through it and check if each number matches its index. The first mismatch will reveal the missing number.

1.  Sort the `nums` array. This takes O(n log n) time.
2.  Iterate from `i = 0` to `n-1`.
3.  If `nums[i]` is not equal to `i`, then `i` is the missing number. Return `i`.
4.  If the loop completes, it means the missing number is `n` (the last number in the range).

This approach has a time complexity of O(n log n) due to sorting and a space complexity of O(1) (if sorting in-place).

### Python Code Solution

```python
# --- Summation Approach ---
def missing_number_sum(nums):
    n = len(nums)
    expected_sum = n * (n + 1) // 2
    actual_sum = sum(nums)
    return expected_sum - actual_sum

# --- XOR Approach ---
def missing_number_xor(nums):
    n = len(nums)
    missing = n # Initialize with n, as it's part of the range [0, n]

    for i in range(n):
        missing ^= i # XOR with expected number
        missing ^= nums[i] # XOR with actual number
        
    return missing

# --- Sorting Approach ---
def missing_number_sorting(nums):
    nums.sort()
    n = len(nums)
    
    # Check if 0 is missing
    if nums[0] != 0:
        return 0
    
    # Check for missing numbers in between
    for i in range(1, n):
        if nums[i] != nums[i-1] + 1:
            return nums[i-1] + 1
            
    # If no number is missing from 0 to n-1, then n is missing
    return n

```
