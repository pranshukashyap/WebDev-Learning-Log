# 📅 Day 02 & 03 – 16-17 July 2025

## ✅ What I Learned

### 🧠 JavaScript Basics Refresher

- Revisited how to **declare variables** using:
  - `var` – function-scoped, can be re-declared and updated.
  - `let` – block-scoped, can be updated but not re-declared in the same scope.
  - `const` – block-scoped, **cannot be updated or re-declared**.

### ➗ JavaScript Operators
- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`
- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT)
- **Comparison Operators**:
  - `==` → compares *value* (type coercion happens)
  - `===` → compares *value and type* (strict equality)

> 💡 *Lesson learned:* Always prefer `===` to avoid unexpected results!

---

### 🗃️ Objects in JavaScript
- An **object** is a collection of **key-value pairs**, like a `HashMap` in Java.
- Each **key** is a string (or symbol), and the **value** can be any valid JS data type – even another object!

```js
const student = {
  name: "Pranshu",
  age: 21,
  skills: ["HTML", "CSS", "JS"],
  isActive: true
};
