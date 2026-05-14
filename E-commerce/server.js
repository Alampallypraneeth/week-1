//create http server
import exp from 'express';
import { connect } from 'mongoose';
import { prodRoute } from './APIs/productapi.js';
import { userRoute } from './APIs/userapi.js';

const app = exp()

//use body parser middleware
app.use(exp.json())

//forward re to specific api
app.use("/products-api", prodRoute);
app.use("/users-api", userRoute);


//connect to mongodb
async function ecommercedb() {
    try {
        await connect('mongodb://localhost:27017/ecommerce')
        console.log("DB connection success")
        // Start server
        app.listen(4000, () => console.log("HTTP server listening on port 4000"));
    } catch (err) {
        console.log("error in db connection",err)
    }
}
ecommercedb()



//error handling middleware
function errHandler(err,req,res,next){
    res.status(500).json({
  message: "error",
  reason: err.message
});

}
app.use(errHandler)
