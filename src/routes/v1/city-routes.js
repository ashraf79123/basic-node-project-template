const express=require('express');
const router=express.Router();
const {CityController}=require("../../controller/index.js");
const {CityMiddleware}=require("../../middleware/index.js");
//api/v1/cities Post
router.post("/", CityMiddleware.validateCreateRequest, CityController.createCity);


module.exports=router;