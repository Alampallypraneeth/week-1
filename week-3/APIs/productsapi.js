import exp from 'express'
//create min-express(Separate-Route)-app
export const productsApp=exp.Router()

let products=[];
productsApp.use(exp.json())

productsApp.get('/Products',(req,res)=>{
    //sends res to client
    res.json({'message':"all products",payload:products});
})


//post req handiling route
productsApp.post('/products',(req,res)=>{
    let modifiedproduct=req.body
    console.log("new product",modifiedproduct);
    products.push(modifiedproduct);
    res.status(201).json({message:"ProductCreated"})
})



productsApp.put('/products/id',(req,res)=>{
    
    //get modified product from req
    //find the product with id exists in array
    //if product not found send res as "product not found"
    //if product found, then modify the product
    //send res as"Product modified"
    let modifiedproduct=req.body
    let productIndex=products.findIndex((prod)=>prod.id==modifiedproduct.id)
    if(productIndex===-1){
    return res.status(404).json({'message':'Product Not Found'})
    }
    let deleteproduct=products.splice(productIndex,1,modifiedproduct)
    res.status(200).json({'message':'Product Modified'})
})




//read product by id
productsApp.get('/products/:id',(req,res)=>{
    console.log(req.params);
    //read id from url parameter
   let productId =Number.Id //{id:1}
    //read product by this idr
    let product=products.find((productObj)=>productObj.Id===productId)
    if(!product){
        return res.status(404).json({'message':'Product Not Found'})
    }
    //send res
    res.status(200).json({'message':'Product Found',payload:product})
})


//delete req handiling route
productsApp.delete('/products/id',(req,res)=>{
    //send res
    res.status(200).json({'message':'User Deleted'})
})
