const createError = require("http-errors");
const {Newsmodel} =require("/data/data/com.termux/files/home/my-news-backend/src/mvc/models/newsModel.js");
const createNewsController = async(req,res,next)=>{
  try{
  const {title, description, country, category, image} =req.body;
  const createNews = new Newsmodel({
    title:title,
    description:description,
    country:country,
    category:category,
    image:image
  })
const result= await createNews.save();
res.json({success:true,message:"successfull", news:result})
  }catch(error){
    next(createError(error.message));
  }
}

const readNewsController = async(req,res,next)=>{
  try{
  const result = await Newsmodel.find();
  if(!result){
    res.json({success:false, message:" News is not Found"})
  }
res.json({success:true,message:"successfull", news:result})
  }catch(error){
    next(createError(error.message));
  }
}
const updateNewsController = async(req,res,next)=>{
  try{
  const result = await Newsmodel.findById();
  if(!result){
    res.json({success:false, message:" News is not Found"})
  }
res.json({success:true,message:"successfull", news:result})
  }catch(error){
    next(createError(error.message));
  }
}
module.exports= {createNewsController,readNewsController, updateNewsController}