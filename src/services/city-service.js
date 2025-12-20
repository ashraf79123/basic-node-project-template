const { StatusCodes}=require('http-status-codes');
const {cityRepository}=require('../repositories');
const AppError=require('../utils/error/app-error.js');

const CityRepositoryInstance=new cityRepository();


async function createCity(data){
    try{
        const city=await CityRepositoryInstance.create(data);
        return city;
    }catch(error){
     if(error.name=='SequelizeValidationError' || error.name=='SequelizeUniqueConstraintError'){
        let explaination=[];
        error.errors.forEach((err)=>{
            if(err.validatorKey === 'not_unique'){
                explaination.push(`${err.path} '${err.value}' already exists`);
            } else {
                explaination.push(err.message);
            }
        });
        throw new AppError(explaination.join(', '),StatusCodes.CONFLICT);
    }
    throw error;
}

}


module.exports={
    createCity
}