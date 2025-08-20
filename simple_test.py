#!/usr/bin/env python3
"""
Simple test runner that directly tests Python solutions without pytest.
"""

import sys
import os
sys.path.append('python')

def test_basic_solutions():
    """Test a few basic solutions to verify they work."""
    print("🐍 Testing Python Solutions (Direct Testing)")
    print("=" * 50)
    
    tests_passed = 0
    tests_total = 0
    
    # Test Two Sum
    try:
        sys.path.append('python/beginner/two-sum')
        from two_sum import two_sum
        
        # Test cases
        test_cases = [
            ([2, 7, 11, 15], 9, [0, 1]),
            ([3, 2, 4], 6, [1, 2]),
            ([3, 3], 6, [0, 1])
        ]
        
        for nums, target, expected in test_cases:
            result = two_sum(nums, target)
            tests_total += 1
            if result == expected:
                tests_passed += 1
                print(f"✅ Two Sum: {nums}, target={target} → {result}")
            else:
                print(f"❌ Two Sum: {nums}, target={target} → {result} (expected {expected})")
                
    except Exception as e:
        tests_total += 1
        print(f"❌ Two Sum error: {e}")
    
    # Test Binary Search
    try:
        sys.path.append('python/beginner/binary-search')
        from binary_search import search
        
        test_cases = [
            ([-1, 0, 3, 5, 9, 12], 9, 4),
            ([-1, 0, 3, 5, 9, 12], 2, -1),
            ([5], 5, 0)
        ]
        
        for nums, target, expected in test_cases:
            result = search(nums, target)
            tests_total += 1
            if result == expected:
                tests_passed += 1
                print(f"✅ Binary Search: {nums}, target={target} → {result}")
            else:
                print(f"❌ Binary Search: {nums}, target={target} → {result} (expected {expected})")
                
    except Exception as e:
        tests_total += 1
        print(f"❌ Binary Search error: {e}")
    
    # Test Contains Duplicate
    try:
        sys.path.append('python/beginner/contains-duplicate')
        from contains_duplicate import contains_duplicate
        
        test_cases = [
            ([1, 2, 3, 1], True),
            ([1, 2, 3, 4], False),
            ([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], True)
        ]
        
        for nums, expected in test_cases:
            result = contains_duplicate(nums)
            tests_total += 1
            if result == expected:
                tests_passed += 1
                print(f"✅ Contains Duplicate: {nums} → {result}")
            else:
                print(f"❌ Contains Duplicate: {nums} → {result} (expected {expected})")
                
    except Exception as e:
        tests_total += 1
        print(f"❌ Contains Duplicate error: {e}")
    
    # Test Merge Two Sorted Lists
    try:
        from python.utils import create_linked_list, linked_list_to_list
        sys.path.append('python/beginner/merge-two-sorted-lists')
        from merge_two_sorted_lists import merge_two_lists
        
        test_cases = [
            ([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]),
            ([], [], []),
            ([], [0], [0])
        ]
        
        for list1_vals, list2_vals, expected in test_cases:
            list1 = create_linked_list(list1_vals)
            list2 = create_linked_list(list2_vals)
            result_list = merge_two_lists(list1, list2)
            result = linked_list_to_list(result_list)
            tests_total += 1
            if result == expected:
                tests_passed += 1
                print(f"✅ Merge Lists: {list1_vals} + {list2_vals} → {result}")
            else:
                print(f"❌ Merge Lists: {list1_vals} + {list2_vals} → {result} (expected {expected})")
                
    except Exception as e:
        tests_total += 1
        print(f"❌ Merge Lists error: {e}")
    
    # Test Climbing Stairs
    try:
        sys.path.append('python/beginner/climbing-stairs')
        from climbing_stairs import climb_stairs
        
        test_cases = [
            (2, 2),
            (3, 3),
            (4, 5),
            (5, 8)
        ]
        
        for n, expected in test_cases:
            result = climb_stairs(n)
            tests_total += 1
            if result == expected:
                tests_passed += 1
                print(f"✅ Climbing Stairs: n={n} → {result}")
            else:
                print(f"❌ Climbing Stairs: n={n} → {result} (expected {expected})")
                
    except Exception as e:
        tests_total += 1
        print(f"❌ Climbing Stairs error: {e}")
    
    # Test Number of Islands
    try:
        sys.path.append('python/intermediate/number-of-islands')
        from number_of_islands import numIslands
        
        test_cases = [
            ([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]], 1),
            ([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]], 3)
        ]
        
        for grid, expected in test_cases:
            # Make a copy since the function modifies the grid
            grid_copy = [row[:] for row in grid]
            result = numIslands(grid_copy)
            tests_total += 1
            if result == expected:
                tests_passed += 1
                print(f"✅ Number of Islands: {len(grid)}x{len(grid[0])} grid → {result} islands")
            else:
                print(f"❌ Number of Islands: {len(grid)}x{len(grid[0])} grid → {result} (expected {expected})")
                
    except Exception as e:
        tests_total += 1
        print(f"❌ Number of Islands error: {e}")
    
    # Test Three Sum
    try:
        sys.path.append('python/intermediate/three-sum')
        from three_sum import three_sum
        
        test_cases = [
            ([-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]),
            ([0, 1, 1], []),
            ([0, 0, 0], [[0, 0, 0]])
        ]
        
        for nums, expected in test_cases:
            result = three_sum(nums)
            # Sort for comparison since order may vary
            result_sorted = [sorted(triplet) for triplet in sorted(result)]
            expected_sorted = [sorted(triplet) for triplet in sorted(expected)]
            tests_total += 1
            if result_sorted == expected_sorted:
                tests_passed += 1
                print(f"✅ Three Sum: {nums} → {len(result)} triplets")
            else:
                print(f"❌ Three Sum: {nums} → {result} (expected {expected})")
                
    except Exception as e:
        tests_total += 1
        print(f"❌ Three Sum error: {e}")
    
    print("\n" + "=" * 50)
    print(f"🎉 Results: {tests_passed}/{tests_total} tests passed")
    
    if tests_passed == tests_total:
        print("✅ All basic tests passed! Python solutions are working correctly.")
    else:
        print(f"❌ {tests_total - tests_passed} tests failed")
    
    return tests_passed == tests_total

if __name__ == "__main__":
    test_basic_solutions()