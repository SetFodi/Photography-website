const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Utility function to safely read and write JSON files
const readAndWriteFile = (filePath, newData, res, successMessage) => {
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    let existingData = [];

    if (!err && fileData) {
      try {
        existingData = JSON.parse(fileData); // Parse existing data
      } catch (parseError) {
        console.error('Error parsing JSON file:', parseError);
        return res.status(500).json({ message: 'Error reading data file.' });
      }
    }

    existingData.push(newData); // Add new data

    fs.writeFile(filePath, JSON.stringify(existingData, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing to file:', writeErr);
        return res.status(500).json({ message: 'Error saving data.' });
      }

      console.log(successMessage, newData);
      res.status(200).json({ message: successMessage });
    });
  });
};

// Endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, 'contact-messages.json');

  if (!data.name || !data.email || !data.message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  readAndWriteFile(filePath, data, res, 'Message saved successfully!');
});

// Endpoint to handle login submissions
app.post('/api/login', (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, 'login-data.json');

  if (!data.username || !data.password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  readAndWriteFile(filePath, data, res, 'Login data saved successfully!');
});

// Error handling middleware for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
