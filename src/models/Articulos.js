const pool = require('../db');
const Articulos = {};

Articulos.all = async () => {
    return await pool.query("Select * From Articulos");
}

module.exports = Articulos;