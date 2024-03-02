// src/server.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Import the routes module

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Use the defined route for the root URL
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
