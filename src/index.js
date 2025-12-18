const express=require("express");
  
const {serverConfig,logger} =require("./config/index.js");
const apiroutes=require("./routes/index.js");

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api",apiroutes)
app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running at port ${serverConfig.PORT}`);
    logger.info("Successfully started the server");
})  

