// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server to listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the 'app' variable
module.exports = app;

