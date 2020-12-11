// imports Model class and DataTypes object from Sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// User extends all functionality of Model class
class User extends Model {
    // the Sequelize 'checkPassword()' method takes plaintext from client request at 'req.body.email' and compares it with hashed password using bcrypt's 'compareSync()' method
    async checkPassword(loginPw) {
        // accesses saved user properties with keyword 'this'
        validate = await bcrypt.compareSync(loginPw, this.password);
        return validate;
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
        // opting to include 'email' as a user parameter because it is a unique identifier and will allow for individuals to use the same username.
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
        // also known as 'lifecycle events', 'hooks' are functions that are called either before or after Sequelize calls; in this case, it is necessary for the hook to run just before either a POST or PUT request
        hooks: {
            // uses async/await function (in place of using a bulkier Promise function) due to the CPU-intensive nature of hashing
            async beforeCreate(newUserData) {
                // bcrypt function takes the plaintext password and returns the hashed password, using the 'saltrounds' parameter, known as the 'cost-factor', to convey the number of rounds of hashing to be conducted by the bcrypt algorithm on the password before returning
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // the Sequelize 'beforeUpdate()' method also requires a line of code added to associated PUT route
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