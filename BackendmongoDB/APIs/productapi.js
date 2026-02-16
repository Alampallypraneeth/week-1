import exp from 'express'
import { productModel} from '../models/productModel.js'

export const productApp=exp.Router();

//Get all products
productApp.get('/products',async(req,res)=>{
    let products=await productModel.find()
    res.status(200).json({message:"All the products",payload:products})
})

//create product
productApp.post('/products',async(req,res)=>{
    let newproduct=req.body;
    let newproductDoc=new productModel(newproduct)
    console.log(newproductDoc);
    await newproductDoc.save()
    res.status(200).json({message:"product created successfully",payload:newproductDoc})
})


//get product by id
productApp.get('/products/:id',async(req,res)=>{
    let objID=req.params.id;
    let productobj=await productModel.findById(objID)
    res.status(200).json({message:"product",payload:productobj})
})

//update the product
productApp.put('/products/:id',async(req,res)=>{
    let objID=req.params.id;
    let modifiedproduct=req.body
    let latestproduct=await productModel.findByIdAndUpdate(objID,{$set:{...modifiedproduct}},{new:true})
    res.status(200).json({message:"product updated successfully",payload:latestproduct})
})

//delete the user by id
productApp.delete('/products/:id',async(req,res)=>{
    let objID=req.params.id;
    let deletedproduct =await productModel.findByIdAndDelete(objID)
    res.status(200).json({message:"product is deleted successfully",payload:deletedproduct})
})