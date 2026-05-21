# Web Application Development & Back-End Lab Workspace

Welcome to the comprehensive documentation of the **week-1** codebase. This repository comprises full back-end APIs, database schema designs, OOP implementations, array programming exercises, date helpers, validation workflows, and front-end HTML/CSS layouts.

---

## Repository Structure At A Glance

```text
├── BackendmongoDB/               # Express + MongoDB API integration
│   ├── APIs/                     # Router handlers for users and products
│   │   ├── userapi.js            # User CRUD API routes
│   │   └── productapi.js         # Product CRUD API routes
│   ├── models/                   # Mongoose database models
│   │   ├── userModel.js          # User mongoose schema & validations
│   │   └── productModel.js       # Product mongoose schema
│   ├── server.js                 # Database connector and Express app listener
│   ├── test.http                 # HTTP testing routes for endpoints
│   └── package.json              # Backend dependencies
├── E-commerce/                   # Standard E-Commerce shopping cart app
│   ├── APIs/                     # Specialized API routes
│   │   ├── userapi.js            # User authentication, cart ops & population
│   │   └── productapi.js         # Product post route
│   ├── Models/                   # MongoDB models
│   │   ├── userModel.js          # Combined User + Cart sub-document schemas
│   │   └── productModel.js       # Simple Product schema
│   ├── server.js                 # Server init, db client & global error handling
│   ├── req.http                  # Local test endpoints
│   └── package.json              # E-commerce dependencies
├── Week-1/                       # Core JavaScript Syntax and OOP Foundations
│   ├── arraysmple.js             # Basic array iterations (map, filter, reduce)
│   ├── arrayadv.js               # Nested object array workflows & computations
│   ├── classdemo.js              # OOP Book Library System implementation
│   ├── collections.js            # Immutable states, Object.keys, Set & flat mapping
│   ├── control.js                # Decision flow conditions & ternary expressions
│   ├── object.js                 # Property management, freeze & object reduction
│   └── operators.js              # Arithmetic adjustments and running balance loops
├── week-2/                       # Date Utilities, Cloning Concepts & Custom Todo CLI
│   ├── todo/                     # Modular task manager
│   │   ├── app.js                # Task workflow orchestrator
│   │   ├── task.js               # In-memory database CRUD & tracking
│   │   └── validate.js           # Priority, title, & future date validation
│   ├── date-demo.js              # Formatting, age calculation, deadline checks
│   ├── deepcopy.js               # Non-referential structural deep clone demo
│   └── shallowcopy.js            # Spread operator referencing clone demo
├── week-3/                       # In-Memory Express Mock Router + DB Schema demo
│   ├── APIs/                     # Mock controllers for testing HTTP verbs
│   │   ├── usersapi.js           # Memory user route endpoints
│   │   └── productsapi.js        # Memory product route endpoints
│   ├── models/                   # DB schemas
│   │   └── usermodel.js          # Mongoose Model targeting "user" collection
│   ├── server.js                 # Database linker and middleware port server
│   └── req.http                  # Mock endpoint requests
├── Week-6/                       # Visual Layout Design Hands-on Workshops
│   ├── handson-1/                # Fluid landing block with semantic HTML and flex properties
│   │   ├── index.html
│   │   └── style.css
│   ├── handson-2/                # Responsive layout using base64 image embedded panels
│   │   ├── index.html
│   │   └── style.css
│   └── handson-3/                # Rich outdoor trekking platform with grid cards & tab nav
│       ├── index.html
│       └── style.css
└── README.md                     # Main Workspace Documentation (This File)
```

---

## 1. BackendmongoDB
This folder showcases an **Express REST API** integrated with a **MongoDB database** via **Mongoose**. It implements complete CRUD (Create, Read, Update, Delete) workflows with validation rules for users and products.

