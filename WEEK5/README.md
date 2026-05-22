# 📁 WEEK 5: Node.js Fundamentals & Full-Stack Blog Web Application

Welcome to the **Week 5 Workspace**! This module is divided into two distinct components: a theoretical study of core **Node.js** mechanisms (file handling, core HTTP servers, module structures), and a fully features, production-grade **Full-Stack MERN (React, Express, MongoDB, Node) Blog Web Application**.

---

## 📖 Part 1: Node.js Backend Fundamentals

This section covers the foundation of writing JavaScript on the server outside of a browser environment.

### 1. Essential Characteristics of Node.js
* **Event-Driven & Non-Blocking I/O**: Handles massive concurrent connections efficiently by passing tasks to a single-threaded event loop and executing I/O operations asynchronously.
* **Single-Threaded**: Runs all user code on a single thread, reducing context switching overhead.
* **NPM Ecosystem Support**: Instant access to thousands of custom packages and libraries.

### 2. Module Architectures & Core File System
* **Core Modules**: Built-in Node modules (e.g., `fs` for file management, `http` for servers, `path` for directories).
* **Syntax Examples**:
  ```javascript
  const fs = require('fs');
  
  // Write operation
  fs.writeFileSync("sample.txt", "Hello NodeJS");
  
  // Read operation
  const content = fs.readFileSync("sample.txt", "utf-8");
  ```

---

## 🚀 Part 2: Full-Stack Blog Application

A complete web platform supporting distinct user roles (Reader, Author, Admin), article editors, secure registration/login, cloud image uploads, and state management.

```
                      ┌────────────────────────────────────┐
                      │    React + Vite Client Frontend    │
                      │            (Port 5173)             │
                      └────────────────┬───────────────────┘
                                       │ HTTP REST Requests
                                       ▼
                      ┌────────────────────────────────────┐
                      │      Express.js API Backend        │
                      │            (Port 4000)             │
                      └────┬───────────┬────────────────┬──┘
                           │           │                │
                           ▼           ▼                ▼
            ┌──────────────┐   ┌──────────────┐   ┌─────────────┐
            │ MongoDB Comp │   │  Cloudinary  │   │ JWT Cookies │
            │ (Akhileshdb) │   │ (Media CDN)  │   │  (Auth)     │
            └──────────────┘   └──────────────┘   └─────────────┘
```

---

### 📂 Folder Layout

* 📁 **[BLOG-APP-BACKEND/](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-BACKEND)**: Node Express backend API server.
* 📁 **[BLOG-APP-FRONTEND/](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-FRONTEND)**: React Vite user interface.

---

### 💻 1. The Express.js Backend (`BLOG-APP-BACKEND`)

The backend is built with custom microservice APIs, strict mongoose schema validation, and secure cryptographic layers:

* 📄 **[server.js](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-BACKEND/server.js)**: Initializes port listening (Port 4000), mounts body parsers, loads cookie parser, connects to MongoDB (`mongodb://localhost:27017/Akhileshdb`), and manages routes:
  - `/user-api` User interface routes.
  - `/author-api` Author editing routes.
  - `/admin-api` System monitoring dashboard routes.
  - `/common-api` Shared public endpoints.

* 📁 **[models/](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-BACKEND/models)** (Database Modeling):
  - **`UserModel.js`**: Stores users, authors, and admins with structural constraints, including profile image links, dynamic roles (`enum: ['AUTHOR','USER','ADMIN']`), and account active states.
  - **`ArticleModel.js`**: Houses blog articles, tying titles, tags, and rich content directly to authors (`ref: 'user'`).

* 📁 **[services/](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-BACKEND/services)** (Core Logic):
  - **`authService.js`**: Handles **Bcrypt password hashing (10 salt rounds)**, secure registration, email validation checks, and **JWT Token issuance** (valid for 7 days) upon successful login.

* 📁 **[Middlewares/](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-BACKEND/Middlewares)** (Security & Protection):
  - **`verifyToken.js`**: Decodes incoming cookies, extracts JWT payloads, and validates authentications.
  - **`checkAuthor.js`**: Asserts that the authenticated user carries an `'AUTHOR'` role classification.

* 📁 **[config/](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-BACKEND/config)** (File Upload Pipeline):
  - Configures **Cloudinary** and **Multer** storage systems, enabling writers and users to securely upload graphic elements and avatars directly to the cloud.

---

### ⚛️ 2. The React Frontend (`BLOG-APP-FRONTEND`)

A responsive frontend built using **Vite**, **React Router DOM**, and state management utilities:

* 📁 **[src/components/](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-FRONTEND/src/components)** (Application Views & UI):
  - **`Login.jsx` & `Register.jsx`**: Visually stunning, secure connection interfaces.
  - **`UserDashboard.jsx`**: Enables readers to view published articles from all authors in a responsive, flexible grid system:
    - *1 card for Extra Small screens*
    - *2 cards for Small screens*
    - *3 cards for Medium screens*
    - *4 cards for Large screens onwards*
  - **`AuthorDashboard.jsx`**: Author controls to write, edit, delete, and view their own articles.
  - **`WriteArticle.jsx` & `EditArticle.jsx`**: Powerful blog composition tools.
  - **`RootLayout.jsx` & `ErrorBoundary.jsx`**: Defines general layouts, navigation headers, footers, and fallback error pages.
  - **`protectedRoute.jsx`**: Protects secure dashboards from unauthenticated sessions.

* 📁 **[src/store/](file:///Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-FRONTEND/src/store)** (Authentication Store):
  - **`authStore.js`**: Manages global logged-in states, session tokens, and user credentials.

---

## 🚀 Installation & Local Execution

### 1. Backend Server Setup
1. **Enter directory**:
   ```bash
   cd /Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-BACKEND
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure environment variables (`.env`)**:
   Create a `.env` file containing the following:
   ```env
   PORT=4000
   JWT_SECRET=your_super_secret_jwt_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
4. **Start the API Server**:
   ```bash
   npm start
   ```

### 2. Frontend client Setup
1. **Enter directory**:
   ```bash
   cd /Users/alampallypraneeth/week-1/week-1-1/WEEK5/BLOG-APP-FRONTEND
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Launch the development client**:
   ```bash
   npm run dev
   ```
4. Open the browser link returned (typically `http://localhost:5173`) to interact with the platform!

---

> [!IMPORTANT]
> Ensure both your **local MongoDB Server** is running and your `.env` secrets are configured correctly before starting the blog backend, as database and Cloudinary connections are checked during initialization!
