// Import the helloWorld controller function
const helloWorld = async(req, res) => {
  // Send a simple 'Hello World!!' response
  res.send('Hello World!!');
};

// Export the helloWorld function for use in routes
module.exports = {helloWorld};