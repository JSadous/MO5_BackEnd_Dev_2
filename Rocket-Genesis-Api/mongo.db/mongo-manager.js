// Import mongoose library for MongoDB object modeling
const mongoose = require('mongoose')
// Load environment variables from .env file
require('dotenv').config()

// Function to open a MongoDB connection
const openMongoConnection = () => {
    // Get the default connection
    const db = mongoose.connection;
    // Log errors if connection fails
    db.on('error', console.error.bind(console, 'connection error:'));
    // Log success message when connection opens
    db.once('open', function callback () {
        console.log("connected to MongoDB");
    });
    // Connect to MongoDB using the provided connection string
    mongoose.connect('mongodb+srv://JSadous:Lovecode1@cluster0.yxjfahe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
};

// Set strictQuery mode for mongoose
mongoose.set('strictQuery', true)

// Export the openMongoConnection function
module.exports = {openMongoConnection};