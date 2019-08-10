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

Articulos.deleteById = async id => {
    var articulo = await pool.query(`SELECT * FROM Articulos WHERE IdArticulos = ${id}`);
    await pool.query(`DELETE FROM Articulos WHERE IdArticulos = ${id}`);

    return articulo;
}

Articulos.updateById = async (articulo) => {
    await pool.query(`UPDATE Articulos SET Nombre = '${articulo.Nombre}', Precio = ${articulo.Precio}, Stock = ${articulo.Stock} WHERE IdArticulos = ${articulo.id}`);
}

Articulos.findById = async id => {
    return pool.query(`SELECT * FROM Articulos WHERE IdArticulos = ${id}`);
}

module.exports = Articulos;