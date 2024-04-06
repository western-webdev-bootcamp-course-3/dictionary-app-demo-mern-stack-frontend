const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const wordRoutes = require('./routes/wordRoutes');

// create express app
const app = express();
// set up port
const port = process.env.PORT || 8000;

// middleware: allow cross-origin requests
app.use(cors());
// middleware: parse JSON
app.use(express.json());

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri);

// create connection
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/words', wordRoutes);

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