### `server.js`
*   **Use**: Configures and launches the Express server, connects to the MongoDB server, and registers API routers.
*   **Functions & Methods Used**:
    *   `connect('mongodb://localhost:27017/Akhileshdb')`: Connects Mongoose to the local MongoDB database.
    *   `app.listen(port, callback)`: Starts the HTTP server on Port `4000`.
    *   `app.use(exp.json())`: Enables parsing of JSON request bodies.
    *   `app.use("/user-api", userApp)` & `app.use("/product-api", productApp)`: Mounts separate API routers for users and products under specific subpaths.
    *   `async function connectToDb()`: Wraps database connection logic in a try-catch block for robust error logging.

---

### `models/userModel.js`
*   **Use**: Defines the Mongoose database schema and constraints for the `user` collection.
*   **Schema Properties**:
    | Field Name | Data Type | Validation Constraints | Purpose |
    | :--- | :--- | :--- | :--- |
    | `username` | `String` | Required, Min Length `3`, Max Length `20` | Stores login identifier |
    | `password` | `String` | Required, Min Length `3`, Max Length `20` | Stores user password |
    | `age` | `Number` | Required, Min `18`, Max `25` | Validates that age falls in college range |
*   **Functions & Methods Used**:
    *   `new Schema({...})`: Mongoose schema constructor.
    *   `model('user', userSchema)`: Compiles the schema into an queryable database model exported as `UserModel`.

---

### `models/productModel.js`
*   **Use**: Defines the schema structure for product records stored in the database.
*   **Schema Properties**:
    | Field Name | Data Type | Validation Constraints | Purpose |
    | :--- | :--- | :--- | :--- |
    | `ID` | `String` | Required | Unique product identifier code |
    | `Name` | `String` | Required | Readable brand/item name |
    | `price` | `Number` | Required | Current price of the product |
*   **Functions & Methods Used**:
    *   `model('product', productsSchema)`: Compiles the schema into `productModel` for database write/lookup.

---

### `APIs/userapi.js`
*   **Use**: Exposes the CRUD endpoints for users, mapping incoming REST operations directly to Mongoose query logic.
*   **Functions, Endpoints, & Database Methods Used**:
    *   `exp.Router()`: Creates a modular route handler instance.
    *   `GET /users`: Fetches all user profiles using `UserModel.find()`.
    *   `POST /users`: Instantiates a `new UserModel(req.body)` and saves it using `.save()` (triggering schema-level validations).
    *   `GET /users/:id`: Finds a single user by their database record ID using `UserModel.findById(req.params.id)`.
    *   `PUT /users/:id`: Updates an existing user by their ID using `UserModel.findByIdAndUpdate(req.params.id, {$set: {...req.body}}, {new: true})`. The `{new: true}` option returns the updated document.
    *   `DELETE /users/:id`: Removes a user document from the database using `UserModel.findByIdAndDelete(req.params.id)`.

---

### `APIs/productapi.js`
*   **Use**: Manages the API endpoints for products, queryable by front-end clients or HTTP request utilities.
*   **Functions, Endpoints, & Database Methods Used**:
    *   `GET /products`: Fetches all products via `productModel.find()`.
    *   `POST /products`: Creates and saves a new product record using `new productModel(req.body).save()`.
    *   `GET /products/:id`: Retrives a specific product details via `productModel.findById(req.params.id)`.
    *   `PUT /products/:id`: Modifies catalog parameters using `productModel.findByIdAndUpdate(...)` with the `$set` modifier.
    *   `DELETE /products/:id`: Removes a catalog product by ID via `productModel.findByIdAndDelete(req.params.id)`.

---

### `test.http`
*   **Use**: Static HTTP script environment containing predefined sample request payloads. Used by extensions like VS Code REST Client to test API actions on `http://localhost:4000/` without needing Postman.

---
---

## 2. E-commerce
This directory implements a more complex, production-oriented E-Commerce back-end. It features **password hashing with bcrypt**, dynamic **nested sub-documents** (for user shopping carts), and database **population** (`.populate()`) to link distinct document tables together.

