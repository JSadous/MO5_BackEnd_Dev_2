// Import express library
const express = require('express');
// Create a new router instance
const router = express.Router();
// Import the agent controller
const AgentController = require('./agent.controller');
const authenticateToken = require('../../shared/middleware/baseMiddleware'); // Import authentication middleware

// Route to create a new agent (protected)
router.post('/create', authenticateToken, AgentController.createAgent);
// Route to get all agents (protected)
router.get('/', authenticateToken, AgentController.getAllAgents);
// Route to get agents by region (protected)
router.get('/by-region', authenticateToken, AgentController.getAgentsByRegion);
// Route to update agent info (protected)
router.put('/update-info', authenticateToken, AgentController.updateAgent);
// Route to delete an agent (protected)
router.delete('/delete', authenticateToken, AgentController.deleteAgent);

// Export the router for use in app.js
module.exports = router;
