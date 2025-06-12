// Import the Agent model
const Agent = require('./agent.model');

// CREATE: Add a new agent
const createAgent = async (req, res) => {
    // Destructure required fields from request body
    const { first_name, last_name, email, region } = req.body;
    // Check for missing required fields
    if (!first_name || !last_name || !email || !region) {
        // Respond with error if any required field is missing
        return res.status(400).json({ error: 'Missing required fields.' });
    }
    try {
        // Create a new Agent instance
        const agent = new Agent({ first_name, last_name, email, region });
        // Save the agent to the database
        await agent.save();
        // Respond with success message and agent data
        res.status(201).json({ message: 'Agent created successfully.', agent });
    } catch (err) {
        // Handle errors during creation
        res.status(500).json({ error: 'Failed to create agent.' });
    }
};

// READ ALL: Get all agents, sorted by last_name
const getAllAgents = async (req, res) => {
    try {
        // Find all agents and sort by last_name alphabetically
        const agents = await Agent.find().sort({ last_name: 1 });
        // Respond with the list of agents
        res.json(agents);
    } catch (err) {
        // Handle errors during fetch
        res.status(500).json({ error: 'Failed to fetch agents.' });
    }
};

// READ BY REGION: Get agents by region, sorted by rating
const getAgentsByRegion = async (req, res) => {
    // Get region from query parameters
    const { region } = req.query;
    // If region is missing, return error
    if (!region) return res.status(400).json({ error: 'Region is required.' });
    try {
        // Find agents in the specified region, sorted by rating descending
        const agents = await Agent.find({ region }).sort({ rating: -1 });
        // Respond with the list of agents
        res.json(agents);
    } catch (err) {
        // Handle errors during fetch
        res.status(500).json({ error: 'Failed to fetch agents by region.' });
    }
};

// UPDATE: Update allowed fields for an agent
const updateAgent = async (req, res) => {
    // Destructure updatable fields from request body
    const { email, first_name, last_name, region } = req.body;
    // Email is required to identify the agent
    if (!email) return res.status(400).json({ error: 'Email is required to update.' });
    try {
        // Find the agent by email
        const agent = await Agent.findOne({ email });
        // If agent does not exist, return error
        if (!agent) return res.status(404).json({ error: 'Agent does not exist.' });
        // Update only allowed fields if provided
        if (first_name) agent.first_name = first_name;
        if (last_name) agent.last_name = last_name;
        if (region) agent.region = region;
        // Save the updated agent
        await agent.save();
        // Respond with success message and updated agent
        res.json({ message: 'Agent updated successfully.', agent });
    } catch (err) {
        // Handle errors during update
        res.status(500).json({ error: 'Failed to update agent.' });
    }
};

// DELETE: Delete an agent by email
const deleteAgent = async (req, res) => {
    // Get email from request body
    const { email } = req.body;
    // Email is required to delete
    if (!email) return res.status(400).json({ error: 'Email is required to delete.' });
    try {
        // Delete the agent by email
        const result = await Agent.deleteOne({ email });
        // If no agent was deleted, return not found
        if (result.deletedCount === 0) return res.status(404).json({ error: 'Agent not found.' });
        // Respond with success message
        res.json({ message: 'Agent deleted successfully.' });
    } catch (err) {
        // Handle errors during deletion
        res.status(500).json({ error: 'Failed to delete agent.' });
    }
};

// Export all controller functions
module.exports = {
    createAgent, // Function to create a new agent
    getAllAgents, // Function to get all agents
    getAgentsByRegion, // Function to get agents by region
    updateAgent, // Function to update agent info
    deleteAgent // Function to delete an agent
};
