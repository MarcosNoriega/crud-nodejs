const Articulos = require('../models/Articulos');
const articulosController = {};

articulosController.index = async (req, res) => {
    const pagina = req.params.pagina;
    let cantArt = 15;
    let offset = (pagina - 1) * cantArt;
    const articulos = await Articulos.paginate(cantArt, offset);
    let ultimaPag = Math.round(await Articulos.count() / cantArt);
    

    res.render('articulos/index.hbs', {articulos, pagina, ultimaPag});
};

articulosController.search = async (req, res) => {
    const termino = req.body.termino;
    const articulos = await Articulos.findTermino(termino);

    res.json(articulos);
}

articulosController.delete = async (req, res) => {
    const id = req.params.id;
    const articulo = await Articulos.deleteById(id);

    res.json(articulo);
}

articulosController.edit = async (req, res) => {
    const id = req.params.id;
    const articulo = await Articulos.findById(id);

    res.json(articulo);
}

articulosController.update = async (req, res) => {
    await Articulos.updateById(req.body);

    res.redirect('/articulos/1');
}

articulosController.create = async (req, res) => {
    await Articulos.add(req.body);

    res.redirect('/articulos/1');
}

module.exports = articulosController;