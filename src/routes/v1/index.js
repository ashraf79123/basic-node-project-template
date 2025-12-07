const express = require('express');
const router = express.Router();
const {InfoController} =require("../../controller/index.js");


router.get('/info', InfoController.info);

module.exports = router;