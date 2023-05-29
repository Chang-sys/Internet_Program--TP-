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
const {ensureSignedIn, ensureSignedOut} = require('../middleware/authenticated');

//home page 
router.get('/', (req,res,next)=> {
    console.log("router up");
    res.send("<h1><center>Welcome To My API Home Page</center></h1>");
});
//login page
router.post('/login', ensureSignedOut ,joiValidation(loginSchema) ,async(req,res,next)=> {
    const param = JSON.parse(req.body);
    const {email, password} = param;
    const result = await login(email, password);
    const token = jwt.sign(param, "t0kenEncrypti0n");
    req.session.jwtToken = token;
    res.json(result);
});
//register page
router.post('/register', ensureSignedOut, joiValidation(registerSchema), async(req,res,next)=> {
    const param = JSON.parse(req.body);
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
module.exports = router;