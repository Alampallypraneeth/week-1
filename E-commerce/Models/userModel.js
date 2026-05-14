import mongoose, { Schema, model } from "mongoose";

// Cart schema
const cartSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "products",   // product name
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  }
});

// User schema
const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  cart: {
    type: [cartSchema],
    default: []
  }
});

// Export model
export const UserModel = model("users", userSchema);