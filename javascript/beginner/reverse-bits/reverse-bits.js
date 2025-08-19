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

module.exports = reverseBits;