const {AirplaneRepository}=require('../repositories');
const AppError=require('../utils/error/app-error.js');
const {statusCodes, StatusCodes}=require('http-status-codes');
const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane=await airplaneRepository.create(data);
        return airplane;
    }catch(error){
     if(error.name=='SequelizeValidationError'){
        let explaination=[];
        error.errors.forEach((err)=>{
            explaination.push(err.message);
        });
        throw new AppError('Cannot create a new airplane object',StatusCodes.BAD_REQUEST);
    }
    throw error;
}
}

async function getAirplanes(){
    try{
        const airplanes=await airplaneRepository.getAll();
        return airplanes;
    }catch(error){
        throw new AppError('Cannot fetch data of all the airplane ',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function getAirplane(id){
    try{
   const airplane=await airplaneRepository.get(id);
    return airplane;
    }catch(error){
        if(error.statusCode==StatusCodes.NOT_FOUND){
  throw new AppError('The airplane you requested is not present',StatusCodes.NOT_FOUND);
        }
         throw new AppError('Cannot fetch data  the airplane ',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplane
}