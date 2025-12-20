const {StatusCodes}=require('http-status-codes');
const {ErrorResponse}=require('../utils/common');
function validateCreateRequest(req,res,next){
    console.log(req.body);
    if(!req.body || req.body.ModelNumber===undefined || req.body.capacity===undefined){
        ErrorResponse.message='Something went wrong while creating aircraft';
        ErrorResponse.error='ModelNumber or capacity missing in the request body';
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}
   
module.exports={
    validateCreateRequest
}