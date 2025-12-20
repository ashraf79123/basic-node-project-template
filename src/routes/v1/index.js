const express = require('express');
const router = express.Router();
const {InfoController} =require("../../controller/index.js");

const airplaneRouter=require("./airplane-routes.js");
const cityRoutes=require("./city-routes.js");
router.use("/airplanes", airplaneRouter);
router.use("/cities", cityRoutes);


router.get('/info', InfoController.info);

module.exports = router;