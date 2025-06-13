// Middleware to check for a valid access token in the Authorization header

// Hard-coded access key (token)
const ACCESS_KEY = 'RocketSecretKey123';

// Middleware function to authenticate requests
function authenticateToken(req, res, next) {
  // Get the value of the 'Authorization' header
  const authHeader = req.headers['authorization'];
  // Check if the header exists and matches the access key
  if (authHeader && authHeader === ACCESS_KEY) {
    // If valid, proceed to the next middleware or route handler
    return next();
  }
  // If not valid, return Access Forbidden error
  return res.status(403).json({ error: 'Access Forbidden' });
}

// Export the middleware function
module.exports = authenticateToken;
