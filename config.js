// Configuration for different environments
const config = {
  development: {
    apiBaseUrl: 'http://localhost:3000'
  },
  production: {
    // Replace this with your actual deployed backend URL
    apiBaseUrl: 'http://localhost:3000'  // TEMPORARY: Change this to your actual backend URL after deployment
  }
};

// Auto-detect environment
const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const currentConfig = config[isDevelopment ? 'development' : 'production'];

// Export for use in other files
window.API_CONFIG = currentConfig;
