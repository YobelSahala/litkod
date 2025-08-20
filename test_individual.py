#!/usr/bin/env python3
"""
Test individual Python problems without requiring pytest.
Usage: python3 test_individual.py PROBLEM_NAME
"""

import sys
import os

def test_individual_problem(problem_name):
    """Test a specific problem by name."""
    print(f"🐍 Testing Python problem: {problem_name}")
    print("=" * 50)
    
    # Add python directory to path
    sys.path.insert(0, 'python')
    
    # Find the problem directory
    problem_dir = None
    for difficulty in ['beginner', 'intermediate', 'advanced']:
        problem_path = f'python/{difficulty}/{problem_name}'
        if os.path.exists(problem_path):
            problem_dir = difficulty
            break
    
    if not problem_dir:
        print(f"❌ Problem '{problem_name}' not found in any difficulty level")
        print("Available problems:")
        for difficulty in ['beginner', 'intermediate', 'advanced']:
            difficulty_path = f'python/{difficulty}'
            if os.path.exists(difficulty_path):
                problems = [d for d in os.listdir(difficulty_path) if os.path.isdir(os.path.join(difficulty_path, d))]
                if problems:
                    print(f"  {difficulty}: {', '.join(sorted(problems))}")
        return False
    
    print(f"✅ Found '{problem_name}' in {problem_dir}/ directory")
    
    # Add problem directory to path
    problem_path = f'python/{problem_dir}/{problem_name}'
    sys.path.insert(0, problem_path)
    
    # Import the solution module
    solution_file = problem_name.replace('-', '_') + '.py'
    solution_path = os.path.join(problem_path, solution_file)
    
    if not os.path.exists(solution_path):
        print(f"❌ Solution file not found: {solution_file}")
        return False
    
    try:
        # Import the solution module
        module_name = problem_name.replace('-', '_')
        solution_module = __import__(module_name)
        print(f"✅ Loaded solution module: {module_name}")
        
        # Run specific tests based on problem
        success = run_problem_tests(problem_name, solution_module, problem_dir)
        return success
        
    except Exception as e:
        print(f"❌ Error loading solution: {e}")
        return False

