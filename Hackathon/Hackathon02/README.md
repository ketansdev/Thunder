# Toy JavaScript Interpreter

A minimal JavaScript interpreter written in Python, powered by the [Lark](https://github.com/lark-parser/lark) parsing toolkit.

## Features

| Feature | Supported |
|---|---|
| `let` / `const` declarations | ✅ |
| Number literals (int & float) | ✅ |
| String literals | ✅ |
| `console.log()` | ✅ |
| Arithmetic operators `+ - * / %` | ✅ |
| String concatenation with `+` | ✅ |
| Comparison operators `=== !== == != < > <= >=` | ✅ |
| `!` (logical NOT) | ✅ |
| `if / else if / else` | ✅ |
| `for` loops (with `i++` / `i--`) | ✅ |
| `while` loops | ✅ |
| Lexical scoping (nested blocks) | ✅ |
| Single-line `//` and block `/* */` comments | ✅ |

## Project Structure

```
.
├── main.py          # CLI entry point
├── parser.py        # Lark grammar + parser factory
├── interpreter.py   # Tree-walking interpreter
├── requirements.txt
└── README.md
```

## Installation

```bash
pip install -r requirements.txt
```

## Usage

```bash
python main.py <script.js>
```

### Example

```javascript
// hello.js
let name = "World";
const greeting = "Hello, " + name + "!";
console.log(greeting);

let total = 0;
for (let i = 1; i <= 10; i++) {
  total = total + i;
}
console.log("Sum 1-10:", total);

let x = 42;
if (x % 2 === 0) {
  console.log(x, "is even");
} else {
  console.log(x, "is odd");
}
```

```bash
$ python main.py hello.js
Hello, World!
Sum 1-10: 55
42 is even
```

## Architecture

### `parser.py` — Grammar

Defines an Earley grammar via Lark with these precedence layers:

```
expr → compare_expr → add_expr → mul_expr → unary_expr → atom
```

Named terminals (`ADD`, `SUB`, `MUL`, …) are used so operator tokens are preserved in the parse tree and available to the interpreter.

### `interpreter.py` — Tree Walker

A recursive `_run` / `_eval` dispatcher:

- **`_run`** executes statement nodes (declarations, control flow, `console.log`).
- **`_eval`** evaluates expression nodes and returns a Python value.
- **Scoping** is handled by a stack of `dict` objects; `let`/`const` declare into the innermost scope while assignment walks up the stack to find the existing binding.

### `main.py` — CLI

Reads a `.js` file, calls `build_parser()`, parses the source into a Lark `Tree`, and hands it to `Interpreter.execute()`. Errors at any stage are printed to `stderr` and exit with code 1.

## Limitations

- No functions / closures
- No arrays or objects
- No `var` (only `let` / `const`)
- No `return`, `break`, or `continue`
- No template literals
- Numbers are Python `int` / `float` (no IEEE 754 edge cases)
