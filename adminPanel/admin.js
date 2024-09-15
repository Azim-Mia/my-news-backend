const createError = require("http-errors");
const {Newsmodel} =require("/data/data/com.termux/files/home/my-news-backend/src/mvc/models/newsModel.js");
const {errorResponse,successResponse} =require("/data/data/com.termux/files/home/my-news-backend/serviceProvider/errorAndSuccessHandle.js");
const isAdmin = async(req,res,next)=>{
  try{
    const {id} =req.params;
    const resultId = await Newsmodel.findOne({_id:id});
    if(!resultId){
      res.send("Not Match Is admin Id");
    }
    const update ={isAdmin:true}
    const updateOptions = {new:true, runValdators:true, context:'query'}
    const responseData = await Newsmodel.findByIdAndUpdate(resultId,update,updateOptions);
    return successResponse(res,{
      success:true,
      message:"Update Admin True",
    })
  }catch(error){
    next(createError(error.message));
  }
}
const unAdmin = async(req,res,next)=>{
  try{
    const {id} =req.params;
    const resultId = await Newsmodel.findOne({_id:id});
    if(!resultId){
      res.send("Not Match Is admin Id");
    }
    const update ={isAdmin:false}
    const updateOptions = {new:true, runValdators:true, context:'query'}
    const responseData = await Newsmodel.findByIdAndUpdate(resultId,update,updateOptions);
    return successResponse(res,{
      success:true,
      message:"Update Admin False",
    })
  }catch(error){
    next(createError(error.message));
  }
}
const isBaned = async(req,res,next)=>{
  try{
    const {id} =req.params;
    const resultId = await Newsmodel.findOne({_id:id});
    if(!resultId){
      res.send("Not Match Is admin Id");
    }
    const update ={isBaned:true}
    const updateOptions = {new:true, runValdators:true, context:'query'}
    const responseData = await Newsmodel.findByIdAndUpdate(resultId,update,updateOptions);
    return successResponse(res,{
      success:true,
      message:"Update is Baned True",
    })
  }catch(error){
    next(createError(error.message));
  }
}
const unBaned = async(req,res,next)=>{
  try{
    const {id} =req.params;
    const resultId = await Newsmodel.findOne({_id:id});
    if(!resultId){
      res.send("Not Match Is unBaned Id");
    }
    const update ={isBaned:false}
    const updateOptions = {new:true, runValdators:true, context:'query'}
    const responseData = await Newsmodel.findByIdAndUpdate(resultId,update,updateOptions);
    return successResponse(res,{
      success:true,
      message:"Update unBaned False",
    })
  }catch(error){
    next(createError(error.message));
  }
}
module.exports ={isAdmin, unAdmin,isBaned, unBaned}