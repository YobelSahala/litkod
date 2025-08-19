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
	@echo "Individual Testing:"
	@echo "  test-js-problem PROBLEM=two-sum  Test specific JS problem"
	@echo "  test-py-problem PROBLEM=two-sum  Test specific Python problem"

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
	@echo "🧪 Running JavaScript tests..."
	npm test

test-py:
	@echo "🐍 Running Python tests..."
	@if [ -d ".venv" ]; then \
		echo "Using virtual environment..."; \
		.venv/bin/python -m pytest python/*/test_*.py -v; \
	else \
		echo "No virtual environment found, using system Python..."; \
		python3 -m pytest python/*/test_*.py -v; \
	fi

test: test-js test-py

# Individual problem testing
test-js-problem:
	@if [ -z "$(PROBLEM)" ]; then \
		echo "Usage: make test-js-problem PROBLEM=problem-name"; \
		exit 1; \
	fi
	npm test $(PROBLEM)

test-py-problem:
	@if [ -z "$(PROBLEM)" ]; then \
		echo "Usage: make test-py-problem PROBLEM=problem-name"; \
		exit 1; \
	fi
	@if [ -d ".venv" ]; then \
		.venv/bin/python -m pytest python/*/$(PROBLEM)/test_*.py -v; \
	else \
		python3 -m pytest python/*/$(PROBLEM)/test_*.py -v; \
	fi

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