// Simple middleware to check for a hard-coded access key in the Authorization header
const ACCESS_KEY = 'RocketAccessKey123'; // You can change this to any string you want

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader === ACCESS_KEY) {
    // Access granted
    next();
  } else {
    // Access denied
    return res.status(403).json({ error: 'Access Forbidden' });
  }
}

module.exports = authenticateToken;
