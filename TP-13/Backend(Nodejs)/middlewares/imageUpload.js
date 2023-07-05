const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');

// Set storage engine
const storage = multer.diskStorage({
    destination:  'upload',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix+'-'+ file.originalname)
      
    }
  })
  
const upload = multer({ 
  storage: storage,
  limits:{ fileSize : 1024 * 1024} // max size
})

module.exports = upload;