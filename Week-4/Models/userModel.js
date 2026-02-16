import { Schema, model } from "mongoose";

// cart schema
const cartSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'product'   // name of Product model
  },
  quantity: {
    type: Number,
    default: 1
  }
});

// user schema
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

export const UserModel = model("user", userSchema);