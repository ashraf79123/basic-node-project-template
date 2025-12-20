const express=require('express');
const router=express.Router();
const {AirplaneController}=require("../../controller/index.js");
const {AirplaneMiddleware}=require("../../middleware/index.js");

//api/v1/airplanes Post
router.post("/", AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);

//api/v1/airplanes get
router.get("/", AirplaneController.getAirplanes);


//api/v1/airplanes get
router.get("/", AirplaneController.getAirplanes);


//api/v1/airplanes getr/:id
router.get("/:id", AirplaneController.getAirplane);


//api/v1/airplanes get/:id  Delete
router.delete("/:id", AirplaneController.destroyAirplane);




module.exports=router;