### `server.js`
*   **Use**: Configures database linking to `mongodb://localhost:27017/ecommerce` and sets up a global middleware environment featuring centralized error handling.
*   **Functions & Methods Used**:
    *   `app.use(errHandler)`: Registers a custom global error handling middleware `function errHandler(err, req, res, next)` to capture server errors, outputting a sanitized JSON payload `{message: "error", reason: err.message}` to clients.
    *   `connect()` & `app.listen()`: Connects to the database and spins up the HTTP server on Port `4000`.

---

### `Models/userModel.js`
*   **Use**: Models a comprehensive user document that contains an array of nested sub-documents representing the shopping cart.
*   **Sub-schemas**:
    *   `cartSchema`: Defines individual cart items.
        *   `product`: Type is `Schema.Types.ObjectId` referencing `"products"` (defines a database link).
        *   `quantity`: Type is `Number` defaulting to `1`.
    *   `userSchema`: Defines user login and nested properties.
        *   `name`: `String`, required.
        *   `email`: `String`, required, must be `unique`.
        *   `password`: `String`, required.
        *   `cart`: Array of `cartSchema` objects, defaulting to an empty array `[]`.

---

### `Models/productModel.js`
*   **Use**: Defines the product structure in the catalog containing `productName` (String), `price` (Number), and `brand` (String).
*   **Functions & Methods Used**:
    *   `mongoose.model("Product", productSchema)`: Compiles the schema into `ProductModel` (accessible in the `"products"` collection).

---

### `APIs/userapi.js`
*   **Use**: Handles advanced shopping actions, user registry with secure password hashing, and cart query execution.
*   **Functions, Endpoints, & Libraries Used**:
    *   `hash(newUser.password, 10)` (from `bcrypt` library): Generates a secure salt-hashed password string before persisting credentials.
    *   `POST /user`: Immutably intercepts registration payloads, triggers manual model validation using `.validate()`, hashes the password, and writes to database.
    *   `PUT /user-cart/user-id/:uid/product-id/:pid` (Add to Cart):
        *   Retrieves user by `uid` via `UserModel.findById(uid)`.
        *   Verifies product existence by `pid` using `ProductModel.findById(pid)`.
        *   Checks if the product is already in the user's cart using array search `user.cart.findIndex(item => item.product.toString() === pid)`.
        *   If it exists (index > -1), increments `quantity` by 1.
        *   If new, pushes a new object `{product: pid, quantity: 1}` to the cart array.
        *   Saves the state change via `await user.save()`.
    *   `GET /user-cart/user-id/:uid` (Fetch populated cart):
        *   Retrieves user record and dynamically populates the cart items using `UserModel.findById(uid).populate("cart.product")`. This replaces the stored ObjectIDs with full product documents.

---

### `APIs/productapi.js`
*   **Use**: Provides a product creation endpoint.
*   **Functions & Endpoints Used**:
    *   `POST /products`: Saves a new product payload to the database using `new ProductModel(req.body).save()`.

---

### `req.http`
*   **Use**: Scripted request testing environment for verifying authentication, catalog addition, and shopping cart modifications.

---
---

## 3. Week-1
This folder focuses on standardizing foundational **JavaScript (ES6+) core features**. It covers basic array methodologies, advanced dataset manipulation, OOP design patterns, control structures, object freezing, and basic variable mutation structures.

