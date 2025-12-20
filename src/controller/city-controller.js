const {CityServices}=require('../services');
const {statusCodes}=require('../utils/status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');


async function createCity(req,res){
 try{
  if (!req.body || !req.body.name) {
    const errorResponse = {...ErrorResponse};
    errorResponse.error = { message: 'Name is required' };
    return res.status(statusCodes.BAD_REQUEST).json(errorResponse);
  }
  const city=await CityServices.createCity({
    name:req.body.name,
    state:req.body.state
  });
  SuccessResponse.data=city;
  SuccessResponse.message='City created successfully';
  return res.status(statusCodes.CREATED).json(SuccessResponse);   
 }catch(error){
  console.log('Error in createCity:', error);
  const errorResponse = {...ErrorResponse};
  errorResponse.error = {
    message: error.message,
    details: error.explanation || error.errors || error
  };
  return res.status(error.statusCode || statusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
 }
}

module.exports={
    createCity
}