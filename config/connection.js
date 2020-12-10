// library dependencies
require('dotenv').config()
const Sequelize = require('sequelize');

const { DB_NAME, DB_USER, DB_PWD } = process.env

// connect to db using base Sequelize class 
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;