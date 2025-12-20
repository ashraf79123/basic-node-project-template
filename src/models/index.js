const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models here
db.Airplane = require('./airplane')(sequelize, DataTypes);
db.City = require('./city')(sequelize, DataTypes);

module.exports = db;