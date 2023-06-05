const users = require('../models/users')
const { encryptData } = require('../config/encrypt')

const register = async (param) => {
    const {email, username, firstname, lastname, password } = param;
    
    try{
        // Check email existed before
        var existed = await users.findOne({ email });

        if(existed){
            throw "Email is already used"; // This throw to catch 
        }

        existed = await users.findOne({ username })
        if(existed){
            throw "username is already used"
        }

        // used to encrypt password from encrypt.js
        var hash = encryptData(password);

        const newUser = {
            email,
            username,
            firstname,
            lastname,
            password: hash
        }

        const createUser = await users.create(newUser);

        return {
            success: true,
            data: createUser
        }
    }catch(err){
        return {
            success: false,
            err: err || 'error'
        }
    }
}

module.exports = {
    register
}