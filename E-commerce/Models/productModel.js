import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  brand: String
});

export const ProductModel = mongoose.model("Product", productSchema);
