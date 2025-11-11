const express = require('express');
const router = express.Router();
const welcomeController = require('../controllers/welcomeController');
const helloController = require('../controllers/helloController');

router.get('/', welcomeController.getWelcome);

// GET /hello/:name -> greet the provided name
router.get('/hello/:name', helloController.sayHello);

module.exports = router;
