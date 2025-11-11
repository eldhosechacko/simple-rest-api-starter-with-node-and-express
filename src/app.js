const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const routes = require('./routes');

const app = express();

app.use(express.json());

// Serve the OpenAPI spec as JSON (before the Swagger UI middleware)
app.get('/api-spec.json', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(swaggerSpec);
});

// Swagger/OpenAPI documentation route with interactive UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use('/', routes);

module.exports = app;
