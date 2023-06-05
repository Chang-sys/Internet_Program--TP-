// for use route
var express = require('express');
const jwt = require('jsonwebtoken')
var router = express.Router();

const { login } = require('../services/login');
const { register } = require('../services/register')
const { logout } = require('../services/logout')
const { getUser } = require('../services/getUser')
const { joiValidation } = require('../middleware/joiValidation');
const { loginSchema, registerSchema } = require('../schemas/index')
const {ensureSignedIn, ensureSignedOut, currentUser} = require('../middleware/authenticated');
const { func } = require('joi');
const userService = require('../services/user');

//home page 
router.get('/', (req,res,next)=> {
    console.log("router up");
    res.send("<h1><center>Welcome To My API Home Page</center></h1>");
});
//login page
router.post('/login', ensureSignedOut ,joiValidation(loginSchema) ,async(req,res,next)=> {
    const param = JSON.parse(req.body); // req.body is form frontend data
    const {email, password} = param;
    const result = await login(email, password);
    const token = jwt.sign(param, "t0kenEncrypti0n");
    req.session.jwtToken = token;
    // var decoded = jwt.verify(token, 't0kenEncrypti0nhhhh');
    // console.log(decoded.foo) // bar
    res.json(result);
});
//register page
router.post('/register', ensureSignedOut, joiValidation(registerSchema), async(req,res,next)=> {
    const param = JSON.parse(req.body); // req.body is form frontend data
    const result = await register(param);
    res.json(result);
});
//logout page
router.post('/logout', ensureSignedIn, (req, res, next)=>{
    const result = logout(req.session);
    console.log("cookie", req.cookies);
    res.clearCookie('token')
    res.json(result);
})
//get user by id
router.get('/user/:id', ensureSignedIn, async(req, res, next)=> {
    var userId = req.path.split("/user/")[1]
    result = await getUser(userId)
    return res.json(result)
})
//me
router.get('/me', currentUser, async function(req, res, next){
    const { currentUser } = req;
    const result = await userService.findByOne(currentUser.email)
    return res.json(result)
})
router.get('/findall', ensureSignedIn, async function(req, res, next){
    const result = await userService.findall();
    return res.json(result)
})
router.post('/update-password', currentUser, async function(req, res, next){
    const email = req.currentUser.email
    const param = JSON.parse(req.body);
    const newPassword = param
    const result = await userService.updatePass(newPassword, email)
    return res.json(result)
})
router.post('/update-user', currentUser, async function(req, res){
    const email = req.currentUser.email
    const param = JSON.parse(req.body);
    const newInfo = param
    const result = await userService.updateUser(newInfo, email)
    return res.json(result)
})
router.post('/delete-user', currentUser, async function(req,res){
    const email = req.currentUser.email
    const result = await userService.deleteUser(email);
    if(result.success){
        logout(req.session);
        res.clearCookie('token')
    }
    return res.json(result)
})

module.exports = router;