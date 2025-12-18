
const Crudrepository=require("./crud-repsitory");
const {Airplane}=require('../models');
class AirplaneRepository extends Crudrepository{
    constructor(){
        super(Airplane);
    }
}

module.exports=AirplaneRepository;