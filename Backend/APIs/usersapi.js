import exp from "express";
export const userApp = exp.Router();

let users = [];

// Middleware for JSON parsing
userApp.use(exp.json());

// GET all users
userApp.get("/users", (req, res) => {
  res.json({ message: "All users", payload: users });
});

// POST create user
userApp.post("/users", (req, res) => {
let newUser = req.body;
users.push(newUser);
res.status(201).json({ message: "User Created", payload: newUser });
});

// PUT update user (expects id in body)
userApp.put("/users/id", (req, res) => {
let modifiedUser = req.body;
let userIndex = users.findIndex((usr) => usr.id === modifiedUser.id);

if (userIndex === -1) {
    return res.status(404).json({ message: "User Not Found" });
}

users[userIndex] = { ...users[userIndex], ...modifiedUser };
res.status(200).json({ message: "User Modified", payload: users[userIndex] });
});

// GET user by id (uses URL param)
userApp.get("/users/:id", (req, res) => {
let userId = Number(req.params.id);
let user = users.find((userObj) => userObj.id === userId);

if (!user) {
    return res.status(404).json({ message: "User Not Found" });
}

res.status(200).json({ message: "User Found", payload: user });
});

// DELETE user (expects id in body)
userApp.delete("/users/:id", (req, res) => {
let userId = Number(req.params.id);
let userIndex = users.findIndex((usr) => usr.id === userId);

if (userIndex === -1) {
    return res.status(404).json({ message: "User Not Found" });
}

let deletedUser = users.splice(userIndex, 1);
  res.status(200).json({ message: "User Deleted", payload: deletedUser[0] });
});