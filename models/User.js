// imports Model class and DataTypes object from Sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// User extends all functionality of Model class
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// provides context for how the methods inherited from Model class should work, and initializes User model's data and configuration by passing in two objects as arguments
User.init(
    // the first configuration object defines columns and their datatypes
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            // if a primaryKey is not specified, Sequelize will create one but it's best to explicitly define data for the sake of communication with other developers accessing the code
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            // setting 'allowNull' to false, in addition to requiring the property, also enables the validation to be run before creating the table data
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    },
    // the second configuration object configures specified table options
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        // passes in connection to db
        sequelize,
        // directs whether to auto-create createdAt/updatedAt timestamp fields
        timestamps: false,
        // directs whether to pluralize name of db table
        freezeTableName: true,
        // directs Sequelize whether to use underscores instead of camel-case
        underscored: true,
        //  direction for model name to stay lower-case in relation to db
        modelName: 'user'
    }
);

module.exports = User;