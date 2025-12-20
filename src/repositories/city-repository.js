
const Crudrepository=require("./crud-repsitory");
const {City}=require('../models');
class CityRepository extends Crudrepository{
    constructor(){
        super(City);
    }
}

module.exports=CityRepository;