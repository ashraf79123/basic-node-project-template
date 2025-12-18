const express = require('express');
const router = express.Router();
const {InfoController} =require("../../controller/index.js");

const airplaneRouter=require("./airplane-router.js");

router.use("/airplanes", airplaneRouter);
router.get('/info', InfoController.info);

module.exports = router;