### `arraysmple.js`
*   **Use**: Demonstrates the practical implementation of functional array iteration methods.
*   **Datasets & Method Implementations**:
    1.  `temperatures`:
        *   `.filter(temp => temp > 35)`: Extracts values strictly exceeding 35.
        *   `.map(temp => (temp * 9/5) + 32)`: Converts Celsius degrees into Fahrenheit.
        *   `.reduce((sum, temp) => sum + temp, 0)`: Calculates the sum to compute the average value.
        *   `.find(temp => temp > 40)`: Returns the first temperature value higher than 40.
        *   `.findIndex(temp => temp === 28)`: Locates the zero-based array index of value 28.
    2.  `courses`:
        *   `.filter(course => course.length > 5)`: Filters strings with length exceeding 5.
        *   `.map(course => course.toUpperCase())`: Converts course titles to uppercase.
        *   `.reduce((acc, course) => ...)`: Dynamically concatenates titles into a single string joined by a `" | "` pipe.
        *   `.find()` & `.findIndex()`: Locates specific keywords and index metrics in the array.
    3.  `marks`:
        *   Similar iterations showing how to filter passing scores (`>= 40`), add grace marks (`+ 5`), and extract extreme values using reduction comparisons `(max, mark) => mark > max ? mark : max`.

---

### `arrayadv.js`
*   **Use**: Implements complex processing on advanced arrays containing nested objects.
*   **Datasets & Implementations**:
    *   `cart` (products list): Filters in-stock items, maps each element to compute `{name, totalPrice}` by calculating `price * quantity`, and sums up values with `.reduce()` to compute the grand total checkout bill.
    *   `students` (grades list): Groups score ranges to append grade letters (`'A'`, `'B'`, `'C'`, `'D'`) immutably using the spread operator (`{ ...student, grade }`).
    *   `employees` (corporate metrics): Filters employees by department, adds a `netSalary` property containing a 10% bonus, and calculates total corporate salary expenditure.
    *   `movies` (media lists) & `transactions` (bank credit/debit adjustments): Custom filters and balances. Calculates net balance by matching the transaction type (`"credit"` or `"debit"`) during the `.reduce()` accumulation step.

---

### `classdemo.js`
*   **Use**: Implements Object-Oriented Programming (OOP) in JavaScript through a library management system.
*   **Object Architecture (`Book` Class)**:
    *   `constructor(title, author, pages, isAvailable = true)`: Maps values to newly instantiated book objects.
    *   `borrow()`: Mutates `isAvailable` state to `false` if available, or logs an alert.
    *   `returnBook()`: Resets `isAvailable` status to `true`.
    *   `getInfo()`: Formats instance metadata into a descriptive string.
    *   `isLongBook()`: Returns a boolean evaluating if `pages > 300`.
*   **Array Management**:
    *   Stores active book instances in a `library` array.
    *   Uses `.forEach(book => console.log(book.getInfo()))` to display active records.
    *   Uses `.filter(book => book.isLongBook()).length` to count large books.

---

### `collections.js`
*   **Use**: Hands-on challenges showcasing advanced ES6 functions, immutable updates, and object key/value conversions.
*   **Key Coding Workflows**:
    *   **Immutability Patterns**: Modifies nested user configurations without mutating the source array by using `.map()` combined with property overrides:
        ```javascript
        const updatedUsers = users.map(user => 
          user.name === "Ravi" ? { ...user, active: false } : user
        );
        ```
    *   **Array Quantifiers**: Uses `.some()` to check if a condition matches at least one element, and `.every()` to verify that all elements satisfy a pricing rule.
    *   **Standard Object Utilities**:
        *   `Object.keys(roles)`: Extracts roles into a string array.
        *   `Object.values(roles).flat()`: Extracts and flattens nested values into a 1D array.
        *   `[...new Set(array)]`: Removes duplicate entries using a Set constructor.
        *   `Object.entries(roles).map(([role, permissions]) => ...)`: Dynamically maps object key-value pairs into custom data objects.

---

### `control.js`
*   **Use**: Implements logic engines using comparison blocks and conditional statements.
*   **Functional Implementations**:
    *   **Smart Login Status Engine**: Uses boolean flags (`isLoggedIn` and `isProfileComplete`) to direct path routing logic.
    *   **Course Price Tag Labeler**: Classifies pricing tiers (Budget, Standard, Premium) based on threshold logic.
    *   **Enrollment Checker**: Evaluates student status using a compact inline ternary check:
        ```javascript
        let enrollMessage = (hasPaid && hasCompletedBasics) ? "Enroll Now" : "Complete Requirements";
        ```

