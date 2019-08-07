const Articulos = require('../models/Articulos');
const articulosController = {};

articulosController.index = async (req, res) => {
    const articulos = await Articulos.all();

    res.render('articulos/index.hbs', {articulos});
};

module.exports = articulosController;