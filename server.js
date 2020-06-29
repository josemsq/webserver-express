const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

//config for heroku
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials', function(err) {});

app.use(express.static(__dirname + '/public'));
//Express HBS engine
app.set('view engine', 'hbs');


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Jose'
    });
    /* let salida = {
        nombre: 'jose',
        edad: 33,
        url: req.url

    }
    res.send(salida); */
    //res.send('Hola mundo');
});

app.get('/about', (req, res) => {

    res.render('about');
    //res.send('Hola mundo');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});