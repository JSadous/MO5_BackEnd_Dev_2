// Import jsonwebtoken for JWT verification
const jwt = require('jsonwebtoken');

// Secret key for signing/verifying JWTs (in real apps, use env variable)
const JWT_SECRET = 'RocketJWTSecretKey123';

// Middleware function to authenticate requests using JWT
function authenticateToken(req, res, next) {
  // Get the value of the 'Authorization' header
  const authHeader = req.headers['authorization'];
  // Check if the header exists and starts with 'Bearer '
  if (authHeader && authHeader.startsWith('Bearer ')) {
    // Extract the token from the header
    const token = authHeader.split(' ')[1];
    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        // If verification fails, return Access Forbidden
        return res.status(403).json({ error: 'Access Forbidden' });
      }
      // Attach user info to request (optional)
      req.user = user;
      // Proceed to next middleware or route handler
      next();
    });
  } else {
    // If no valid Authorization header, return Access Forbidden
    return res.status(403).json({ error: 'Access Forbidden' });
  }
}

// Export the middleware function
module.exports = authenticateToken;
