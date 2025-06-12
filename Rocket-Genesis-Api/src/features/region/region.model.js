// Import mongoose library for MongoDB object modeling
const mongoose = require('mongoose');

// Define the schema for the Region collection
const regionSchema = new mongoose.Schema({
    region: { type: String, required: true, unique: true }, // Region name (required, unique)
    address: { type: String, required: true },              // Region address (required)
    total_sales: { type: Number, default: 0 },              // Total sales for the region (default 0)
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }, // Reference to manager (Agent)
    top_agents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agent' }] // Array of top agents (Agent references)
});

// Create the Region model from the schema
const Region = mongoose.model('Region', regionSchema);

// Export the Region model for use in other files
module.exports = Region;
