import exp from 'express'
import {register} from '../services/authService.js'
import { UserTypeModel } from '../models/UserModel.js';
import { ArticleModel } from '../models/ArticleModel.js';
import { checkAuthor } from '../Middlewares/checkAuthor.js';
import { verifyToken } from '../Middlewares/verifyToken.js';
export const authorRoute=exp.Router();

//Register author(public route)
authorRoute.post('/authors',async(req,res)=>{
    //get author obj from req
    let userObj=req.body;
    //call register 
    const newUserObj=await register({...userObj,role:"AUTHOR"});
    //send res
    res.status(201).json({message:"author created",payload:newUserObj});
    
})

//create article(proteccted route--only those who logged in)
authorRoute.post('/articles',verifyToken,checkAuthor,async(req,res)=>{
    //get article from req 
    let articleObj=req.body;
    //check for the author
let author = await UserTypeModel.findById(articleObj.author)
if (!author || author.role !== "AUTHOR")
{
        return res.status(401).json({message:"Invalid Author"})
    }

    //create article document
let newArticleDoc = new ArticleModel(articleObj)
    //save
    let createdArticleDoc= await newArticleDoc.save()
    //send res
    res.status(201).json({message:"article created",payload:createdArticleDoc})


})
//read article of author(protected route)
authorRoute.get("/articles/:authorId",verifyToken,checkAuthor,async(req,res)=>{
    //get author id
    let authorId=req.params.authorId

    //read articles by this author which are active
    let articles=await ArticleModel.find({author:authorId,isArticleActive:true}).populate("author","firstName email")
    // send res
    res.status(200).json({message:"articles",payload:articles})
})
//edit article(protected route)
authorRoute.put("/articles",verifyToken ,checkAuthor,async(req,res)=>{
    //get modified article from req
    let {articleId,title,category,content,author}=req.body;
    //find article 
    let articleofDB=await ArticleModel.findOne({_id:articleId,author:author})
    if(!articleofDB)
    {
        return res.status(401).json({message:"Invalid article"})
    }
    //if article is published by the author received from the client[findOne]
    //update the article
    let updatedArticle=await ArticleModel.findByIdAndUpdate(articleId,
    {
         $set:{title,category,content},
    },
    {new:true}) 
    //send res
    res.status(200).json({message:"article updated",payload:updatedArticle})
})
//delete(soft delete)article(protected route)// delete (soft delete) articles (protected)
authorRoute.delete(
  "/articles/:articleId",
  verifyToken,
  async (req, res) => {
    const { articleId } = req.params;

    const authorId = req.user._id;

    // allow only AUTHOR
    if (req.user.role !== "AUTHOR") {
      return res.status(403).json({
        message: "only authors can delete articles"
      });
    }

    // find article owned by author
    const article = await ArticleModel.findOne({
      _id: articleId,
      author: authorId,         
      isArticleActive: true
    });

    if (!article) {
      return res.status(404).json({
        message: "article not found or not owned by you"
      });
    }

    // soft delete
    article.isArticleActive = false;
    await article.save();

    // fetch remaining articles of this author
    const remainingArticles = await ArticleModel.find({
      author: authorId,
      isArticleActive: true
    });

    res.status(200).json({
      message: "article deleted successfully",
      payload: remainingArticles
    });
  }
);
