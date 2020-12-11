const { User } = require('../models');

const userData = [
    {
        username: "MindyFinn",
        email: "mfinn@mail.com",
        password: 123456
    },
    {
        username: "GeraldFSeib",
        email: "gfseib@mail.com",
        password: "234567"
    },
    {
        username: "ChristineLagarde",
        email: "clagarde@mail.com",
        password: "345678"
    },
    {
        username: "Angela Merkel",
        email: "amerkel@mail.com",
        password: "456789"
    },
    {
        username: "Madeleine Albright",
	    email: "malbright@mail.com",
	    password: "567890"
    },


];

const seedUsers = () => User.bulkCreate(userData);


module.exports = seedUsers  