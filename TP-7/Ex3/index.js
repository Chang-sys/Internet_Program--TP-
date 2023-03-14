const express = require('express')
const fs = require('fs');
const app = express()

app.get('/', function (req, res) {
  fs.readFile('./src/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    res.send(data);
  });
});

app.get('/detail', function (req, res) {
  fs.readFile('./src/Book_Detail.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    res.send(data);
    });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});