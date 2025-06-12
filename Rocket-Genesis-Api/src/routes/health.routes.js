// Import the HealthController
const HealthController = require('../features/health/health.controller');

// Function to register health-related routes
const registerHealthRoutes = (app) => {
  // Register a GET route for /hello that uses the helloWorld controller
  app.get('/hello', HealthController.helloWorld);
}

// Export the registerHealthRoutes function
module.exports = {registerHealthRoutes};