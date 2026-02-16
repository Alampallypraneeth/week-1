import {Schema,model} from 'mongoose'

//create products schema(name,price,brand)

const productsSchema=new Schema({
    ID:{
        type:String,
        required:[true,'product ID is required']
    },
    Name:{
        type:String,
        required:[true,'product name is required']
    },
    price:{
        type:Number,
        required:[true,'product price is required']
        
    }
});

export const productModel=model('product',productsSchema)