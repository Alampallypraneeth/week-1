import exp from "express";
import { userApp } from "./APIs/userapi.js";
import { productApp} from "./APIs/productapi.js";
import {connect} from 'mongoose'
const app = exp()
const port=4000;

//connect to db server
async function connectToDb(){
    try{
    await connect('mongodb://localhost:27017/Akhileshdb')
    console.log("db connected successfully");
    // Start server
app.listen(port, () => console.log('HTTP server listening on port 4000'));
    }catch(err){
        console.log("err in db connection",err);
    }
}
connectToDb()

app.use(exp.json());

// Mount user routes
app.use("/user-api", userApp);

//Mount product routes
app.use("/product-api",productApp);