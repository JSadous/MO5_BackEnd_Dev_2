// Import mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Define the schema for the Agent collection
const agentSchema = new mongoose.Schema({
    first_name: { type: String, required: true }, // Agent's first name (required)
    last_name: { type: String, required: true },  // Agent's last name (required)
    email: { type: String, required: true, unique: true }, // Agent's email (required, unique)
    region: { type: String, required: true },     // Agent's region (required)
    rating: { type: Number, default: 0 },         // Agent's rating (default 0)
    fee: { type: Number, default: 0 },            // Agent's fee (default 0)
    sales: { type: Number, default: 0 }           // Agent's sales (default 0)
});

// Create the Agent model from the schema
const Agent = mongoose.model('Agent', agentSchema);

// Export the Agent model for use in other files
module.exports = Agent;
