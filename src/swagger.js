const swaggerJsdoc = require('swagger-jsdoc');

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
      }
    ]
  },
  apis: ['./src/routes/*.js'] // Path to the API docs (JSDoc comments in route files)
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
