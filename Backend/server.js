import exp from "express";
import { userApp } from "./APIs/usersapi.js";
import { productApp} from "./APIs/productsapi.js";
const app = exp()
const port=3000;


// Start server
app.listen(port, () => console.log('HTTP server listening on port 3000'));
app.use(exp.json());


//mount userApp with path /userapi
app.use('/user-api',userApp);
//mount productApp with path /productapi
app.use('/product-api',productApp);