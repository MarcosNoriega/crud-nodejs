const express = require('express');
const router = express.Router();
const articulosController = require('../controllers/articulosController');


router.get('/:pagina', articulosController.index);
router.post('/buscar', articulosController.search);

module.exports = router;