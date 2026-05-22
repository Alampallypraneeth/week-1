# 📁 BackendmongoDB: Asynchronous Express.js & MongoDB Database Integration

This directory contains a complete backend application showcasing **full database persistence** using **MongoDB** and **Mongoose**. It demonstrates asynchronous programming paradigms in Node.js (via `async`/`await`), strict database validation schemas, and robust CRUD (Create, Read, Update, Delete) REST API endpoints.

---

## 🛠️ Architecture & Database Layer

Unlike mock in-memory storage systems, this application establishes a real connection to a local MongoDB instance.

```
                  ┌──────────────────────────────┐
                  │      Express.js Server       │
                  │         (Port 4000)          │
                  └──────────────┬───────────────┘
                                 │ HTTP Requests
                                 ▼
                  ┌──────────────────────────────┐
                  │      APIs/ (Router Layer)    │
                  │   userapi.js / productapi.js │
                  └──────────────┬───────────────┘
                                 │ Model Queries
                                 ▼
                  ┌──────────────────────────────┐
                  │    models/ (Mongoose ORM)    │
                  │  UserModel.js / productModel.js
                  └──────────────┬───────────────┘
                                 │ Binary Driver
                                 ▼
                  ┌──────────────────────────────┐
                  │    MongoDB Server Database   │
                  │      ('Akhileshdb' DB)       │
                  └──────────────────────────────┘
```

---

## 📂 File Breakdown & Schema Definitions

### 1. Database Model Layer (`/models`)

* 📄 **[models/userModel.js](file:///Users/alampallypraneeth/week-1/week-1-1/BackendmongoDB/models/userModel.js)**:
  - Connects user records to a strict schema containing `username` (string, required, length 3-20), `password` (string, required, length 3-20), and `age` (number, required, integer range 18-25).
* 📄 **[models/productModel.js](file:///Users/alampallypraneeth/week-1/week-1-1/BackendmongoDB/models/productModel.js)**:
  - Maps product records including fields: `ID` (string, required), `Name` (string, required), and `price` (number, required).

---

### 2. Route Controller Layer (`/APIs`)

Both routers utilize asynchronous execution (`async`/`await`) to manage query timings safely:

#### 📄 [APIs/userapi.js](file:///Users/alampallypraneeth/week-1/week-1-1/BackendmongoDB/APIs/userapi.js) (User Operations)
* **`GET /user-api/users`**: Asynchronously calls `UserModel.find()` to fetch all users.
* **`POST /user-api/users`**: Instantiates a new Mongoose document (`new UserModel(req.body)`) and performs a `.save()` call, triggering automatic model validation.
* **`GET /user-api/users/:id`**: Finds a specific user by their MongoDB `_id` using `UserModel.findById(id)`.
* **`PUT /user-api/users/:id`**: Updates user records via `UserModel.findByIdAndUpdate(id, {$set: ...}, {new: true})`.
* **`DELETE /user-api/users/:id`**: Removes user records from the database via `UserModel.findByIdAndDelete(id)`.

#### 📄 [APIs/productapi.js](file:///Users/alampallypraneeth/week-1/week-1-1/BackendmongoDB/APIs/productapi.js) (Product Operations)
* Exposes matching query routines (`find()`, `.save()`, `findById()`, `findByIdAndUpdate()`, and `findByIdAndDelete()`) to run complete CRUD management on catalog products under `/product-api/products`.

---

### 3. Application Core Entrypoint (`server.js`)
* **[server.js](file:///Users/alampallypraneeth/week-1/week-1-1/BackendmongoDB/server.js)**: Orchestrates server initialization and database handshakes.
* **Connection String**: `mongodb://localhost:27017/Akhileshdb`
* **Route Mounting**:
  - `/user-api` triggers the User Router middleware.
  - `/product-api` triggers the Product Router middleware.

---

## 🚀 Execution & Verification

### 1. Pre-Run Prerequisites
* Confirm your **local MongoDB Server** is running (`mongodb://localhost:27017`).
* Create a database called `Akhileshdb` or let Mongoose automatically create it during the first insert.

### 2. Startup Command
Navigate to the directory and start the server:
```bash
cd /Users/alampallypraneeth/week-1/week-1-1/BackendmongoDB
npm install
node server.js
```

### 3. API Testing Script
Issue request operations using the local request test script **[test.http](file:///Users/alampallypraneeth/week-1/week-1-1/BackendmongoDB/test.http)**.

* **Sample User Post**:
  ```http
  POST http://localhost:4000/user-api/users
  Content-Type: application/json

  {
    "username": "Ravi",
    "password": "pwd",
    "age": 21
  }
  ```

* **Sample Product Post**:
  ```http
  POST http://localhost:4000/product-api/products
  Content-Type: application/json

  {
    "ID": "PROD889",
    "Name": "Wireless Gaming Mouse",
    "price": 1200
  }
  ```

---

> [!TIP]
> Use [MongoDB Compass](https://www.mongodb.com/products/compass) to connect to `mongodb://localhost:27017` and inspect the `users` and `products` collections in real-time as you trigger requests!
