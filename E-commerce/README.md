# 📁 E-commerce: Relational MongoDB Schemas, Cryptographic Hashing & Cart Operations

This directory contains a **production-grade E-commerce REST API backend** built with **Express.js**, **Mongoose**, and **MongoDB**. It introduces advanced backend development concepts, including secure credential hashing using **bcrypt**, nested relational data modeling using **Mongoose references**, dynamic shopping cart managers, and joined collection returns using **Mongoose query population**.

---

## 🛠️ Advanced Features & Mechanics

### 1. Cryptographic Password Hashing (`bcrypt`)
- Secures user login credentials by hashing passwords using **bcrypt** (10 salt rounds) before committing data to the MongoDB database.
- Implements strict validation (`await new UserModel(newUser).validate()`) to catch incorrect fields before proceeding with password hashing or database updates.

### 2. Nested Relational Modeling (Subdocuments & Refs)
- Connects user records to catalog products using a relational **Mongoose Schema Reference**:
  ```javascript
  const cartSchema = new Schema({
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product", // References the "Product" model in MongoDB
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    }
  });
  ```
- Users are assigned a `cart` attribute which acts as a dynamic array of these subdocuments.

### 3. Smart Shopping Cart Controller
- Exposes a multi-parameter Express route (`PUT /users-api/user-cart/user-id/:uid/product-id/:pid`) to handle cart modifications:
  - If a user adds a product that **already exists** in their cart, the system increments the item's `quantity` by 1.
  - If the product **does not exist**, the system appends it to the subdocument array as a new record with a default quantity of 1.

### 4. Mongoose Query Population (`.populate()`)
- Exposes a dedicated cart retrieval endpoint (`GET /users-api/user-cart/user-id/:uid`).
- Rather than returning raw, uninformative product ObjectIDs, it leverages **`.populate("cart.product")`** to dynamically perform a database join, replacing the product reference ID with the full matching document (e.g., `productName`, `price`, and `brand`).

---

## 📂 File Architecture

```
E-commerce/
├── server.js               # Express application initializer and DB connector
├── req.http                # REST endpoint script for testing E-commerce routes
├── package.json            # Configuration and external dependencies
├── APIs/                   # Route controllers
│   ├── userapi.js          # REST endpoints for users and shopping carts
│   └── productapi.js       # REST endpoints for adding catalog products
└── Models/                 # Database schema templates
    ├── userModel.js        # Relational User schema with cart subdocument array
    └── productModel.js     # Catalog Product schema
```

---

## 🚀 Installation & Local Launch

### 1. Database Configuration
* Ensure your **local MongoDB Server** is running on port `27017`.
* The connection string points to `mongodb://localhost:27017/ecommerce`.

### 2. Startup Command
Navigate to the directory and start the server:
```bash
cd /Users/alampallypraneeth/week-1/week-1-1/E-commerce
npm install
node server.js
```

---

## 🧪 Testing E-commerce APIs

Use the local HTTP runner file **[req.http](file:///Users/alampallypraneeth/week-1/week-1-1/E-commerce/req.http)** to test your API routes:

### 1. Create a Product
```http
POST http://localhost:4000/products-api/products
Content-Type: application/json

{
  "productName": "Developer Laptop Pro",
  "price": 85000,
  "brand": "TechBrand"
}
```

### 2. Create a User (Triggers Bcrypt Hashing)
```http
POST http://localhost:4000/users-api/user
Content-Type: application/json

{
  "name": "Ravi Kumar",
  "email": "ravi.kumar@example.com",
  "password": "mySecurePassword123"
}
```

### 3. Add Product to User's Cart (Handles Duplicates & Quantities)
```http
PUT http://localhost:4000/users-api/user-cart/user-id/<USER_ID>/product-id/<PRODUCT_ID>
```

### 4. Fetch Populated User Cart (Returns Complete Product Details)
```http
GET http://localhost:4000/users-api/user-cart/user-id/<USER_ID>
```

---

> [!IMPORTANT]
> When testing the cart endpoints, remember to replace `<USER_ID>` and `<PRODUCT_ID>` in your HTTP requests with the actual hexadecimal `_id` strings generated and returned by your POST requests!
