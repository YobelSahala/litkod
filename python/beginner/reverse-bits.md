### Reverse Bits

Reverse bits of a given 32-bit unsigned integer.

**Note:**

*   Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
*   In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in **Example 3**, the input represents the signed integer `-3` and the output represents the signed integer `-1073741825`.

**Example 1:**

```
Input: n = 43261596 (binary: 00000010100101000001111010011100)
Output: 964176192 (binary: 00111001011110000010100101000000)
```

**Example 2:**

```
Input: n = 2147483648 (binary: 10000000000000000000000000000000)
Output: 1 (binary: 00000000000000000000000000000001)
```

**Constraints:**

*   The input must be a **binary string** of length `32`
