### Reverse Bits: Step-by-Step Solution

This problem requires us to reverse the bits of a 32-bit unsigned integer. For example, if the bit at position `i` in the input is `1`, then the bit at position `31-i` in the output should be `1`.

#### 1. String Manipulation Approach

A straightforward, though less fundamental, approach is to convert the integer to its binary string representation, reverse the string, and then convert it back to an integer.

1.  Convert the integer `n` to its 32-bit binary string representation. Make sure to pad with leading zeros to ensure it has a length of 32.
2.  Reverse this binary string.
3.  Convert the reversed binary string back into an integer.

While this works, it's often not what the interviewer is looking for, as the problem is designed to test your understanding of bitwise operations.

#### 2. Optimal Approach: Bit-by-Bit Reversal

This approach builds the reversed integer bit by bit, using bitwise operations. We will iterate 32 times, once for each bit of the integer.

Here is the algorithm:

1.  Initialize a `result` variable to `0`. This will store our reversed integer.
2.  Loop 32 times (for a 32-bit integer).
    a. In each iteration `i`, first, we need to make space in our `result` for the next bit. We do this by left-shifting the `result` by 1: `result <<= 1`.
    b. Next, we need to get the *last* bit of the input integer `n`. We can do this using the bitwise AND operator: `last_bit = n & 1`.
    c. Now, we add this `last_bit` to our `result`. We can use the bitwise OR operator for this: `result |= last_bit`.
    d. Finally, we need to process the next bit of `n` in the following iteration. We do this by right-shifting `n` by 1: `n >>= 1`.
3.  After 32 iterations, `result` will hold the fully reversed bits of the original `n`. Return `result`.

Let's trace with an example, say `n = 1` (binary `...001`):
- **i=0:** `result = 0`. `result <<= 1` -> `0`. `last_bit = 1 & 1 = 1`. `result |= 1` -> `1`. `n >>= 1` -> `0`.
- **i=1:** `result = 1`. `result <<= 1` -> `2`. `last_bit = 0 & 1 = 0`. `result |= 0` -> `2`. `n >>= 1` -> `0`.
- **i=2:** `result = 2`. `result <<= 1` -> `4`. `last_bit = 0 & 1 = 0`. `result |= 0` -> `4`. `n >>= 1` -> `0`.
- ...and so on. The single `1` bit is effectively moved from the 0th position to the 31st position.

This approach has a time complexity of O(1) because the loop runs a fixed 32 times, regardless of the input value. The space complexity is also O(1).

### Python Code Solution

```python
def reverse_bits(n):
    """
    Reverses the bits of a 32-bit unsigned integer.

    Args:
      n: A 32-bit unsigned integer.

    Returns:
      The integer with its bits reversed.
    """
    result = 0
    for i in range(32):
        # 1. Left shift result to make space for the next bit
        result <<= 1
        
        # 2. Get the last bit of n
        last_bit = n & 1
        
        # 3. Add this last bit to the result
        result |= last_bit
        
        # 4. Right shift n to process the next bit
        n >>= 1
        
    return result

# --- String manipulation approach (for comparison) ---
def reverse_bits_string(n):
    # Get binary representation, remove '0b' prefix
    binary_str = bin(n)[2:]
    # Pad with leading zeros to 32 bits
    padded_str = binary_str.zfill(32)
    # Reverse the string
    reversed_str = padded_str[::-1]
    # Convert back to integer
    return int(reversed_str, 2)

```
