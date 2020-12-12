const { User } = require('../models');
const bcrypt = require('bcrypt');

const hashPwds = async (password) => {
    try {
        let pword = await bcrypt.hash(password, 10);
    }
    catch(err) {
        console.log('err: ', err)
    }
    console.log('pword: ', pword)
    console.log('type-pword: ', typeof pword)
    return pword
}

const userData = [
    {
        username: "MindyFinn",
        email: "mfinn@mail.com",
        password: hashPwds("123456")
    },
    {
        username: "GeraldFSeib",
        email: "gfseib@mail.com",
        password: hashPwds("234567")
    },
    {
        username: "Christine Lagarde",
        email: "clagarde@mail.com",
        password: hashPwds("345678")
    },
    {
        username: "Angela Merkel",
        email: "amerkel@mail.com",
        password: hashPwds("456789")
    },
    {
        username: "Madeleine Albright",
        email: "malbright@mail.com",
        password: hashPwds("567890")
    },
];

const seedUsers = () => User.bulkCreate(userData);
console.log('seedUsers: ', seedUsers)


module.exports = seedUsers  