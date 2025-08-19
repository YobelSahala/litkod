const subsets = require('./subsets');

// Helper function to normalize results for comparison
function normalizeSubsets(sets) {
  return sets.map(s => s.slice().sort()).sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return a[i] - b[i];
    }
    return 0;
  });
}

describe('Subsets', () => {
  test('should generate all subsets for [1,2,3]', () => {
    const result = subsets([1, 2, 3]);
    const expected = [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]];
    expect(normalizeSubsets(result)).toEqual(normalizeSubsets(expected));
    expect(result).toHaveLength(8);
  });

  test('should generate all subsets for [0]', () => {
    const result = subsets([0]);
    const expected = [[], [0]];
    expect(normalizeSubsets(result)).toEqual(normalizeSubsets(expected));
    expect(result).toHaveLength(2);
  });

  test('should handle empty array input', () => {
    const result = subsets([]);
    expect(result).toEqual([[]]);
  });

  test('should handle single element', () => {
    const result = subsets([5]);
    const expected = [[], [5]];
    expect(normalizeSubsets(result)).toEqual(normalizeSubsets(expected));
  });

  test('should handle two elements', () => {
    const result = subsets([1, 2]);
    const expected = [[], [1], [2], [1, 2]];
    expect(normalizeSubsets(result)).toEqual(normalizeSubsets(expected));
    expect(result).toHaveLength(4);
  });

  test('should generate correct number of subsets (2^n)', () => {
    expect(subsets([]).length).toBe(1); // 2^0
    expect(subsets([1]).length).toBe(2); // 2^1
    expect(subsets([1, 2]).length).toBe(4); // 2^2
    expect(subsets([1, 2, 3]).length).toBe(8); // 2^3
    expect(subsets([1, 2, 3, 4]).length).toBe(16); // 2^4
  });

  test('should handle negative numbers', () => {
    const result = subsets([-1, 0, 1]);
    expect(result).toHaveLength(8);
    expect(result).toEqual(expect.arrayContaining([[], [-1], [0], [1], [-1, 0], [-1, 1], [0, 1], [-1, 0, 1]]));
  });

  test('should handle larger arrays', () => {
    const result = subsets([1, 2, 3, 4]);
    expect(result).toHaveLength(16);
    
    // Verify all subsets are unique
    const uniqueSubsets = new Set(result.map(s => JSON.stringify(s.slice().sort())));
    expect(uniqueSubsets.size).toBe(16);
    
    // Verify empty set is included
    expect(result).toEqual(expect.arrayContaining([[]]));
    
    // Verify full set is included
    expect(result).toEqual(expect.arrayContaining([[1, 2, 3, 4]]));
  });

  test('should maintain order properties', () => {
    const result = subsets([1, 2, 3]);
    
    // Each subset should maintain the original order of elements
    result.forEach(subset => {
      for (let i = 1; i < subset.length; i++) {
        expect(subset[i]).toBeGreaterThan(subset[i-1]);
      }
    });
  });

  test('should include all subset sizes', () => {
    const result = subsets([1, 2, 3, 4]);
    
    // Should have subsets of sizes 0, 1, 2, 3, 4
    for (let size = 0; size <= 4; size++) {
      const subsetsOfSize = result.filter(s => s.length === size);
      const expectedCount = factorial(4) / (factorial(size) * factorial(4 - size)); // C(4, size)
      expect(subsetsOfSize).toHaveLength(expectedCount);
    }
  });

  test('should not mutate original array', () => {
    const original = [1, 2, 3];
    const originalCopy = [...original];
    subsets(original);
    expect(original).toEqual(originalCopy);
  });
});

// Helper function to calculate factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}