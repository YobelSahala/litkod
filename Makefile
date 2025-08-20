# LeetCode Practice Workspace Makefile

.PHONY: help setup test test-js test-py clean install-js install-py lint format

# Default target
help:
	@echo "LeetCode Practice Workspace Commands:"
	@echo "===================================="
	@echo ""
	@echo "Setup Commands:"
	@echo "  setup-js     Set up JavaScript environment (npm install)"
	@echo "  setup-py     Set up Python environment (virtual env + pip install)"
	@echo "  setup        Set up both JavaScript and Python environments"
	@echo ""
	@echo "Testing Commands:"
	@echo "  test-js      Run all JavaScript tests"
	@echo "  test-py      Run all Python tests"
	@echo "  test         Run all tests (both JS and Python)"
	@echo ""
	@echo "Development Commands:"
	@echo "  format-py    Format Python code with black"
	@echo "  lint-py      Lint Python code with flake8"
	@echo "  clean        Clean up build artifacts and cache"
	@echo ""
	@echo "Individual Testing (Consistent Syntax):"
	@echo "  test-js PROBLEM=two-sum              Test specific JS problem"
	@echo "  test-py PROBLEM=two-sum              Test specific Python problem" 
	@echo "  test-js PROBLEM=climbing-stairs      Test individual JS problems"
	@echo "  test-py PROBLEM=number-of-islands    Works with any difficulty level"
	@echo ""
	@echo "Python Status: 35/61 problems implemented (57% complete)"
	@echo "  ✅ Beginner: 20/20 (100%)    🚧 Intermediate: 12/21 (57%)    🚧 Advanced: 1/20 (5%)"

# Setup targets
setup-js:
	@echo "🔧 Setting up JavaScript environment..."
	npm install

setup-py:
	@echo "🐍 Setting up Python environment..."
	python3 setup.py

setup: setup-js setup-py

# Testing targets
test-js:
	@if [ -n "$(PROBLEM)" ]; then \
		echo "🧪 Testing individual JavaScript problem: $(PROBLEM)"; \
		npm test $(PROBLEM); \
	else \
		echo "🧪 Running all JavaScript tests..."; \
		npm test; \
	fi

test-py:
	@if [ -n "$(PROBLEM)" ]; then \
		echo "🐍 Testing individual Python problem: $(PROBLEM)"; \
		if [ -d ".venv" ] && [ -f ".venv/bin/pytest" ]; then \
			echo "Using virtual environment with pytest..."; \
			.venv/bin/python -m pytest python/*/$(PROBLEM)/test_*.py -v; \
		elif python3 -c "import pytest" 2>/dev/null; then \
			echo "Using system pytest..."; \
			python3 -m pytest python/*/$(PROBLEM)/test_*.py -v; \
		else \
			python3 test_individual.py $(PROBLEM); \
		fi; \
	else \
		echo "🐍 Running all Python tests..."; \
		if [ -d ".venv" ] && [ -f ".venv/bin/pytest" ]; then \
			echo "Using virtual environment with pytest..."; \
			.venv/bin/python -m pytest python/*/test_*.py -v; \
		elif python3 -c "import pytest" 2>/dev/null; then \
			echo "Using system pytest..."; \
			python3 -m pytest python/*/test_*.py -v; \
		else \
			echo "pytest not available, using simple test runner..."; \
			python3 simple_test.py; \
		fi; \
	fi

test: test-js test-py


# Development targets
format-py:
	@echo "🎨 Formatting Python code..."
	@if [ -d ".venv" ]; then \
		.venv/bin/black python/; \
	else \
		black python/; \
	fi

lint-py:
	@echo "🔍 Linting Python code..."
	@if [ -d ".venv" ]; then \
		.venv/bin/flake8 python/; \
	else \
		flake8 python/; \
	fi

# Cleanup
clean:
	@echo "🧹 Cleaning up..."
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete
	find . -type d -name ".pytest_cache" -delete
	rm -rf .coverage htmlcov/
	@echo "✅ Cleanup complete"