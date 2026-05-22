import exp from 'express'
import {register} from '../services/authService.js'
export const userRoute=exp.Router();
import { ArticleModel } from '../models/ArticleModel.js';
import { checkAuthor } from '../Middlewares/checkAuthor.js';
import { verifyToken } from '../Middlewares/verifyToken.js';

//register user
userRoute.post('/users',async(req,res)=>{  
    //get user obj from req
    let userObj=req.body;
    //call register 
    const newUserObj=await register({...userObj,role:"USER"});
    //send res
    res.status(201).json({message:"user created",payload:newUserObj});
})

//Read all articles(protected route)
userRoute.get("/articles",verifyToken,async(req,res)=>{
    //read all articles which are active
    let articles=await ArticleModel.find({isArticleActive:true}).populate("author","firstName email")
    // send res
    res.status(200).json({message:"articles",payload:articles})
})

// Add comment to an article (protected route)
userRoute.post(
  "/articles/:articleId/comments",
  verifyToken,
  async (req, res) => {
    const { articleId } = req.params;

    const { comment } = req.body;
    const userId = req.user._id;

    const updatedArticle = await ArticleModel.findOneAndUpdate(
      { _id: articleId, isArticleActive: true },
      {
        $push: {
          comments: {
            comment: comment,
            user: userId   
          }
        }
      },
      { new: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({
        message: "Article not found"
      });
    }

    res.status(200).json({
      message: "Comment added successfully",
      payload: updatedArticle
    });
  }
);

