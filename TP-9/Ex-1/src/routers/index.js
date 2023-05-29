//for use route
let express = require('express');
let router = express.Router();

const { login } = require('../services/login');
const { register } = require('../services/register');

//home page 
router.get('/', (req,res,next)=> {
    console.log("router up");
    res.send("<h1><center>Welcome To My API Home Page</center></h1>");
});
//login page
router.post('/login', async(req,res,next)=> {
    const param = JSON.parse(req.body);
    const {email, password} = param;
    const result = await login(email, password);
    res.json(result);
});
//register page
router.post('/register', async(req,res,next)=> {
    const param = JSON.parse(req.body);
    const result = await register(param);
    res.json(result);
});

module.exports = router;