const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());

// Serve the OpenAPI spec as JSON
app.get('/api-spec.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Serve the OpenAPI spec as YAML (for Azure API Management)
app.get('/openapi.yaml', (req, res) => {
  const yamlPath = path.join(__dirname, '../openapi.yaml');
  res.setHeader('Content-Type', 'application/yaml');
  res.sendFile(yamlPath);
});

// Swagger/OpenAPI documentation route with interactive UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use('/', routes);

module.exports = app;
