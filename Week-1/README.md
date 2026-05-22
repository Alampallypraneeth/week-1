# 📁 Week 1: Foundational JavaScript & Object-Oriented Programming

This directory contains key programming assignments and hands-on exercises covering the fundamental structures of **JavaScript (ES6+)**. The goals of this module are to establish standard syntactical fluency, understand memory operations on arrays and objects, and master Object-Oriented Class designs.

---

## 📂 File Breakdown & Descriptions

Here is an analysis of all files in this module, what they accomplish, and their target utilities:

| File Name | Topic | Key JavaScript Features | Description |
| :--- | :--- | :--- | :--- |
| 📄 [control.js](file:///Users/alampallypraneeth/week-1/week-1-1/Week-1/control.js) | Conditional Control Flow | Ternary operators, logical AND/OR, multiple `if-else` layers. | Contains three interactive scenarios: a smart login validation status engine, a dynamic course price-tag leveler, and an enrollment eligibility checker. |
| 📄 [classdemo.js](file:///Users/alampallypraneeth/week-1/week-1-1/Week-1/classdemo.js) | Object-Oriented (OOP) Classes | Constructor initialization, custom methods, object arrays, and array operations. | A fully implemented library book management system utilizing a `Book` class structure to manage collections, book states (borrowing/returning), and filter long books (>300 pages). |
| 📄 [object.js](file:///Users/alampallypraneeth/week-1/week-1-1/Week-1/object.js) | Object Literals & Operations | Property mutation, dynamic keys (`Object.keys`), deletions, loops. | Focuses on managing user profile metadata (adding keys, updating roles, key deletion) and calculating structured statistics like math/science result averages. |
| 📄 [arraysmple.js](file:///Users/alampallypraneeth/week-1/week-1-1/Week-1/arraysmple.js) | Basic Array Operations | `.filter()`, `.map()`, `.reduce()`, `.find()`, `.findIndex()`. | Includes calculations for conversion of Celsius temperatures to Fahrenheit, filtering temperatures above 35, averaging arrays, and mapping array strings into dynamic banners. |
| 📄 [arrayadv.js](file:///Users/alampallypraneeth/week-1/week-1-1/Week-1/arrayadv.js) | Advanced Array Operations | Object matching, complex `.reduce()` accumulators, deep array queries. | Standard cart calculator mapping in-stock items, multiplying unit prices by quantities, generating total cart value summaries, and running matching queries. |
| 📄 [operators.js](file:///Users/alampallypraneeth/week-1/week-1-1/Week-1/operators.js) | Mathematical & Logical Operators | Addition assignment (`+=`), subtraction assignment (`-=`), multiplication. | Simulates an interactive billing ledger system: adding prices, calculating complex percentage GST, applying manual dollar discounts, and summarizing the final ledger total. |
| 📄 [collections.js](file:///Users/alampallypraneeth/week-1/week-1-1/Week-1/collections.js) | Data Collections & Immutability | Immutability patterns, Spread operators, `.some()` arrays. | Focuses on active user filters, admin matching tests, and updating object attributes without mutating original arrays. |

---

## 💡 Practical Use Cases & Takeaways

### 1. Mastering Functional Array Methods
These exercises show how modern JavaScript replaces legacy `for` loops with functional, highly readable array methods:
* **`filter()`**: Returns a subset of elements matching a condition (e.g., retrieving only *in-stock* products or temperatures *above 35°C*).
* **`map()`**: Transforms each element in place without altering the original array (e.g., converting temperature scales or extracting names).
* **`reduce()`**: Accumulates elements into a single scalar value (e.g., summing up cart totals or computing average grades).

### 2. Standardizing Objects & Classes (OOP)
* Use custom Javascript Class declarations to group data and behavior cleanly.
* Utilize the **Spread Operator (`...`)** to modify child values immutably, protecting state references from accidental side-effects.

---

## 🚀 Execution Instructions

To execute any script in this folder using your local Node.js engine, run the following commands:

1. **Open your terminal and enter the module directory**:
   ```bash
   cd /Users/alampallypraneeth/week-1/week-1-1/Week-1
   ```

2. **Execute the desired JavaScript file**:
   ```bash
   node classdemo.js
   ```

---

> [!TIP]
> Keep the console output visible when executing these files to observe key mathematical accumulations, array structures, and class method triggers!