---

### `object.js`
*   **Use**: Explores advanced object manipulation techniques, calculations, and property locks.
*   **Assignments Details**:
    *   **Property Management**: Shows how to dynamically append parameters (`user.lastLogin = "2026-01-01"`) and remove active flags using the `delete` keyword.
    *   **Subject Analysis**: Maps marks values into an array using `Object.values(marks)` to compute cumulative score statistics, and identifies the highest scoring subject using a key-based reduction:
        ```javascript
        const highestSubject = Object.keys(marks).reduce((highest, subject) => 
          marks[subject] > marks[highest] ? subject : highest
        );
        ```
    *   **Object Freezing**: Implements security safeguards using `Object.freeze(settings)`. This locks down configuration files, preventing any subsequent property additions, deletions, or edits.

---

### `operators.js`
*   **Use**: Performs basic math workflows (compound additions, tax additions, and discount reductions) using operators like `+=` and `-=`.

---
---

## 4. week-2
This folder contains dates engines, comparative object cloning scripts, and a multi-file modular CLI application.

### `date-demo.js`
*   **Use**: Implements real-world date calculations, custom date formatting, and age validation checks.
*   **Functions & Calculations**:
    *   **Formatting**: Formats a Date object into a readable `DD-MM-YYYY HH:mm:ss` string using methods like `.getDate()`, `.getMonth() + 1`, and `.getFullYear()`.
    *   **Date Comparisons**: Compares Date objects using comparison operators (`today < Deadline`) to open or close enrollments.
    *   `isValidDate(dateString)`: Checks date validity using `instanceof Date` and `!isNaN(date)`. This helps detect invalid calendar dates like `"2026-02-30"`.
    *   **Age Calculator**: Computes exact user age from a Date of Birth (DOB) string. It adjusts for leap days and offsets based on whether the birthday has occurred in the current calendar year.

---

### `deepcopy.js`
*   **Use**: Explains structural cloning methods in JavaScript.
*   **Mechanism**: Uses `JSON.parse(JSON.stringify(object))` to create a deep copy of an object. This breaks all reference pointers, ensuring that nested properties in the cloned object can be edited safely without mutating the original object.

---

### `shallowcopy.js`
*   **Use**: Demonstrates the features and limitations of shallow copying.
*   **Mechanism**: Uses the ES6 spread operator `const updatedUser = {...user}` to copy an object. It shows that while top-level primitive values are cloned independently, nested objects (like arrays or configurations) are copied by reference. As a result, editing a nested property in the clone will mutate the original source object.

---

### `todo` (Modular CLI Sub-App)
An organized command-line task utility built with CommonJS modules (`require` / `module.exports`).

*   #### `app.js`
    *   **Use**: Serves as the main entry point for the application. It imports modules and coordinates task actions.
    *   **Functions Used**: Imports `addTask`, `getAllTasks`, and `completeTask` from `./task.js` to manage the CLI task database.

*   #### `task.js`
    *   **Use**: Manages the in-memory task array and exports functions for CRUD tasks.
    *   **Functions Used**:
        *   `addTask(title, priority, dueDate)`: Validates input, creates a task object with a unique auto-incrementing ID, and appends it to the list.
        *   `getAllTasks()`: Returns the list of saved tasks.
        *   `completeTask(id)`: Locates a task by its ID and updates its `completed` status to `true`.

*   #### `validate.js`
    *   **Use**: Provides data validation helpers to sanitize task parameters.
    *   **Functions & Logic**:
        *   `validateTitle(title)`: Returns true if title is a non-empty string of at least 3 characters.
        *   `validatePriority(priority)`: Checks if the input matches a valid priority tier (`'low'`, `'medium'`, or `'high'`).
        *   `validateDueDate(date)`: Parses the date string and verifies that it is a valid date set in the future.

