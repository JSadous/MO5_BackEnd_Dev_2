// Import the HealthController
const HealthController = require('../features/health/health.controller');
const authenticateToken = require('../shared/middleware/baseMiddleware');

// Function to register health-related routes
const registerHealthRoutes = (app) => {
  // Register a GET route for /hello that uses the helloWorld controller and is protected
  app.get('/hello', authenticateToken, HealthController.helloWorld);
}

// Export the registerHealthRoutes function
module.exports = {registerHealthRoutes};