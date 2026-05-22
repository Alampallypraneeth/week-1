# 📁 week-2: Intermediate JavaScript, Memory Models & Modularity

This module covers intermediate programming challenges. Key topics include understanding memory allocation behaviors in copy operations, manipulating custom system calendars using the JavaScript Date API, and designing a modular command-line interface (CLI) Todo application using the CommonJS module system.

---

## 📂 File Structure & Descriptions

Here is a breakdown of the files located within this directory:

### Core JavaScript Concepts

| File Name | Objective | Key Mechanics | Description |
| :--- | :--- | :--- | :--- |
| 📄 [shallowcopy.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-2/shallowcopy.js) | Shallow Copy Verification | Spread Operator (`...`), memory referencing. | Demonstrates that shallow copying only duplicates top-level primitives. Nested objects or arrays maintain direct memory references, meaning modifications inside deep layers impact both original and cloned entities. |
| 📄 [deepcopy.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-2/deepcopy.js) | Deep Copy Validation | `JSON.parse(JSON.stringify())` | Verifies full value-level duplication. Nested variables are successfully separated in memory, ensuring that adjustments inside the cloned object's nested properties leave the source object intact. |
| 📄 [date-demo.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-2/date-demo.js) | Calendar & Date API | `Date()` constructors, format string builders. | Details date/time retrieval (Year, human-readable Month + 1, Day of the Week, Hours, Minutes, Seconds) and creates custom date string templates in `DD-MM-YYYY HH:mm:ss` format. |

---

### 📝 Modular CLI Todo Application (`/todo`)

The `todo` subfolder implements a highly organized console-based task management utility utilizing CommonJS modular architecture:

* 📁 **[todo/](file:///Users/alampallypraneeth/week-1/week-1-1/week-2/todo)**: Root application workspace folder.
* 📄 **[todo/validate.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-2/todo/validate.js)**: Input validation middleware.
  - Verifies titles are strings of at least 3 non-empty characters.
  - Ensures task priority is exactly `'low'`, `'medium'`, or `'high'`.
  - Asserts that task due dates are valid calendar strings pointing strictly to the future.
* 📄 **[todo/task.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-2/todo/task.js)**: Central data manager.
  - Maintains an in-memory task database array with auto-incrementing integer IDs.
  - Exposes functions: `addTask(title, priority, dueDate)`, `getAllTasks()`, and `completeTask(taskId)`.
* 📄 **[todo/app.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-2/todo/app.js)**: Execution entrypoint.
  - Orchestrates execution, imports module APIs, sets up sample entries, triggers validation rules, marks items complete, and reports data summaries in the console logs.

---

## 🔬 Core Takeaway: Shallow vs. Deep Copy Reference

When working with reference types (objects and arrays) in JavaScript, memory acts as follows:

| Attribute | Shallow Copy (`{...obj}`) | Deep Copy (`JSON.parse(JSON.stringify(obj))`) |
| :--- | :--- | :--- |
| **Top-Level Primitives** | Copied by value (Separate in memory) | Copied by value (Separate in memory) |
| **Nested Objects** | Copied by reference (Shared memory link) | Copied by value (Completely separate in memory) |
| **Performance Cost** | Extremely low / Instantaneous | Moderately higher (due to string serialization) |
| **Safe for Relational Data**| No (Mutations leak back to parent objects) | Yes (100% mutation safety) |

---

## 🚀 Execution Instructions

### 1. Run the JS Concept Demos
Open your terminal and execute:
```bash
cd /Users/alampallypraneeth/week-1/week-1-1/week-2
node shallowcopy.js
node deepcopy.js
node date-demo.js
```

### 2. Run the Modular Todo Application
Navigate into the `todo` folder and execute the main controller file:
```bash
cd /Users/alampallypraneeth/week-1/week-1-1/week-2/todo
node app.js
```

---

> [!WARNING]
> Running validation rules in `todo/validate.js` requires standard system times. Ensure your computer's clock is synced so future due dates are validated correctly against current timestamps!