---
---

## 5. week-3
A workspace demonstrating Express Router separation of concerns using in-memory databases and schema-level validation definitions.

### `server.js`
*   **Use**: Starts up the Express server and connects to the MongoDB database (`mongodb://localhost:27017/anuragdb2`).
*   **Functions & Methods Used**:
    *   `connect()`: Establishes a database connection.
    *   `app.use(exp.json())`: Configures standard JSON parsing middleware.
    *   `app.use("/user-api", userApp)`: Mounts the modular user route handler.

---

### `models/usermodel.js`
*   **Use**: Defines validation constraints for documents saved to the database.
*   **Validation Rules**:
    *   `username`: Required, Min Length `3`, Max Length `8`.
    *   `password`: Required, Min Length `3`, Max Length `8`.
    *   `age`: Required, Min `18`, Max `25`.
*   **Functions Used**:
    *   `model('user', userSchema)`: Exports the compiled model as `UserModel`.

---

### `APIs/usersapi.js`
*   **Use**: Handles user requests using an in-memory array (`let users = []`).
*   **Functions & Route Operations**:
    *   `GET /users`: Sends the array of user records as a JSON response.
    *   `POST /users`: Pushes a new user record into the in-memory array.
    *   `PUT /users/id`: Locates a user record in the array using `.findIndex()` and merges the updated properties.
    *   `GET /users/:id`: Searches for and returns a specific user record based on their ID parameters.
    *   `DELETE /users/id`: Locates a user and removes their record from the array using `.splice()`.

---

### `APIs/productsapi.js`
*   **Use**: Exposes route endpoints for managing products in an in-memory array (`let products = []`).
*   **Functions & Route Operations**:
    *   `GET /Products`: Returns the current catalog of products.
    *   `POST /products`: Appends a new product item to the database array.
    *   `PUT /products/id`: Updates a product's details after locating it in the array via its ID index.
    *   `GET /products/:id`: Retrieves a single product document by matching its ID.
    *   `DELETE /products/id`: Mock route for delete requests.

---
---

## 6. Week-6
This folder focuses on front-end layouts and design challenges using clean HTML5 markup and vanilla CSS flexbox and grid styling.

### `handson-1`
*   **Use**: A simple landing page block styled with raw CSS parameters.
*   **Key Design Features**:
    *   `index.html`: Contains header structures, paragraph tags, buttons, and detailed flex sections.
    *   `style.css`: Implements box-sizing adjustments, custom navigation heights, padding configurations, and uses `display: flex` with a horizontal alignment flow.

---

### `handson-2`
*   **Use**: A responsive, card-based portfolio panel layout.
*   **Key Design Features**:
    *   `index.html`: Features a clean header, multi-column grid containers, descriptive text paragraphs, and uses embedded base64 image strings to ensure fast image load times without external hosting dependencies.
    *   `style.css`: Uses flexbox to build custom card displays, styled with borders, margins, and drop shadow designs.

---

### `handson-3`
*   **Use**: A modern, feature-rich landing page layout for an outdoor adventure and trekking portal.
*   **Key Design Features**:
    *   `index.html`: Implements semantic layout containers (`header`, `outdoor`, `tourism`, `category`) that structure the hero sections, grid panels, custom SVG icons, and a category navigation bar.
    *   `style.css`: Implements a multi-column card layout using CSS Grid (`display: grid` with `grid-template-columns`), custom transitions for interactive elements, responsive image scaling, and styled tab panels to deliver a premium user interface.

---

> [!NOTE]
> All back-end operations (such as server connections, query execution, and database calls) are written using modern ES Module import/export syntax. Front-end elements are styled using raw CSS to ensure maximum performance and maintain complete layout flexibility.