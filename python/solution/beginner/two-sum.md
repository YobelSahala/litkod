### Two Sum: Step-by-Step Solution

The goal of this problem is to find two numbers in an array that add up to a specific target. We need to return the indices of these two numbers.

#### 1. Understanding the Problem

We are given an array of integers (`nums`) and a target integer (`target`). We need to find two distinct indices, `i` and `j`, such that `nums[i] + nums[j] == target`.

#### 2. Brute-Force Approach

The most straightforward way to solve this is to check every possible pair of numbers in the array.

- We can use two nested loops. The outer loop iterates from the first element to the last, and the inner loop iterates from the next element to the last.
- For each pair of numbers, we check if their sum equals the target.
- If it does, we return their indices.

This approach works, but it's slow. The time complexity would be O(n^2) because of the nested loops, where n is the number of elements in the array. For large arrays, this can be too slow.

#### 3. Optimal Approach: Using a Hash Map

A more efficient approach is to use a hash map (or a dictionary in Python) to store the numbers we've seen so far and their indices.

- We iterate through the array once.
- For each element `num` at index `i`, we calculate the `complement` we need to find: `complement = target - num`.
- We then check if this `complement` already exists as a key in our hash map.
  - If it does, we have found our pair. The first number is the `complement` (whose index is stored in the hash map), and the second number is the current `num`. We can return `[hash_map[complement], i]`.
  - If the `complement` is not in the hash map, it means we haven't seen the other number of the pair yet. We should add the current number `num` and its index `i` to the hash map for future reference.

This approach has a time complexity of O(n) because we only iterate through the array once. The space complexity is O(n) because, in the worst case, we might store all the elements in the hash map.

### Python Code Solution

```python
def two_sum(nums, target):
    """
    Finds two numbers in an array that add up to a target.

    Args:
      nums: A list of integers.
      target: The target integer.

    Returns:
      A list containing the indices of the two numbers.
    """
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i

```
