#!/usr/bin/env python3
"""
Toy JavaScript Interpreter
Usage: python main.py <script.js>
"""

import sys
from parser import build_parser
from interpreter import Interpreter, JSError


def main():
    if len(sys.argv) != 2:
        print("Usage: python main.py <script.js>", file=sys.stderr)
        sys.exit(1)

    filepath = sys.argv[1]

    try:
        with open(filepath, "r", encoding="utf-8") as f:
            source = f.read()
    except FileNotFoundError:
        print(f"Error: File not found: {filepath}", file=sys.stderr)
        sys.exit(1)
    except IOError as e:
        print(f"Error reading file: {e}", file=sys.stderr)
        sys.exit(1)

    parser = build_parser()

    try:
        tree = parser.parse(source)
    except Exception as e:
        print(f"SyntaxError: {e}", file=sys.stderr)
        sys.exit(1)

    interp = Interpreter()

    try:
        interp.execute(tree)
    except JSError as e:
        print(f"RuntimeError: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
