const reverseBits = require('./reverse-bits');

describe('Reverse Bits', () => {
  test('should reverse 00000010100101000001111010011100 to 00111001011110000010100101000000', () => {
    const input = 43261596; // Binary: 00000010100101000001111010011100
    const expected = 964176192; // Binary: 00111001011110000010100101000000
    expect(reverseBits(input)).toBe(expected);
  });

  test('should reverse 11111111111111111111111111111101 to 10111111111111111111111111111111', () => {
    const input = 4294967293; // Binary: 11111111111111111111111111111101
    const expected = 3221225471; // Binary: 10111111111111111111111111111111
    expect(reverseBits(input)).toBe(expected);
  });

  test('should handle all zeros', () => {
    expect(reverseBits(0)).toBe(0);
  });

  test('should handle single bit set at position 0', () => {
    const input = 1; // Binary: 00000000000000000000000000000001
    const expected = 2147483648; // Binary: 10000000000000000000000000000000
    expect(reverseBits(input)).toBe(expected);
  });

  test('should handle single bit set at position 31', () => {
    const input = 2147483648; // Binary: 10000000000000000000000000000000
    const expected = 1; // Binary: 00000000000000000000000000000001
    expect(reverseBits(input)).toBe(expected);
  });

  test('should handle alternating pattern', () => {
    const input = 1431655765; // Binary: 01010101010101010101010101010101
    const expected = 2863311530; // Binary: 10101010101010101010101010101010
    expect(reverseBits(input)).toBe(expected);
  });

  test('should handle all ones except last bit', () => {
    const input = 4294967294; // Binary: 11111111111111111111111111111110
    const expected = 2147483647; // Binary: 01111111111111111111111111111111
    expect(reverseBits(input)).toBe(expected);
  });

  test('should handle maximum 32-bit unsigned value', () => {
    const input = 4294967295; // Binary: 11111111111111111111111111111111
    const expected = 4294967295; // Binary: 11111111111111111111111111111111 (same)
    expect(reverseBits(input)).toBe(expected);
  });

  test('should handle powers of 2', () => {
    expect(reverseBits(2)).toBe(1073741824); // 2^1 -> 2^30
    expect(reverseBits(4)).toBe(536870912);  // 2^2 -> 2^29
    expect(reverseBits(8)).toBe(268435456);  // 2^3 -> 2^28
  });
});