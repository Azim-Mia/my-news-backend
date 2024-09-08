const express=require('express')
const restApiRouter=express.Router();
const {createNewsController, readNewsController} =require("../../../src/mvc/controllers/createNews.js");
restApiRouter.post('/', createNewsController);
restApiRouter.get('/', readNewsController);
module.exports = restApiRouter;