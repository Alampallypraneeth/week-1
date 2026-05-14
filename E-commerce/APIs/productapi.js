import exp from "express";
import { ProductModel } from "../Models/productModel.js";

export const prodRoute = exp.Router();

prodRoute.post("/products", async (req, res) => {
  const newProduct = new ProductModel(req.body);
  await newProduct.save();
  res.status(200).json({
    message: "product created successfully",
    payload: newProduct
  });
});


