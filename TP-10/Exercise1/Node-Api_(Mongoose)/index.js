var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var session = require('express-session')
var cookieParser = require('cookie-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({
    secret: "Your-name",
    saveUninitialized: true,
    cookie: {maxAge: oneHour},
    resave: false,
    name: "token",
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, // 2 hours
      secure: false,
    }
}))
// app.use(cookieParser())
app.use(cors(
  {
    origin: 'http://localhost:3030', 
    credentials: true,
  }
));

// connect to mongod server
require('./src/config/conntectDB')()
app.use(require('./src/routers/index'));

const PORT=3001
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});