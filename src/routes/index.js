const express = require('express');
const router = express.Router();
const articulosController = require('../controllers/articulosController');


router.get('/', articulosController.index);

module.exports = router;