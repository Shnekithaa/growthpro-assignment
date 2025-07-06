// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data for simulation
const sampleRatings = [4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9];
const sampleReviewCounts = [89, 127, 156, 203, 234, 289, 345, 412, 567];

const headlineTemplates = [
  "Why {name} is {location}'s Best Kept Secret in 2025",
  "Discover {name}: {location}'s Premier Destination",
  "{name} - Transforming {location}'s Local Scene",
  "The Ultimate Guide to {name} in {location}",
  "{name}: Where {location} Meets Excellence",
  "Unveiling {name} - {location}'s Hidden Gem",
  "{name}: Your Next Favorite Spot in {location}",
  "Breaking: {name} Takes {location} by Storm",
  "{name} - Redefining Excellence in {location}",
  "The Rise of {name} in {location}'s Market",
  "{name}: Leading Innovation in {location}",
  "How {name} Became {location}'s Talk of the Town"
];

// Helper function to generate random selection
const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Helper function to generate personalized headline
const generateHeadline = (name, location) => {
  const template = getRandomItem(headlineTemplates);
  return template.replace('{name}', name).replace('{location}', location);
};

// Routes

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'GrowthProAI Business Dashboard API',
    status: 'active',
    version: '1.0.0'
  });
});

// POST /business-data - Get initial business data
app.post('/business-data', (req, res) => {
  try {
    const { name, location } = req.body;
    
    // Input validation
    if (!name || !location) {
      return res.status(400).json({
        error: 'Missing required fields: name and location are required'
      });
    }
    
    if (typeof name !== 'string' || typeof location !== 'string') {
      return res.status(400).json({
        error: 'Invalid data types: name and location must be strings'
      });
    }
    
    // Trim whitespace and validate length
    const trimmedName = name.trim();
    const trimmedLocation = location.trim();
    
    if (trimmedName.length === 0 || trimmedLocation.length === 0) {
      return res.status(400).json({
        error: 'Empty fields: name and location cannot be empty'
      });
    }
    
    // Generate simulated business data
    const businessData = {
      rating: getRandomItem(sampleRatings),
      reviews: getRandomItem(sampleReviewCounts),
      headline: generateHeadline(trimmedName, trimmedLocation),
      timestamp: new Date().toISOString()
    };
    
    // Log the request for debugging
    console.log(`📊 Business data requested for: ${trimmedName} in ${trimmedLocation}`);
    
    res.json(businessData);
    
  } catch (error) {
    console.error('Error in /business-data:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// GET /regenerate-headline - Generate new headline
app.get('/regenerate-headline', (req, res) => {
  try {
    const { name, location } = req.query;
    
    // Input validation
    if (!name || !location) {
      return res.status(400).json({
        error: 'Missing required query parameters: name and location are required'
      });
    }
    
    // Trim whitespace and validate
    const trimmedName = name.trim();
    const trimmedLocation = location.trim();
    
    if (trimmedName.length === 0 || trimmedLocation.length === 0) {
      return res.status(400).json({
        error: 'Empty parameters: name and location cannot be empty'
      });
    }
    
    // Generate new headline
    const newHeadline = generateHeadline(trimmedName, trimmedLocation);
    
    // Log the request for debugging
    console.log(`🔄 Headline regenerated for: ${trimmedName} in ${trimmedLocation}`);
    
    res.json({
      headline: newHeadline,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error in /regenerate-headline:', error);
    res.status(500).json({
      error: 'Internal server error'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Something went wrong!'
  });
});

// Handle 404 routes
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    availableRoutes: [
      'POST /business-data',
      'GET /regenerate-headline'
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
🚀 GrowthProAI Business Dashboard API Server
📡 Server running on port ${PORT}
🌐 Access at: http://localhost:${PORT}
  
📋 Available endpoints:
  • POST /business-data - Get business analytics
  • GET /regenerate-headline - Generate new SEO headline
  • GET / - Health check
  `);
});

module.exports = app;