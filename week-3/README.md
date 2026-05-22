# 📁 week-3: Introduction to REST APIs, Express Routing & Database Schemas

This directory marks the transition from standalone console scripts to **HTTP Server Architecture**. It introduces the **Express.js** framework to orchestrate RESTful routing, defines standard CRUD logic on mock in-memory database arrays, and outlines initial object database structures using **Mongoose Schemas** with native field constraints.

---

## 🛠️ Tech Stack & Dependencies

* **Core Runtime**: `Node.js (ES6+ Module import/export format)`
* **Framework**: `Express.js`
* **Object Data Modeling (ODM)**: `Mongoose` (MongoDB Integration)
* **Client testing script**: `.http` file format supported by standard REST client engines.

---

## 📂 File Structure & Descriptions

Here is a visual map of the component layout:

```
week-3/
├── server.js               # Central HTTP server entrypoint
├── req.http                # HTTP request test script
├── package.json            # Configuration and packages
├── APIs/                   # Express modular routers
│   ├── usersapi.js         # REST endpoints for user data (in-memory)
│   └── productsapi.js      # REST endpoints for product data (in-memory)
└── models/                 # Database data schema definitions
    └── usermodel.js        # Mongoose User Schema & validations
```

### 1. 📄 [server.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-3/server.js)
* **Objective**: Orchestrates server initialization and database handshakes.
* **Details**: Establishes an asynchronous MongoDB connection to `mongodb://localhost:27017/anuragdb2`. Once connected, it mounts the JSON request body-parser middleware, attaches modular Router endpoints, and listens for traffic on **Port 4000**.

### 2. 📁 [APIs/](file:///Users/alampallypraneeth/week-1/week-1-1/week-3/APIs) (Modular REST Routers)
* 📄 **[APIs/usersapi.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-3/APIs/usersapi.js)**: Implements CRUD endpoints using Express Router:
  - `GET /users`: Fetches the entire collection of users.
  - `POST /users`: Creates a new user entry and appends it to the collection.
  - `PUT /users/id`: Updates user properties based on a body-supplied unique ID.
  - `GET /users/:id`: Queries users using path parameters (`req.params`).
  - `DELETE /users/id`: Deletes a user by searching for their ID.
* 📄 **[APIs/productsapi.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-3/APIs/productsapi.js)**: Employs matching routing logic to host products in an in-memory collection:
  - `GET /Products`: Reads products.
  - `POST /products`: Inserts new records.
  - `PUT /products/id`: Modifies products or raises a `404 Product Not Found` error.
  - `GET /products/:id`: Retreives product by standard URL parameter mapping.
  - `DELETE /products/id`: Handles product deletion.

### 3. 📄 [models/usermodel.js](file:///Users/alampallypraneeth/week-1/week-1-1/week-3/models/usermodel.js)
* **Objective**: Defines database object patterns using a Mongoose Schema.
* **Schema Constraints**:
  - `username`: Type String. Must be present, length bounded between 3 and 8 characters.
  - `password`: Type String. Length bounded between 3 and 8 characters.
  - `age`: Type Number. Restricted to range 18 to 25 (inclusive).

---

## 🚀 Installation & Local Launch

Follow these steps to run the server in your local environment:

1. **Verify your local MongoDB instance is active**:
   Make sure MongoDB is running on port `27017` with connection string `mongodb://localhost:27017/anuragdb2`.

2. **Navigate into the week-3 directory**:
   ```bash
   cd /Users/alampallypraneeth/week-1/week-1-1/week-3
   ```

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Launch the backend server**:
   ```bash
   node server.js
   ```

---

## 🧪 Testing REST Endpoints

Use the local HTTP runner file **[req.http](file:///Users/alampallypraneeth/week-1/week-1-1/week-3/req.http)** to issue manual HTTP request requests against the running Express application. Below is a sample payload to verify the creation of users:

```http
POST http://localhost:4000/user-api/users
Content-Type: application/json

{
  "id": 101,
  "username": "shiva",
  "password": "123",
  "age": 22
}
```

---

> [!IMPORTANT]
> Since this initial version stores User and Product data in **in-memory arrays**, restarting the Node.js server process will clear any records added via the POST requests. Mongoose Schemas are defined in `models/` but will be fully utilized with actual database persistence in subsequent folders!
