### Single Number: Step-by-Step Solution

This problem is a fascinating bitwise manipulation puzzle. We are given an array where every element appears twice, except for one unique element. We need to find that unique element, and we must do it in linear time (O(n)) and with constant extra space (O(1)).

#### 1. The Challenge

The constraints are what make this problem interesting. A hash map could solve this in O(n) time, but it would require O(n) space to store the counts of each number, which violates the constant space requirement.

#### 2. The Bitwise XOR Approach

The key to solving this efficiently lies in the properties of the **Bitwise XOR** operator (`^`).

XOR has two critical properties for this problem:
1.  `x ^ x = 0` (XORing a number with itself results in zero).
2.  `x ^ 0 = x` (XORing a number with zero results in the number itself).
3.  `x ^ y = y ^ x` (XOR is commutative).

Imagine we XOR all the numbers in the array together. Every number that appears twice will be XORed with itself. For example, in `[4, 1, 2, 1, 2]`, the operation would be `4 ^ 1 ^ 2 ^ 1 ^ 2`.

Because of the commutative property, we can reorder this to `4 ^ (1 ^ 1) ^ (2 ^ 2)`.

Based on the first property (`x ^ x = 0`), this simplifies to:
`4 ^ 0 ^ 0`

And based on the second property (`x ^ 0 = x`), this further simplifies to:
`4 ^ 0 = 4`

The result is the single, unique number!

#### 3. The Algorithm

1.  Initialize a variable `result` to `0`.
2.  Iterate through each `num` in the `nums` array.
3.  In each iteration, update `result` by XORing it with the current number: `result = result ^ num`.
4.  After the loop has finished, `result` will hold the value of the single, unique element. Return `result`.

This brilliant solution meets both requirements: the time complexity is O(n) because we iterate through the array once, and the space complexity is O(1) because we only use a single extra variable (`result`) to store the accumulated XOR value.

### Python Code Solution

```python
from functools import reduce

def single_number(nums):
    """
    Finds the single element that appears only once in an array.

    Args:
      nums: A list of integers where every element appears twice except for one.

    Returns:
      The single, unique element.
    """
    result = 0
    for num in nums:
        result ^= num
    return result

# A more functional, concise way to write this in Python
def single_number_functional(nums):
    """
    Finds the single number using Python's reduce function.
    """
    return reduce(lambda x, y: x ^ y, nums)

```
