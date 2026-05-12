# 📙 Week 2 — Intermediate JavaScript & Data Structures

This folder contains intermediate-level JavaScript assignments covering arrays, modular programming, object-oriented concepts, copy semantics, timer functions, and introductory API work.

---

## 📁 Folder Structure

```
week-2/
├── day-3/                              # Day 3 — Arrays, Modules & Task Management
│   ├── Array-operations-simple/        # Basic array methods (push, pop, shift, unshift, etc.)
│   ├── Array-operations-advanced/      # Advanced array methods (map, filter, reduce, etc.)
│   ├── module2/                        # JavaScript module system (import/export)
│   └── task-management/               # Task management app using arrays and modules
├── day-4/                              # Day 4 — Objects, Spread/Rest, Timers & Copy Methods
│   ├── Shallow-Deepcopy/              # Shallow vs. deep copy demonstrations
│   ├── Spread-operator-Rest-parameter/ # Spread operator and rest parameter usage
│   ├── Timer-functions-demo/          # setTimeout, setInterval, and clearInterval demos
│   └── Book.js                        # OOP: Book class/object implementation
└── productapi.js                       # Product API — fetch and display product data
```

---

## 📝 Assignment Details

### 📂 `day-3/` — Arrays, Modules & Task Management

| Folder / File | Description |
|---------------|-------------|
| `Array-operations-simple/` | Basic array manipulation — `push`, `pop`, `shift`, `unshift`, `splice`, `slice` |
| `Array-operations-advanced/` | Higher-order array methods — `map`, `filter`, `reduce`, `find`, `sort` |
| `module2/` | JavaScript module system — creating and consuming modules with `import`/`export` |
| `task-management/` | A simple task management application combining arrays and modular architecture |

### 📂 `day-4/` — Objects, Spread/Rest, Timers & Copy Methods

| Folder / File | Description |
|---------------|-------------|
| `Shallow-Deepcopy/` | Demonstrates the difference between shallow copy and deep copy in JavaScript |
| `Spread-operator-Rest-parameter/` | Usage of the spread operator (`...`) and rest parameters in functions |
| `Timer-functions-demo/` | Working with `setTimeout`, `setInterval`, and `clearInterval` |
| `Book.js` | Object-oriented programming — defining and using a Book class/object |

### 📄 Root File

| File | Description |
|------|-------------|
| `productapi.js` | Fetching and displaying product data from an external API |

---

## ▶️ How to Run

```bash
# Navigate to the week-2 directory
cd assignments/week-2

# Run a specific file
node productapi.js
node day-4/Book.js

# Run files inside subfolders
node day-3/Array-operations-simple/<filename>.js
```

---

## 🎯 Learning Outcomes

- Manipulate arrays using both basic and higher-order methods
- Structure code with JavaScript modules (`import`/`export`)
- Understand shallow vs. deep copy behavior with objects and arrays
- Use the spread operator and rest parameters effectively
- Work with asynchronous timer functions
- Implement basic OOP concepts with JavaScript objects/classes
- Fetch and process data from external APIs
