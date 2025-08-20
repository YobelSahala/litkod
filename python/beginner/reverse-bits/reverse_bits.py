"""
Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

Note:
- Note that in some languages, such as Java, there is no unsigned integer type. 
  In this case, both input and output will be given as a signed integer type. 
  They should not affect your implementation, as the integer's internal binary 
  representation is the same, whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using 2's complement notation. 
  Therefore, in Example 2 below, the input represents the signed integer -3 and 
  the output represents the signed integer -1073741825.

Time Complexity: O(1) - we always process exactly 32 bits
Space Complexity: O(1) - only using a constant amount of extra space
"""


def reverse_bits(n: int) -> int:
    """
    Reverse bits of a given 32-bit unsigned integer.
    
    Args:
        n: A 32-bit unsigned integer
        
    Returns:
        The integer with its bits reversed
        
    Examples:
        >>> reverse_bits(43261596)  # 00000010100101000001111010011100
        964176192  # 00111001011110000010100101000000
        
        >>> reverse_bits(4294967293)  # 11111111111111111111111111111101
        3221225471  # 10111111111111111111111111111111
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
    
    # Ensure the result is treated as a 32-bit unsigned integer
    return result & 0xFFFFFFFF