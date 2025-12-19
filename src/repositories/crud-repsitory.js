const {Logger}=require('../utils/logger');
const { StatusCodes } = require('http-status-codes');
const AppError = require('../utils/error/app-error.js');
class Crudrepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
    
            const result=await this.model.create(data);
            return result;
   
    }
    async destroy(id){
        try {
            const result=await this.model.destroy({
                where:{
                    id:id
                }
            });
            if(!result){
                throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND);
            }
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository :destroy");
            throw error;
        }   
    }
    async get(id){
        try {
            const result=await this.model.findByPk(id);
             if(!result){
         throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND);
   }
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository :get");
            throw error;
        }       
    }
    async getAll(){ 
        try {
            const result=await this.model.findAll();
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository :getAll");
            throw error;
        }       
    }
    async update(id,data){
        try {
            const result=await this.model.update(data,{
                where:{
                    id:id
                }
            });
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository :update");
            throw error;
        }
    }
}

module.exports=Crudrepository;