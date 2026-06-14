# Hackathon 02 - JavaScript Interpreter in Python

## Overview

This project is a custom JavaScript Interpreter built in Python using the Lark parsing library.

The goal of the hackathon was to build a program capable of accepting JavaScript code as input, parsing it, executing it, and producing the correct output without using JavaScript as the implementation language.

The interpreter reads JavaScript source code from a `.js` file, generates an Abstract Syntax Tree (AST), and executes the program using a tree-walking interpreter.

---

# Tech Stack

* Python 3.x
* Lark Parser
* Custom Tree-Walking Interpreter

---

# Project Structure

```text
Hackathon02/
│
├── main.py
├── parser.py
├── interpreter.py
├── requirements.txt
├── README.md
│
└── examples/
    ├── palindrome.js
    ├── armstrong.js
    ├── arrays_demo.js
    └── ...
```

---

# Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd Hackathon02
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# Running the Interpreter

Run any JavaScript file using:

```bash
python main.py path/to/file.js
```

Example:

```bash
python main.py examples/test1.js
```

---

# Features Implemented

## Variable Declarations

```js
let x = 10;
const name = "Ketan";
```

Supported:

* let
* const

---

## Primitive Data Types

Supported:

* number
* string
* boolean
* null
* undefined

Example:

```js
let age = 25;
let name = "Ketan";
let active = true;
let x = null;
let y = undefined;
```

---

## Functions

### Function Declarations

```js
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));
```

### Function Expressions

```js
let add = function(a, b) {
    return a + b;
};

console.log(add(2, 3));
```

### Callback Functions

```js
function run(cb) {
    return cb(10);
}
```

---

## Objects

Basic object support:

```js
let person = {
    name: "Ketan",
    age: 25
};

console.log(person.name);
```

Property assignment:

```js
person.age = 26;
```

---

## Conditional Statements

Supported:

* if
* else if
* else

Example:

```js
if (age > 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
```

---

## Loops

### For Loop

```js
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### While Loop

```js
while (x > 0) {
    x--;
}
```

### Do While Loop

```js
do {
    x++;
} while (x < 10);
```

---

# Operators

## Arithmetic Operators

Supported:

```text
+
-
*
/
%
**
```

## Comparison Operators

Supported:

```text
==
===
!=
!==
<
>
<=
>=
```

## Logical Operators

Supported:

```text
&&
||
!
```

## Assignment Operators

Supported:

```text
=
+=
-=
*=
/=
%=
```

---

# Arrays

Array literals:

```js
let nums = [1, 2, 3];
```

Array indexing:

```js
nums[0]
```

Array length:

```js
nums.length
```

Spread operator:

```js
[...nums]
```

### Supported Array Methods

* push()
* pop()
* shift()
* unshift()
* concat()
* slice()
* reverse()
* sort()
* includes()
* indexOf()

Examples:

```js
nums.push(4);
nums.pop();
nums.reverse();
nums.sort();
```

---

# String Methods

Supported:

* split()
* trim()
* replace()
* replaceAll()
* substring()
* slice()
* toUpperCase()
* toLowerCase()
* includes()
* startsWith()
* endsWith()
* indexOf()
* join()

Example:

```js
let str = "hello world";

console.log(str.toUpperCase());
console.log(str.includes("world"));
```

---

# Date Support

Supported:

```js
let d = new Date();
```

Methods:

* getFullYear()
* getMonth()
* getDate()
* getDay()
* getHours()
* getMinutes()
* getSeconds()

Example:

```js
let d = new Date();

console.log(d.getFullYear());
```

---

# Example Programs

### Odd / Even Checker

```js
let num = 7;

if (num % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
```

### Armstrong Number

```js
function isArmstrong(num) {
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}
```

### Palindrome Checker

```js
function isPalindrome(str) {
    let reversed = str
        .split("")
        .reverse()
        .join("");

    return str === reversed;
}
```

---

# Limitations

This interpreter is intentionally lightweight and does not yet implement the full JavaScript specification.

Some advanced features may be partially implemented or not supported:

* Classes
* Prototype chain
* Modules
* Async / Await
* Promises
* DOM APIs
* Browser APIs

---

# Author

Ketan

Hackathon 02 Submission
