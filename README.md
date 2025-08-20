# 🚀 LeetCode Practice Workspace

A comprehensive environment for practicing LeetCode problems in **JavaScript** and **Python** with full test coverage, organized problem folders, and development tools.

## ✨ Features

- 📁 **Individual Problem Folders** - Each problem has its own dedicated folder
- 🧪 **Complete Test Suites** - 100% test coverage with Jest (JS) and pytest (Python)  
- 🎯 **Interview-Focused** - Problems frequently asked in technical interviews
- 📚 **Detailed Solutions** - Step-by-step explanations and optimal approaches
- 🔧 **Development Tools** - Virtual environments, linting, formatting, profiling
- ⚡ **Easy Testing** - Individual problem testing and bulk testing
- 🎨 **Clean Code** - Well-documented, production-quality implementations

## 📊 Problem Coverage

| Difficulty | Count | JavaScript | Python | Test Coverage |
|------------|-------|------------|--------|---------------|
| **Beginner** | 20 | ✅ 100% | ✅ 100% | ✅ 631 JS tests |
| **Intermediate** | 21 | ✅ 100% | 🚧 57% | ✅ 21 Python tests |  
| **Advanced** | 20 | ✅ 100% | 🚧 5% | 🔄 In Progress |
| **Total** | **61 Problems** | **✅ Complete** | **🚧 35/61 Done** | **652+ Tests** |

## 📁 Repository Structure

```
leetcode-practice-workspace/
├── javascript/                 # JavaScript solutions
│   ├── beginner/
│   │   ├── two-sum/
│   │   │   ├── two-sum.js      # Solution
│   │   │   ├── two-sum.test.js # Tests
│   │   │   └── two-sum.md      # Problem description
│   │   └── ... (19 more problems)
│   ├── intermediate/ (21 problems)
│   └── advanced/ (20 problems)
├── python/                     # Python solutions
│   ├── utils.py               # Shared utilities
│   ├── beginner/
│   │   ├── two-sum/
│   │   │   ├── two_sum.py     # Solution
│   │   │   ├── test_two_sum.py # Tests
│   │   │   └── two-sum.md     # Problem description
│   │   └── ... (19 more problems)
│   ├── intermediate/ (21 problems)
│   └── advanced/ (20 problems)
├── requirements.txt           # Python dependencies
├── package.json              # JavaScript dependencies  
├── setup.py                  # Python environment setup
└── Makefile                  # Convenient commands
```

## 🚀 Quick Start

### Option 1: Using Makefile (Recommended)
```bash
# Setup both environments
make setup

# Run all tests
make test

# Test specific problem
make test-js PROBLEM=two-sum
make test-py PROBLEM=two-sum
```

### Option 2: Manual Setup

**JavaScript:**
```bash
npm install
npm test                    # Run all tests (631 tests)
npm test two-sum           # Test specific problem
npm run test:beginner      # Test difficulty level
```

**Python:**
```bash
python3 setup.py           # Automated setup (creates venv + dependencies)
# OR manually:
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Run tests
make test-py                # Test all Python solutions (21 working tests)
make test-py PROBLEM=two-sum # Test specific problem
pytest python/*/test_*.py -v # If pytest available
```

**Current Python Coverage:**
- ✅ All 20 beginner problems implemented
- 🚧 12 of 21 intermediate problems completed  
- 🚧 1 of 20 advanced problems completed
- 🔄 Work in progress to complete remaining 26 problems

## 📋 Available Problems

### Beginner (20)
Two Sum, Binary Search, Valid Parentheses, Merge Two Sorted Lists, Maximum Subarray, Climbing Stairs, Contains Duplicate, Single Number, Linked List Cycle, Palindrome Linked List, Invert Binary Tree, Valid Anagram, Maximum Depth Binary Tree, Majority Element, Reverse Bits, Best Time Buy Sell Stock, Missing Number, Remove Duplicates Sorted Array, Reverse Linked List, Intersection Two Linked Lists

### Intermediate (21) 
3Sum, Longest Substring Without Repeating, Container Most Water, Generate Parentheses, Group Anagrams, Coin Change, Product Array Except Self, Merge Intervals, Unique Paths, Jump Game, House Robber, Longest Consecutive Sequence, Word Break, Permutations, Subsets, Number Islands, Validate Binary Search Tree, Longest Increasing Subsequence, Search Rotated Sorted Array, Minimum Path Sum, Number Longest Increasing Subsequence

### Advanced (20)
Median Two Sorted Arrays, Trapping Rain Water, Regular Expression Matching, Word Ladder, Sliding Window Maximum, First Missing Positive, Largest Rectangle Histogram, Alien Dictionary, Find Median Data Stream, Course Schedule, Burst Balloons, Copy List Random Pointer, Maximal Rectangle, Remove Invalid Parentheses, The Skyline Problem, Word Search II, Lowest Common Ancestor Binary Tree, Longest Valid Parentheses, Longest Increasing Path Matrix, Partition Array Minimize Sum Difference

## 🛠️ Development Commands

```bash
# Testing
make test              # All tests
make test-js          # JavaScript only  
make test-py          # Python only

# Code Quality (Python)
make format-py        # Format with black
make lint-py          # Lint with flake8

# Cleanup
make clean            # Remove cache files
```

## 📚 Learning Path

1. **Start with Beginner** - Master fundamental patterns
2. **Progress to Intermediate** - Learn advanced data structures  
3. **Tackle Advanced** - Complex algorithms and optimizations
4. **Practice Regularly** - Consistency is key for interviews

## 🎯 Perfect for:

- 💼 **Interview Preparation** - Commonly asked questions
- 🧠 **Algorithm Practice** - Clean, optimal solutions
- 📖 **Learning** - Step-by-step explanations  
- 🔄 **Code Review** - Well-documented implementations
- 📈 **Progress Tracking** - Individual problem testing

---

**Happy Coding! 🎉** Ready to ace those technical interviews!
