const users = require('../models/users');
const {decryptData} = require('../config/encrypt')

const login = async(email, password) => {

    try {
        var existed = await users.findOne({email})

        if(!existed) throw "Email is incorrect or not found";
        if(!decryptData(password, existed.password)) throw 'Password is incorrect';

        return{
            success: true,
            data: existed
        }
    } catch (err) {
        return{
            success: false,
            error: err
        } 
    }

}

module.exports = {
    login
}