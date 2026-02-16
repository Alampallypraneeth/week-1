/*
create products API in the same file
 description of products obj:
                {
                    productId,
                    name,
                    price,
                    brand
                }
 */
import exp from 'express'
export const productApp=exp.Router();
let products=[];

//read all products
productApp.get('/products',(req , res)=>{
    res.status(200).json({message:"all products",products});
});

//read product by id
productApp.get('/products/:productId',(req , res)=>{
    let productId=Number(req.params.productId);
    let product=products.find(prodObj=>prodObj.productId===productId)
    if(!product){
        return res.status(404).json({message:"product not found"});
    }
    res.status(200).json({message:"product",payload:product});
});

//create product
productApp.post('/products',(req , res)=>{
    let newProduct=req.body;
    products.push(newProduct);
    res.status(200).json({message:"product created",products});
});

//update product
productApp.put('/products/:productId',(req , res)=>{
    let productId=Number(req.params.productId);
    let modifiedProduct=req.body;
    let productIndex=products.findIndex(prodObj=>prodObj.productId===productId)
    if(productIndex===-1){
         return res.status(404).json({message:"product not found"})
    }
    products.splice(productIndex,1,modifiedProduct)
    res.status(200).json({message:"product modified",products})
});
//delete product
productApp.delete('/products/:productId',(req , res)=>{
    let productId=Number(req.params.productId); 
    let productIndex=products.findIndex(prodObj=>prodObj.productId===productId)
    if(productIndex===-1){
            return res.status(404).json({message:"product not found"})
    }
    products.splice(productIndex,1)
    res.status(200).json({message:"product deleted",products})
}
);