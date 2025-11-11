const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Simple REST API',
      version: '1.0.0',
      description: 'A simple modular REST API built with Node.js and Express',
      contact: {
        name: 'API Support'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      },
      {
        url: 'https://mvpa1backend-ffbrb6enazgce6a2.southindia-01.azurewebsites.net',
        description: 'Production server (Azure)'
      }
    ]
  },
  apis: [path.join(__dirname, './routes/*.js')] // Absolute path to route files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
