#!/usr/bin/env python3
"""
Simple test runner for LeetCode problems when pytest is not available.
"""

import sys
import os
import importlib.util
from pathlib import Path

def run_test_file(test_file_path):
    """Run a single test file without pytest."""
    print(f"🧪 Running {test_file_path}")
    
    # Add the directory to Python path
    test_dir = os.path.dirname(test_file_path)
    if test_dir not in sys.path:
        sys.path.insert(0, test_dir)
    
    # Add python directory to path for utils
    python_dir = os.path.join(os.path.dirname(__file__), 'python')
    if python_dir not in sys.path:
        sys.path.insert(0, python_dir)
    
    try:
        # Load the test module
        spec = importlib.util.spec_from_file_location("test_module", test_file_path)
        test_module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(test_module)
        
        # Find and run test functions/classes
        tests_run = 0
        tests_passed = 0
        
        for name in dir(test_module):
            obj = getattr(test_module, name)
            
            # Handle test classes (pytest style)
            if name.startswith('Test') and hasattr(obj, '__dict__'):
                for method_name in dir(obj):
                    if method_name.startswith('test_'):
                        try:
                            instance = obj()
                            method = getattr(instance, method_name)
                            method()
                            tests_run += 1
                            tests_passed += 1
                            print(f"  ✅ {method_name}")
                        except Exception as e:
                            tests_run += 1
                            print(f"  ❌ {method_name}: {e}")
            
            # Handle standalone test functions
            elif name.startswith('test_') and callable(obj):
                try:
                    obj()
                    tests_run += 1
                    tests_passed += 1
                    print(f"  ✅ {name}")
                except Exception as e:
                    tests_run += 1
                    print(f"  ❌ {name}: {e}")
        
        print(f"  📊 {tests_passed}/{tests_run} tests passed")
        return tests_passed, tests_run
        
    except Exception as e:
        print(f"  ❌ Error loading test file: {e}")
        return 0, 1

def main():
    """Run all Python tests."""
    if len(sys.argv) > 1:
        # Run specific test file
        test_file = sys.argv[1]
        if os.path.exists(test_file):
            run_test_file(test_file)
        else:
            print(f"❌ Test file not found: {test_file}")
        return
    
    print("🐍 Running Python Tests (Manual Test Runner)")
    print("=" * 50)
    
    # Find all test files
    python_dir = Path("python")
    test_files = list(python_dir.glob("*/*/test_*.py"))
    
    if not test_files:
        print("❌ No test files found")
        return
    
    total_passed = 0
    total_run = 0
    
    for test_file in sorted(test_files):
        passed, run = run_test_file(str(test_file))
        total_passed += passed
        total_run += run
    
    print("\n" + "=" * 50)
    print(f"🎉 Overall: {total_passed}/{total_run} tests passed")
    
    if total_passed == total_run:
        print("✅ All tests passed!")
    else:
        print(f"❌ {total_run - total_passed} tests failed")

if __name__ == "__main__":
    main()