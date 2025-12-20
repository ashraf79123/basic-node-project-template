const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');
function validateCreateRequest(req,res,next){
    console.log(req.body);
    if(!req.body.name){
        ErrorResponse.message='Something went wrong while creating city';
        ErrorResponse.error='Name missing in the request body';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
   
module.exports={
    validateCreateRequest
}