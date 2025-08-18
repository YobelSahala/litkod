### Reverse Bits: Step-by-Step Solution

This problem requires us to reverse the bits of a 32-bit unsigned integer. For example, if the bit at position `i` in the input is `1`, then the bit at position `31-i` in the output should be `1`.

#### 1. String Manipulation Approach

A straightforward, though less fundamental, approach is to convert the integer to its binary string representation, reverse the string, and then convert it back to an integer. This is often not what the interviewer is looking for, as the problem is designed to test your understanding of bitwise operations.

#### 2. Optimal Approach: Bit-by-Bit Reversal

This approach builds the reversed integer bit by bit, using bitwise operations. We will iterate 32 times, once for each bit of the integer.

Here is the algorithm:

1.  Initialize a `result` variable to `0`. This will store our reversed integer.
2.  Loop 32 times (for a 32-bit integer).
    a. In each iteration `i`, first, we need to make space in our `result` for the next bit. We do this by left-shifting the `result` by 1: `result <<= 1`. In JavaScript, bitwise operations work on 32-bit signed integers, but the logic holds.
    b. Next, we need to get the *last* bit of the input integer `n`. We can do this using the bitwise AND operator: `lastBit = n & 1`.
    c. Now, we add this `lastBit` to our `result`. We can use the bitwise OR operator for this: `result |= lastBit`.
    d. Finally, we need to process the next bit of `n` in the following iteration. We do this by right-shifting `n` by 1. It's important to use the **unsigned right shift `>>>`** to avoid issues with the sign bit: `n >>>= 1`.
3.  After 32 iterations, `result` will hold the fully reversed bits of the original `n`. Return `result`.

Let's trace with an example, say `n = 1` (binary `...001`):
- **i=0:** `result = 0`. `result <<= 1` -> `0`. `lastBit = 1 & 1 = 1`. `result |= 1` -> `1`. `n >>>= 1` -> `0`.
- **i=1:** `result = 1`. `result <<= 1` -> `2`. `lastBit = 0 & 1 = 0`. `result |= 0` -> `2`. `n >>>= 1` -> `0`.
- **i=2:** `result = 2`. `result <<= 1` -> `4`. `lastBit = 0 & 1 = 0`. `result |= 0` -> `4`. `n >>>= 1` -> `0`.
- ...and so on. The single `1` bit is effectively moved from the 0th position to the 31st position.

This approach has a time complexity of O(1) because the loop runs a fixed 32 times, regardless of the input value. The space complexity is also O(1).

### JavaScript Code Solution

```javascript
/**
 * @param {number} n - a 32-bit unsigned integer
 * @return {number} - a 32-bit unsigned integer
 */
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        // 1. Left shift result to make space for the next bit
        result <<= 1;

        // 2. Get the last bit of n
        const lastBit = n & 1;

        // 3. Add this last bit to the result
        result |= lastBit;

        // 4. Unsigned right shift n to process the next bit
        n >>>= 1;
    }
    // The final result needs to be treated as unsigned
    return result >>> 0;
};
```
