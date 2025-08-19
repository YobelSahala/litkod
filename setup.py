#!/usr/bin/env python3
"""
Setup script for LeetCode Practice Workspace.
Creates virtual environment and installs dependencies.
"""

import subprocess
import sys
import os

def run_command(command, description):
    """Run a command and handle errors."""
    print(f"🔧 {description}...")
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        print(f"✅ {description} completed successfully")
        return result
    except subprocess.CalledProcessError as e:
        print(f"❌ Error during {description}: {e}")
        print(f"Error output: {e.stderr}")
        return None

def setup_environment():
    """Set up the Python development environment."""
    print("🐍 LeetCode Practice Workspace Setup")
    print("=" * 50)
    
    # Check if we're already in project directory
    if not os.path.exists('requirements.txt'):
        print("❌ Please run this script from the project root directory")
        sys.exit(1)
    
    # Create virtual environment
    if not os.path.exists('.venv'):
        result = run_command("python3 -m venv .venv", "Creating virtual environment")
        if result is None:
            print("⚠️  Virtual environment creation failed.")
            print("On Ubuntu/Debian systems, try: sudo apt install python3-venv")
            print("On other systems, ensure python3-venv is installed")
            return False
    else:
        print("✅ Virtual environment already exists")
    
    # Activate virtual environment and install dependencies
    if os.name == 'nt':  # Windows
        activate_cmd = ".venv\\Scripts\\activate"
        pip_cmd = ".venv\\Scripts\\pip"
    else:  # Unix/Linux/MacOS
        activate_cmd = "source .venv/bin/activate"
        pip_cmd = ".venv/bin/pip"
    
    # Install minimal requirements first
    run_command(f"{pip_cmd} install --upgrade pip", "Upgrading pip")
    run_command(f"{pip_cmd} install -r requirements-dev.txt", "Installing minimal requirements")
    
    # Ask if user wants full requirements
    print("\n📦 Installation Options:")
    print("1. Minimal (pytest only) - Already installed")
    print("2. Full development environment (all tools)")
    
    choice = input("Install full development environment? (y/N): ").lower().strip()
    
    if choice in ['y', 'yes']:
        run_command(f"{pip_cmd} install -r requirements.txt", "Installing full requirements")
    
    print("\n🎉 Setup completed!")
    print(f"To activate the environment, run: {activate_cmd}")
    print("To run tests: pytest python/*/test_*.py -v")
    
    return True

if __name__ == "__main__":
    setup_environment()