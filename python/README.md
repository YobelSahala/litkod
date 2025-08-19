# Python LeetCode Solutions

This directory contains Python implementations of LeetCode problems with comprehensive test suites using pytest.

## Structure

Each problem has its own folder containing:
- `problem_name.py` - The solution implementation
- `test_problem_name.py` - Pytest test cases
- `problem-name.md` - Problem description

```
python/
├── utils.py                    # Shared utilities (ListNode, TreeNode, etc.)
├── beginner/
│   ├── two-sum/
│   │   ├── two_sum.py
│   │   ├── test_two_sum.py
│   │   └── two-sum.md
│   └── ...
├── intermediate/
│   └── ...
└── advanced/
    └── ...
```

## Setup

### Option 1: Automated Setup (Recommended)
Run the setup script from the project root:
```bash
python3 setup.py
```

### Option 2: Manual Setup

1. **Create virtual environment:**
```bash
# From project root directory
python3 -m venv .venv

# Activate virtual environment
# Linux/Mac:
source .venv/bin/activate
# Windows:
.venv\Scripts\activate
```

2. **Install dependencies:**
```bash
# Minimal (just for testing)
pip install -r requirements-dev.txt

# Full development environment (recommended)
pip install -r requirements.txt
```

3. **Run tests:**
```bash
# Make sure you're in the project root and venv is activated

# Test specific problem
pytest python/beginner/two-sum/test_two_sum.py -v

# Test all beginner problems
pytest python/beginner/*/test_*.py -v

# Test all problems
pytest python/*/test_*.py -v

# Run tests in parallel (faster)
pytest python/*/test_*.py -v -n auto

# Run tests with coverage
pytest python/*/test_*.py --cov=python --cov-report=html
```

### Dependencies

**Core Requirements:**
- `pytest>=7.4.0` - Testing framework
- `pytest-cov>=4.1.0` - Coverage reporting

**Full Development Environment:**
- `black` - Code formatting
- `flake8` - Linting
- `mypy` - Type checking
- `ipython` - Interactive shell
- `jupyter` - Notebook environment
- `numpy` - Numerical computing
- `matplotlib` - Visualization
- `networkx` - Graph algorithms

## Usage Examples

```python
# Import utilities
from python.utils import ListNode, create_linked_list

# Import and test a solution
from python.beginner.two-sum.two_sum import two_sum
result = two_sum([2, 7, 11, 15], 9)
print(result)  # [0, 1]
```

## Problems Included

### Beginner (20 problems)
- Two Sum, Binary Search, Climbing Stairs, Contains Duplicate, etc.

### Intermediate (21 problems)  
- 3Sum, Coin Change, Container With Most Water, etc.

### Advanced (20 problems)
- Median of Two Sorted Arrays, Alien Dictionary, Word Ladder, etc.

## Features

- ✅ Clean, readable Python implementations
- ✅ Comprehensive pytest test coverage
- ✅ Multiple solution approaches where applicable
- ✅ Proper documentation and type hints
- ✅ Edge case handling
- ✅ Shared utility classes and functions