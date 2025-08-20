"""
Tests for Reverse Bits problem.
"""

import pytest
from reverse_bits import reverse_bits


class TestReverseBits:
    """Test cases for the reverse bits function."""

    def test_example_1(self):
        """Test example 1: 00000010100101000001111010011100 -> 00111001011110000010100101000000."""
        input_val = 43261596  # Binary: 00000010100101000001111010011100
        expected = 964176192  # Binary: 00111001011110000010100101000000
        assert reverse_bits(input_val) == expected

    def test_example_2(self):
        """Test example 2: 11111111111111111111111111111101 -> 10111111111111111111111111111111."""
        input_val = 4294967293  # Binary: 11111111111111111111111111111101
        expected = 3221225471  # Binary: 10111111111111111111111111111111
        assert reverse_bits(input_val) == expected

    def test_all_zeros(self):
        """Test with all zeros."""
        assert reverse_bits(0) == 0

    def test_single_bit_position_0(self):
        """Test single bit set at position 0."""
        input_val = 1  # Binary: 00000000000000000000000000000001
        expected = 2147483648  # Binary: 10000000000000000000000000000000
        assert reverse_bits(input_val) == expected

    def test_single_bit_position_31(self):
        """Test single bit set at position 31."""
        input_val = 2147483648  # Binary: 10000000000000000000000000000000
        expected = 1  # Binary: 00000000000000000000000000000001
        assert reverse_bits(input_val) == expected

    def test_alternating_pattern(self):
        """Test alternating bit pattern."""
        input_val = 1431655765  # Binary: 01010101010101010101010101010101
        expected = 2863311530  # Binary: 10101010101010101010101010101010
        assert reverse_bits(input_val) == expected

    def test_all_ones_except_last_bit(self):
        """Test all ones except the last bit."""
        input_val = 4294967294  # Binary: 11111111111111111111111111111110
        expected = 2147483647  # Binary: 01111111111111111111111111111111
        assert reverse_bits(input_val) == expected

    def test_all_ones(self):
        """Test maximum 32-bit unsigned value (all ones)."""
        input_val = 4294967295  # Binary: 11111111111111111111111111111111
        expected = 4294967295  # Binary: 11111111111111111111111111111111 (same)
        assert reverse_bits(input_val) == expected

    def test_powers_of_2(self):
        """Test various powers of 2."""
        assert reverse_bits(2) == 1073741824  # 2^1 -> 2^30
        assert reverse_bits(4) == 536870912   # 2^2 -> 2^29
        assert reverse_bits(8) == 268435456   # 2^3 -> 2^28
        assert reverse_bits(16) == 134217728  # 2^4 -> 2^27
        assert reverse_bits(32) == 67108864   # 2^5 -> 2^26

    def test_small_numbers(self):
        """Test small numbers with specific bit patterns."""
        # 3 = 11 in binary -> should become 11000000000000000000000000000000
        assert reverse_bits(3) == 3221225472
        
        # 7 = 111 in binary -> should become 11100000000000000000000000000000
        assert reverse_bits(7) == 3758096384

    def test_middle_bit_set(self):
        """Test with middle bits set."""
        input_val = 65536  # Binary: 00000000000000010000000000000000 (bit 16)
        expected = 32768  # Binary: 00000000000000001000000000000000 (bit 15)
        assert reverse_bits(input_val) == expected

    def test_multiple_bits_set(self):
        """Test with multiple bits set in different positions."""
        # Set bits at positions 0, 5, 10, 15, 20, 25, 30
        input_val = (1 << 0) | (1 << 5) | (1 << 10) | (1 << 15) | (1 << 20) | (1 << 25) | (1 << 30)
        # After reversal, these should be at positions 31, 26, 21, 16, 11, 6, 1
        expected = (1 << 31) | (1 << 26) | (1 << 21) | (1 << 16) | (1 << 11) | (1 << 6) | (1 << 1)
        assert reverse_bits(input_val) == expected

    def test_symmetric_patterns(self):
        """Test patterns that should be symmetric."""
        # Test a pattern that when reversed gives a different but predictable result
        input_val = 0x0F0F0F0F  # 00001111000011110000111100001111
        expected = 0xF0F0F0F0   # 11110000111100001111000011110000
        assert reverse_bits(input_val) == expected

    def test_edge_case_values(self):
        """Test specific edge case values."""
        # Test value with first and last bit set
        input_val = (1 << 31) | 1  # 10000000000000000000000000000001
        expected = (1 << 31) | 1   # 10000000000000000000000000000001 (same)
        assert reverse_bits(input_val) == expected