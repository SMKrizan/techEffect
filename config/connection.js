require('dotenv').config()
const Sequelize = require('sequelize');

const { DB_NAME, DB_USER, DB_PWD } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;