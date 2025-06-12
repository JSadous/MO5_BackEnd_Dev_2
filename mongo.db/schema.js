// Import express framework
const express = require('express');
// Import mongoose for MongoDB interaction
const mongoose = require('mongoose');
// Create an express application instance
const app = express();
// Use express.json() middleware to parse JSON request bodies
app.use(express.json());


// Agent and region logic has been modularized into the features folder.
// This file can now be used for schema experimentation or removed if not needed.
// No executable code remains in this file.
