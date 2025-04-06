# 🧪 TDD Kata 1: String Calculator

A TypeScript implementation of the classic [String Calculator Kata](http://osherove.com/kata), built using a **Test-Driven Development (TDD)** approach with Jest.

---

## 📋 Problem Statement

Create a class `StringCalculator` with a method `add(numbers: string): number` that can accept a string of numbers and return their sum, following a series of progressively complex rules.

---

## ✅ Features Implemented

| Step | Feature                                                                         |
| ---- | ------------------------------------------------------------------------------- |
| 1    | Returns `0` for an empty string (`"" → 0`)                                      |
| 2    | Returns the number itself for a single value (`"1" → 1`)                        |
| 3    | Returns the sum of two comma-separated numbers (`"1,2" → 3`)                    |
| 4    | Handles an unknown amount of comma-separated numbers                            |
| 5    | Supports newlines as valid delimiters (`"1\n2,3" → 6`)                          |
| 6    | Supports custom delimiters (`"//;\n1;2" → 3`)                                   |
| 7    | Throws an exception for negative numbers (`"negatives not allowed: -1"`)        |
| 8    | Shows all negative numbers in the exception (`"negatives not allowed: -1, -4"`) |
| 9    | Tracks method invocations via `getCalledCount()`                                |
| 10   | Ignores numbers greater than 1000 (`"2,1001" → 2`)                              |
| 11   | Supports custom delimiters of any length (`"//[***]\n1***2***3" → 6`)           |
| 12   | Supports multiple delimiters (`"//[*][%]\n1*2%3" → 6`)                          |
| 13   | Supports multiple delimiters with length > 1 (`"//[**][%%]\n1**2%%3" → 6`)      |

## 🛠 Getting Started

### 📁 Clone the Repository

```bash
git clone https://github.com/SSBarik/string-calculator-tdd-kata.git
cd string-calculator-kata
```

### 📦 Install Dependencies

```bash
npm install
```

### 🚀 Run Tests

```bash
npm test
```

---

## 🧪 Example Usage

```ts
import { StringCalculator } from './StringCalculator';

const calculator = new StringCalculator();

console.log(calculator.add(""));              // Output: 0
console.log(calculator.add("1"));             // Output: 1
console.log(calculator.add("1,2"));           // Output: 3
console.log(calculator.add("1\n2,3"));        // Output: 6
console.log(calculator.add("//;\n1;2"));      // Output: 3

console.log(calculator.getCalledCount());     // Output: 5


## 📚 References

- Original Kata: [TDD Kata by Roy Osherove](https://osherove.com/tdd-kata-1)
```
