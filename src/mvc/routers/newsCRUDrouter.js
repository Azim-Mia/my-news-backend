const express=require('express')
const restApiRouter=express.Router();
const {validators} =require("/data/data/com.termux/files/home/my-news-backend/middleware/validators.js");
const {runValidation} =require("/data/data/com.termux/files/home/my-news-backend/middleware/runValidators.js");
const {
  createNewsController,
  readNewsController,
  deleteNewsController,
  updateNewsController
} =require("../../../src/mvc/controllers/createCRUDcontroller.js");
const {isAdmin, unAdmin,isBaned, unBaned} =require('/data/data/com.termux/files/home/my-news-backend/adminPanel/admin.js')
restApiRouter.get('/read', readNewsController);
restApiRouter.post('/create',validators,runValidation, createNewsController);
restApiRouter.put('/update/:id',updateNewsController);
restApiRouter.delete('/delete/:id',deleteNewsController);
restApiRouter.put('/update/isAdmin/:id',isAdmin);
restApiRouter.put('/update/unAdmin/:id',unAdmin);
restApiRouter.put('/update/isBaned/:id', isBaned);
restApiRouter.put('/update/unBaned/:id',unBaned);
module.exports = restApiRouter;