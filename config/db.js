const mongoose=require('mongoose');
const {db_url} =require("../secret.js");
const connectDB = async()=>{
  try{
    await mongoose.connect(db_url);
    console.log("news model db connection successfull")
    //process.exit(1);
  }catch(err){
  console.log(err.message)
  }
}
module.exports = connectDB;