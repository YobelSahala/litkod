const permute = require('./permutations');

// Helper function to normalize results for comparison
function normalizePermutations(perms) {
  return perms.map(p => p.slice()).sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return a.length - b.length;
  });
}

describe('Permutations', () => {
  test('should generate all permutations for [1,2,3]', () => {
    const result = permute([1, 2, 3]);
    const expected = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]];
    expect(normalizePermutations(result)).toEqual(normalizePermutations(expected));
    expect(result).toHaveLength(6);
  });

  test('should generate all permutations for [0,1]', () => {
    const result = permute([0, 1]);
    const expected = [[0, 1], [1, 0]];
    expect(normalizePermutations(result)).toEqual(normalizePermutations(expected));
    expect(result).toHaveLength(2);
  });

  test('should handle single element', () => {
    const result = permute([1]);
    expect(result).toEqual([[1]]);
  });

  test('should handle negative numbers', () => {
    const result = permute([-1, 1]);
    const expected = [[-1, 1], [1, -1]];
    expect(normalizePermutations(result)).toEqual(normalizePermutations(expected));
  });

  test('should generate correct number of permutations', () => {
    expect(permute([1]).length).toBe(1); // 1!
    expect(permute([1, 2]).length).toBe(2); // 2!
    expect(permute([1, 2, 3]).length).toBe(6); // 3!
    expect(permute([1, 2, 3, 4]).length).toBe(24); // 4!
  });

  test('should handle larger arrays', () => {
    const result = permute([1, 2, 3, 4]);
    expect(result).toHaveLength(24);
    
    // Verify all permutations are unique
    const uniquePerms = new Set(result.map(p => JSON.stringify(p)));
    expect(uniquePerms.size).toBe(24);
    
    // Verify each permutation has all original elements
    result.forEach(perm => {
      expect(perm.sort()).toEqual([1, 2, 3, 4]);
    });
  });

  test('should handle array with zero', () => {
    const result = permute([0, 1, 2]);
    expect(result).toHaveLength(6);
    result.forEach(perm => {
      expect(perm.sort()).toEqual([0, 1, 2]);
    });
  });

  test('should not mutate original array', () => {
    const original = [1, 2, 3];
    const originalCopy = [...original];
    permute(original);
    expect(original).toEqual(originalCopy);
  });

  test('should handle duplicate-free arrays correctly', () => {
    const result = permute([5, 4, 6]);
    expect(result).toHaveLength(6);
    
    // Check that each number appears in each position exactly 2 times (6/3)
    const positions = [0, 1, 2];
    positions.forEach(pos => {
      const valuesAtPos = result.map(perm => perm[pos]);
      [4, 5, 6].forEach(val => {
        expect(valuesAtPos.filter(v => v === val)).toHaveLength(2);
      });
    });
  });
});