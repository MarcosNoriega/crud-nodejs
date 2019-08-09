const pool = require('../db');
const Articulos = {};

Articulos.all = async () => {
    return await pool.query("Select * From Articulos");
};

Articulos.paginate = async (limit, offset) => {
    if (!offset) {
        offset = 0;
    }

    return await pool.query(`SELECT * FROM Articulos LIMIT ${limit} OFFSET ${offset}`);
}

Articulos.count = async () => {
    const cantArt = await pool.query(`SELECT COUNT(*) as cantidad FROM Articulos`);
    
    return cantArt[0].cantidad;
}

Articulos.findTermino = async (termino) => {
    return await pool.query(`SELECT * FROM Articulos WHERE nombre LIKE '%${termino}%'`)
}

module.exports = Articulos;