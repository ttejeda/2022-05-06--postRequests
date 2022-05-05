var express = require('express'); // Usa la dependencia
var app = express();

var PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs'); // Utiliza ejs como motor de vistas.
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>`);
});

app.get('/person/:id', (req, res) => { // Con ejs se usa .render.
    res.render('person', {ID: req.params.id, Message: req.query.message, Times: req.query.times}); // Envía a person.ejs los valores de ID, Message y Times para que los use.
});

app.listen(PORT);