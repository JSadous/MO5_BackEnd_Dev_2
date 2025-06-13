// Initial dependencies and definitions

// Load environment variables from .env file
require('dotenv').config();
// Import express library
const express = require('express');
// Create an Express application instance
const app = express();
// Set the port from environment variable or default to 3004
const port = process.env.PORT || 3004;

// Import routes
const HealthRoutes = require('./src/routes/health.routes'); // Health check routes
const AgentRoutes = require('./src/features/agent/agent.routes'); // Agent-related routes
const RegionRoutes = require('./src/features/region/region.routes'); // Region-related routes

// Middleware to parse JSON request bodies
app.use(express.json());

// Register health routes
HealthRoutes.registerHealthRoutes(app);
// Mount agent routes under /api/agents
app.use('/api/agents', AgentRoutes);
// Mount region routes under /api/regions
app.use('/api/regions', RegionRoutes);

// Import and open MongoDB connection
const MongoManager = require('./mongo.db/mongo-manager');
MongoManager.openMongoConnection();

// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server starts
    console.log(`server is listening on port ${port}`)
})