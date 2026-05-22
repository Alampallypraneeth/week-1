import exp from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { userRoute } from './APIs/UserAPI.js';
import { authorRoute } from './APIs/AuthorAPI.js';
import { adminRoute } from './APIs/AdminAPI.js';
import { commonRoute } from './APIs/CommonAPI.js';
import cookieParser from 'cookie-parser';

config(); // load env variables

// create express app
const app = exp();

// body parser
app.use(exp.json());
//call cookie-parser
app.use(cookieParser());  
// routes
app.use('/user-api', userRoute);
app.use('/author-api', authorRoute);
app.use('/admin-api', adminRoute);
app.use('/common-api', commonRoute);


// connect DB with try-catch (AS YOU ASKED)
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB connection successful");

    // start server AFTER DB connection
    app.listen(process.env.PORT || 4000, () =>
      console.log("Server started on port 4000...")
    );

  } catch (err) {
    console.log("Error in DB connection:", err.message);
  }
};

connectDB();

//dealing with invalid path
app.use((req, res,next) => {
  console.log(req.url)
  res.json({message:`${req.url} is not a valid path`})
});


// error handling middleware (ONLY once, at end)
app.use((err, req, res, next) => {
  console.log("err:", err);
  res.status(500).json({ message: "error", reason: err.message });
});
