const {AirplaneServices}=require('../services');
const {statusCodes}=require('../utils/status-codes');
const {SuccessResponse,ErrorResponse}=require('../utils/common');
async function createAirplane(req,res){
 try{
  const airplane=await AirplaneServices.createAirplane({
    ModelNumber:req.body.ModelNumber,
    capacity:req.body.capacity
  });
  SuccessResponse.data=airplane;
  SuccessResponse.message='Airplane created successfully';
  return res.status(statusCodes.CREATED).json(SuccessResponse);   
 }catch(error){
  ErrorResponse.error=error;
  return res.status(error.statusCodes).json(ErrorResponse);
 }
}
async function getAirplanes(req,res){
try {
  const airplanes = await AirplaneServices.getAirplanes();
  SuccessResponse.data = airplanes;

  return res.status(statusCodes.OK).json(SuccessResponse);

} catch (error) {
  console.log(error)
  ErrorResponse.error = error;

  return res
    .status(error.statusCode || statusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse);
}
}
async function getAirplane(req,res){
try {
  const airplanes = await AirplaneServices.getAirplane(req.params.id);
  SuccessResponse.data = airplanes;

  return res.status(statusCodes.OK).json(SuccessResponse);

} catch (error) {
  console.log(error)
  ErrorResponse.error = error;

  return res
    .status(error.statusCode || statusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse);
}
}

async function destroyAirplane(req,res){
try {
  const airplanes = await AirplaneServices.destroyAirplane(req.params.id);
  SuccessResponse.data = airplanes;

  return res.status(statusCodes.OK).json(SuccessResponse);

} catch (error) {
  console.log(error)
  ErrorResponse.error = error;

  return res
    .status(error.statusCode || statusCodes.INTERNAL_SERVER_ERROR)
    .json(ErrorResponse);
}
}


module.exports={    
    createAirplane ,
    getAirplanes,
    getAirplane,
    destroyAirplane
}