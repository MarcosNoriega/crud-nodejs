const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('articulos/index.hbs')
});

module.exports = router;