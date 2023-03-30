const express = require('express')
var bodyParser = require('body-parser');
const userService = require('./services/user');
const app = express()

// Using cors middleware of Express.js
const cors=require('cors');
app.use(cors(
  {
    origin: 'http://localhost:3000'
  }
));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", function (req, res) {
  const { email, password } = req.body;
  console.log(req.body);
  if (res) {
    userService.login(email, password).then((result) => {
      res.json({
        success: result,
      });
    });
  }
});

app.post("/register", function (req, res) {
  const { email, username, firstname, lastname, password } = req.body;
  let newUser = { email, username, firstname, lastname, password };
  if (res) {
    userService.register(newUser).then((result) => {
      if (result) {
        res.json({
          success: result,
          newUser,
        });
      } else {
        res.json({
          success: result,
          error: 'User already had been registered'
        });
      }
    });
  } else {
    res.json({
      success: false,
      error: 'Something went wrong'
    });
  }
});

app.listen(3002, () => {
  console.log("Server is running on port 3002");
});