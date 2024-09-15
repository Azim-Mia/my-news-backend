const createError = require("http-errors");
const {Newsmodel} =require("/data/data/com.termux/files/home/my-news-backend/src/mvc/models/newsModel.js");
const {errorResponse,successResponse} =require("/data/data/com.termux/files/home/my-news-backend/serviceProvider/errorAndSuccessHandle.js");
const createNewsController = async(req,res,next)=>{
  try{
  const {title, description, country, category, image} =req.body;
const findNews = await Newsmodel.findOne({title:title})
  if(findNews){
  res.json({success:false, message:"News Already Register"})
  return;
}
  const createNews = new Newsmodel({
    title:title,
    description:description,
    country:country,
    category:category,
    image:image
  })
const result= await createNews.save();
return successResponse(res,{
  success:true,
  message:"News is create Successfull",
  payload:{
    news:result,
  }
})
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
return successResponse(res,{
  success:true,
  message:"All News Return SuccessFull",
  payload:{
    news:result,
  }
})
  }catch(error){
    next(createError(error.message));
  }
}
const updateNewsController = async(req,res,next)=>{
  try{
  const {id} = req.params;
  const {title} =req.body;
  const resultID = await Newsmodel.findOne({_id:id});
  if(!resultID){
    res.json({success:false, message:" News is not Found"})
  }
    let updates={};
  const updateOptions= {new:true,runValidators:true, context:'query'};
  for(let key in req.body){
    if(['title'].includes(key)){
      updates[key]=req.body[key];
    }
  }
 const results= await Newsmodel.findByIdAndUpdate(
  resultID,
  updates,
  updateOptions,
  )
return successResponse(res,{
  success:true,
  message:"Update SuccessFull",
  payload:{
    news:results,
  }
})
  }catch(error){
    next(createError(error.message));
  }
}
const deleteNewsController=async(req,res,next)=>{
try{
const {id}=req.params;
 const result=await Newsmodel.findByIdAndDelete({_id:id})
 
 if(result === null){
   return res.json({message:"News is Not Found"}) 
 }else{
  return res.json({message:"News is Deleted"})
 }
}catch(error){
  next(createError(error.message))
}
}

module.exports= {createNewsController,readNewsController,deleteNewsController,updateNewsController}