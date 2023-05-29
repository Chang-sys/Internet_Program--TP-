const express = require('express')
let bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// Using cors middleware of Express.js
const cors=require('cors');
app.use(cors(
  {
    origin: 'http://localhost:3001'
  }
));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())

require('./src/config/conntectDB')()
app.use(require('./src/routers/index'));

const PORT=3001
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});