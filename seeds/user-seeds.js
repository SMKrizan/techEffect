const { User } = require('../models');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: "MindyFinn",
        email: "mfinn@mail.com",
        password: 123456
    },
    {
        username: "GeraldFSeib",
        email: "gfseib@mail.com",
        password: 234567
    },
    {
        username: "Christine Lagarde",
        email: "clagarde@mail.com",
        password: 345678
    },
    {
        username: "Angela Merkel",
        email: "amerkel@mail.com",
        password: 456789
    },
    {
        username: "Madeleine Albright",
        email: "malbright@mail.com",
        password: 567890
    },
];

async (userData) => {
    userData.password = await bcrypt.hash(userData.password, 10);
    return userData
}

const seedUsers = () => User.bulkCreate(userData);
console.log('seedUsers: ', seedUsers)


module.exports = seedUsers  