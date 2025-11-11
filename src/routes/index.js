const express = require('express');
const router = express.Router();
const welcomeController = require('../controllers/welcomeController');
const helloController = require('../controllers/helloController');

/**
 * @openapi
 * /:
 *   get:
 *     summary: Welcome endpoint
 *     description: Returns a welcome message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Welcome to the Simple REST API built with Node and Express!(Udated)"
 */
router.get('/', welcomeController.getWelcome);

/**
 * @openapi
 * /hello/{name}:
 *   get:
 *     summary: Greet a user by name
 *     description: Returns a personalized greeting message
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the person to greet
 *         example: "Eldose"
 *     responses:
 *       200:
 *         description: Successful response with greeting
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello Eldose, welcome to API"
 */
router.get('/hello/:name', helloController.sayHello);

module.exports = router;
