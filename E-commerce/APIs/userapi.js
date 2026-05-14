import exp from "express";
import { UserModel } from "../Models/userModel.js";
import { ProductModel } from "../Models/productModel.js";
import { hash } from "bcrypt";

export const userRoute = exp.Router();

// GET all users
userRoute.get("/users", async (req, res) => {
  let users = await UserModel.find();
  res.status(200).json({ message: "All users", payload: users });
});

// CREATE new user
userRoute.post("/user", async (req, res) => {
  let newUser = req.body;

  // run validations
  await new UserModel(newUser).validate();

  // hash password
  let hashedPassword = await hash(newUser.password, 10);
  newUser.password = hashedPassword;

  let newUserDoc = new UserModel(newUser);
  await newUserDoc.save();

  res.status(201).json({ message: "New user created successfully" });
});


// ADD PRODUCT TO CART (WITH QUANTITY)

userRoute.put("/user-cart/user-id/:uid/product-id/:pid",async (req, res) => {
    try {
    let { uid, pid } = req.params;

      // check user
    let user = await UserModel.findById(uid);
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }

      // check product
    let product = await ProductModel.findById(pid);
    if (!product) {
        return res.status(404).json({ message: "product not found" });
    }

      // check if product already exists in cart
    let productIndex = user.cart.findIndex((item) => item.product.toString() === pid);

    if (productIndex > -1) {
        // product exists → increment quantity
        user.cart[productIndex].quantity += 1;
    } else {
        // product not exists → add new product
        user.cart.push({product: pid,quantity: 1});
    }

    await user.save();

    res.status(200).json({message: "product added to cart",payload: user.cart});
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
}
);


userRoute.get("/user-cart/user-id/:uid", async (req, res) => {
let { uid } = req.params;

let user = await UserModel.findById(uid).populate("cart.product");
if (!user) {
    return res.status(404).json({ message: "user not found" });
}

res.status(200).json({
    message: "user cart fetched",
    payload: user.cart
});
});

// cart1=[4]