const express = require('express');
const router = express.Router();
const articulosController = require('../controllers/articulosController');


router.get('/:pagina', articulosController.index);
router.post('/buscar', articulosController.search);
router.delete('/delete/:id', articulosController.delete);
router.get('/edit/:id', articulosController.edit);
router.post('/update', articulosController.update);
router.post('/create', articulosController.create);

module.exports = router;