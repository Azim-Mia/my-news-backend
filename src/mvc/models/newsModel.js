const {Schema,model}=require('mongoose');
const newsSchema=new Schema({
   title:{
   type:String,
   trim:true,
   minLength:[3, 'minimum length three charecter'],
   mixLength:[100, 'minimum length thirty charecter'],
   required:[true, 'Title is empty'],
   lowercase:true,
  },
  description:{
  type:String,
  trim:true,
  required:[true, "description is not Empty"],  
  },
  country:{
  type:String,
  trim:true,
  required:[true, "Country is Not Empty"],  
  },
  category:{
    type:String,
    trim:true,
    minLength:[3, "Type-Text minimum Length three"],
   mixLength:[100, "Type-Text Length is Over"]
  },
image:{
type:String,
},
isAdmin:{
   type:Boolean,
   default:false,
  },
  isBaned:{
    type:Boolean,
    default:false,
  },
},{timestams:true});
const Newsmodel= new model("NewsModel", newsSchema);
module.exports= {Newsmodel}