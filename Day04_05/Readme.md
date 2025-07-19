# 📅 Day 04 & 05 – 18-19 July 2025

## ✅ What I Learned

### ⚙️ 1. Node.js File System Module – `fs`

This was my first real interaction with the **Node.js core modules**, and I explored how to read files both **synchronously** and **asynchronously** using the `fs` (File System) module.

- **Synchronous File Read – `readFileSync()`**
  Blocks further execution until the file is completely read.
  ```js
  const fs = require("fs");
  const data = fs.readFileSync("example.txt", "utf8");
  console.log(data);
  ```
  > ⛔ Be cautious – this blocks the thread, especially problematic for large files or real-time apps.

- **Asynchronous File Read – `readFile()`**
  Doesn’t block the thread. Instead, it registers a callback and moves on.
  ```js
  const fs = require("fs");
  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  ```
  > ✅ Ideal for performance, especially in I/O-heavy systems like servers and file-processing apps.

---

### 🚦 2. I/O-Heavy vs CPU-Heavy Tasks in Node.js

A fascinating part of learning async JavaScript was understanding how **Node.js handles task types** differently:

- **CPU-Intensive Tasks**:
  - Tasks like mathematical calculations, encryption, loops, etc.
  - These block the event loop because Node.js runs on a **single-threaded event loop**.

- **I/O-Intensive Tasks**:
  - Tasks like file reads, API calls, or database queries.
  - These are **delegated to the OS** and handled asynchronously.

#### 🧠 Key Insight:
Even if an I/O task starts **before** a CPU-heavy task, **the CPU task will still complete first** if it’s synchronous and blocking.

> 📌 *This is why understanding execution flow is vital for building efficient backends.*

---

### 🔄 3. Callback Queue & Event Loop

This was the most “aha!” moment of the week — discovering how JavaScript handles async code behind the scenes.

#### JavaScript's Execution Model:
1. **Call Stack** – where functions run.
2. **Node/Web APIs** – handle things like file reading, timers, etc.
3. **Callback Queue** – stores callback functions after async tasks are done.
4. **Event Loop** – checks if the stack is empty, then pushes a callback from the queue.

#### Example:
```js
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 0);

console.log("End");
```

**Output:**
```
Start
End
Async Task
```

> 🔁 Even with `setTimeout(..., 0)`, the async callback waits until the main thread is clear!

---

### 🧩 4. Functional Arguments & Callbacks in JavaScript

I also learned how **functions in JavaScript can be passed as arguments to other functions**, often used in asynchronous programming.

#### Example:
```js
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Pranshu", sayBye);
```

> 🧠 This is the foundation of **callback-based programming** — powerful but can lead to “callback hell” if not structured properly.

---

## 🌱 Reflection

These two days were all about **learning how JavaScript thinks** behind the scenes.

It’s one thing to *write* asynchronous code — and another to *understand* why it works the way it does. The event loop, callback queues, and non-blocking I/O have reshaped how I approach backend logic and performance.

> 💬 “Code is not just instructions to the computer — it's a conversation with time.”

Excited to take this knowledge further into Promises, async/await, and Express.js next!
