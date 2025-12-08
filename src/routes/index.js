const express=require("express");
const router=express.Router();
const v1routes=require("./v1/index");
const v2routes=require("./v2/index");


router.use("/v1",v1routes);
router.use("/v2", v2routes);

module.exports=router;