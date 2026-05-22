# 🚀 Full-Stack Web Development: Week-by-Week Learning Roadmap

Welcome to the **Week-1 to Week-6 Full-Stack Web Development Workspace**! This repository serves as a progressive hands-on learning roadmap, showcasing the transition from fundamental JavaScript logic, object-oriented concepts, and visual HTML/CSS layouts, to fully integrated Express.js & MongoDB backends.

---

## 📂 Repository Navigation Index

To explore the code, documentation, and specific exercises in detail, use the table of contents below:

| Directory | Scope & Topic | Tech Stack | Key Learnings |
| :--- | :--- | :--- | :--- |
| 📁 [Week-1](file:///Users/alampallypraneeth/week-1/week-1-1/Week-1) | Foundations of JavaScript | `Node.js` | Variables, Conditionals, OOP (Classes), Advanced Array Methods (`map`, `filter`, `reduce`). |
| 📁 [week-2](file:///Users/alampallypraneeth/week-1/week-1-1/week-2) | Intermediate JS & Modularity | `Node.js` | Shallow vs. Deep copy mechanics, Date API, Modular CLI Todo Application. |
| 📁 [week-3](file:///Users/alampallypraneeth/week-1/week-1-1/week-3) | Introduction to REST APIs | `Express.js`, `Mongoose` | Server initialization, Router endpoints (mock arrays), Mongoose validation schema. |
| 📁 [BackendmongoDB](file:///Users/alampallypraneeth/week-1/week-1-1/BackendmongoDB) | Asynchronous Databases | `Express.js`, `Mongoose`, `MongoDB` | Asynchronous CRUD API endpoints, Mongoose schema integration, error handling. |
| 📁 [Week-6](file:///Users/alampallypraneeth/week-1/week-1-1/Week-6) | Visual Grid & Flex Layouts | `HTML5`, `CSS3` | Responsive grid structure, card layouts, mountain-themed landscape layouts, and custom tabs. |
| 📁 [E-commerce](file:///Users/alampallypraneeth/week-1/week-1-1/E-commerce) | Production-Grade API Design | `Express`, `Mongoose`, `bcrypt` | Relational Mongoose references, secure credential hashing, subdocument arrays, `.populate()` queries. |

---

## 🛠️ Global Prerequisites & Setup

To run the backend servers and JavaScript CLI scripts locally, make sure you have the following prerequisites installed on your system:

### 1. Node.js & npm
- Ensure you have **Node.js (v16.x or higher)** and **npm (v8.x or higher)**.
- Verify installation by running:
  ```bash
  node -v
  npm -v
  ```

### 2. MongoDB Community Server
- A local MongoDB instance is required for the `week-3`, `BackendmongoDB`, and `E-commerce` directories.
- Default Connection URL: `mongodb://localhost:27017`
- You can manage databases visually using [MongoDB Compass](https://www.mongodb.com/products/compass).

### 3. REST API Testing Tool
- An extension like **REST Client (VS Code)** or **Postman** is highly recommended to trigger requests from the `.http` files.

---

## 🚀 Getting Started

To run any of the specific week's projects:

1. **Clone the repository and enter the directory**:
   ```bash
   cd /Users/alampallypraneeth/week-1/week-1-1
   ```

2. **Navigate into a specific subfolder (e.g., E-commerce)**:
   ```bash
   cd E-commerce
   ```

3. **Install module dependencies**:
   ```bash
   npm install
   ```

4. **Launch the development server**:
   ```bash
   npm start
   ```
   *(or check the custom scripts in each folder's dedicated `package.json`!)*

---

> [!NOTE]
> Each directory contains its own comprehensive **README.md** file detailing the files, setup, test cases, and technical descriptions. Click on any directory link in the **Navigation Index** above to start exploring!

---
*Happy coding! Built with 💻, ☕, and modern development standards.*
