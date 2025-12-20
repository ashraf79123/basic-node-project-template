const express=require('express');
const router=express.Router();
const {CityController}=require("../../controller/index.js");

//api/v1/cities Post
router.post("/", CityController.createCity);


module.exports=router;