module.exports = (sequelize, DataTypes) => {
    const Airplane = sequelize.define('Airplane', {
        ModelNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'modelNumber'
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            max:1000
        }
    });
    
    return Airplane;
};