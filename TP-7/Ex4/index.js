
const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.static('./src'));

// Serve the index.html file on GET request to the root URL
app.get('/', (req, res) => {
  // Read the index.html file and send it as a response
  fs.readFile('./src/index.html', 'utf8', (err, data) => {
    if (err) {
      // If there's an error reading the file, send a 500 status code and an error message
      res.status(500).send('Error reading file');
    } else {
      // If there's no error, send the HTML file as a response
      res.send(data);
    }
  });
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});