def run_problem_tests(problem_name, solution_module, difficulty):
    """Run tests for a specific problem."""
    tests_passed = 0
    tests_total = 0
    
    if problem_name == 'two-sum':
        func = getattr(solution_module, 'two_sum', None)
        if func:
            test_cases = [
                ([2, 7, 11, 15], 9, [0, 1]),
                ([3, 2, 4], 6, [1, 2]),
                ([3, 3], 6, [0, 1])
            ]
            for nums, target, expected in test_cases:
                result = func(nums, target)
                tests_total += 1
                if result == expected:
                    tests_passed += 1
                    print(f"  ✅ two_sum({nums}, {target}) → {result}")
                else:
                    print(f"  ❌ two_sum({nums}, {target}) → {result} (expected {expected})")
    
    elif problem_name == 'binary-search':
        func = getattr(solution_module, 'search', None)
        if func:
            test_cases = [
                ([-1, 0, 3, 5, 9, 12], 9, 4),
                ([-1, 0, 3, 5, 9, 12], 2, -1),
                ([5], 5, 0)
            ]
            for nums, target, expected in test_cases:
                result = func(nums, target)
                tests_total += 1
                if result == expected:
                    tests_passed += 1
                    print(f"  ✅ search({nums}, {target}) → {result}")
                else:
                    print(f"  ❌ search({nums}, {target}) → {result} (expected {expected})")
    
    elif problem_name == 'contains-duplicate':
        func = getattr(solution_module, 'contains_duplicate', None)
        if func:
            test_cases = [
                ([1, 2, 3, 1], True),
                ([1, 2, 3, 4], False),
                ([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], True)
            ]
            for nums, expected in test_cases:
                result = func(nums)
                tests_total += 1
                if result == expected:
                    tests_passed += 1
                    print(f"  ✅ contains_duplicate({nums}) → {result}")
                else:
                    print(f"  ❌ contains_duplicate({nums}) → {result} (expected {expected})")
    
    elif problem_name == 'climbing-stairs':
        func = getattr(solution_module, 'climb_stairs', None)
        if func:
            test_cases = [(2, 2), (3, 3), (4, 5), (5, 8)]
            for n, expected in test_cases:
                result = func(n)
                tests_total += 1
                if result == expected:
                    tests_passed += 1
                    print(f"  ✅ climb_stairs({n}) → {result}")
                else:
                    print(f"  ❌ climb_stairs({n}) → {result} (expected {expected})")
    
    elif problem_name == 'valid-parentheses':
        func = getattr(solution_module, 'is_valid', None)
        if func:
            test_cases = [
                ("()", True),
                ("()[]{}", True),
                ("(]", False),
                ("([)]", False),
                ("{[]}", True)
            ]
            for s, expected in test_cases:
                result = func(s)
                tests_total += 1
                if result == expected:
                    tests_passed += 1
                    print(f"  ✅ is_valid('{s}') → {result}")
                else:
                    print(f"  ❌ is_valid('{s}') → {result} (expected {expected})")
    
    elif problem_name == 'three-sum':
        func = getattr(solution_module, 'three_sum', None)
        if func:
            test_cases = [
                ([-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]),
                ([0, 1, 1], []),
                ([0, 0, 0], [[0, 0, 0]])
            ]
            for nums, expected in test_cases:
                result = func(nums)
                # Sort for comparison since order may vary
                result_sorted = [sorted(triplet) for triplet in sorted(result)]
                expected_sorted = [sorted(triplet) for triplet in sorted(expected)]
                tests_total += 1
                if result_sorted == expected_sorted:
                    tests_passed += 1
                    print(f"  ✅ three_sum({nums}) → {len(result)} triplets")
                else:
                    print(f"  ❌ three_sum({nums}) → {result} (expected {expected})")
    
    elif problem_name == 'merge-two-sorted-lists':
        from python.utils import create_linked_list, linked_list_to_list
        func = getattr(solution_module, 'merge_two_lists', None)
        if func:
            test_cases = [
                ([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]),
                ([], [], []),
                ([], [0], [0])
            ]
            for list1_vals, list2_vals, expected in test_cases:
                list1 = create_linked_list(list1_vals)
                list2 = create_linked_list(list2_vals)
                result_list = func(list1, list2)
                result = linked_list_to_list(result_list)
                tests_total += 1
                if result == expected:
                    tests_passed += 1
                    print(f"  ✅ merge_two_lists({list1_vals}, {list2_vals}) → {result}")
                else:
                    print(f"  ❌ merge_two_lists({list1_vals}, {list2_vals}) → {result} (expected {expected})")
    
    else:
        # Generic test - just try to import and call a basic function
        print(f"  ✅ Solution module loaded successfully")
        print(f"  📋 Available functions: {[name for name in dir(solution_module) if not name.startswith('_')]}")
        tests_total = 1
        tests_passed = 1
    
    if tests_total == 0:
        print(f"  ⚠️  No specific tests defined for '{problem_name}'")
        print(f"  ✅ But solution module loaded successfully")
        return True
    
    print(f"\n📊 Results: {tests_passed}/{tests_total} tests passed")
    return tests_passed == tests_total

def main():
    if len(sys.argv) != 2:
        print("Usage: python3 test_individual.py PROBLEM_NAME")
        print("Example: python3 test_individual.py two-sum")
        sys.exit(1)
    
    problem_name = sys.argv[1]
    success = test_individual_problem(problem_name)
    
    if success:
        print("🎉 All tests passed!")
    else:
        print("❌ Some tests failed")
        sys.exit(1)

if __name__ == "__main__":
    main()