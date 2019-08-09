const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('express-handlebars');

app.set('port', process.env.PORT || 3000);

//configuración de handlebars
app.set('views', path.join(__dirname, '../views'));
app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), '/layouts'),
    partialsDir: path.join(app.get('views'), '/partials'),
    extname: '.hbs',
    helpers: require('../lib/helpers')
}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use('/Articulos', require('../routes'));


module.exports = app;