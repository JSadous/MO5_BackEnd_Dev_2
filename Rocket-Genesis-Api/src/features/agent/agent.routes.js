// Import express library
const express = require('express');
// Create a new router instance
const router = express.Router();
// Import the agent controller
const AgentController = require('./agent.controller');

// Route to create a new agent
router.post('/create', AgentController.createAgent);
// Route to get all agents
router.get('/', AgentController.getAllAgents);
// Route to get agents by region
router.get('/by-region', AgentController.getAgentsByRegion);
// Route to update agent info
router.put('/update-info', AgentController.updateAgent);
// Route to delete an agent
router.delete('/delete', AgentController.deleteAgent);

// Export the router for use in app.js
module.exports = router;
