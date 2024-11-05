const express =require("express");
const cors =require('cors');
const createError =require('http-errors');
const bodyParser = require('body-parser');
//custom api require
const restApiRouter =require("/data/data/com.termux/files/home/my-news-backend/src/mvc/routers/newsCRUDrouter.js");
const app =express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static("/public"));
app.use(cors({
  origin:["http://localhost:3000","http://localhost:8158","http://localhost:3001","http://localhost:3002"],
methot:["PUT","POST","GET","UPDATE"],
credentials:true,
}));
app.use("/news", restApiRouter);
app.get("/", (req,res)=>{
 res.json({success:true,message:"return successfull"})
});
app.use((req,res,next)=>{
  next(createError(404, "Route is not found"))
});
app.use((err,req,res,next)=>{
  res.status(err.status || 500).json({
    success:"false",
    message:err.message,
  });
});
module.exports = app;