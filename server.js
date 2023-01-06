const express = require('express');
const app = express()
const hbs = require('hbs');
//importar helpers 
require('./hbs/helpers')

const port = process.env.PORT || 3000;

// designar una carpeta public 
app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// helpers hbs 
// hbs.registerHelper('getAnio', () => {
//     return new Date().getFullYear();
// });

// hbs.registerHelper('capitalizar', (texto) => {

//     let palabras = texto.split(' ');
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
//     });

//     return palabras.join(' ');
// });


app.get('/', (req, res) => {
    res.render('home', { nombre: 'alberto', anio: new Date().getFullYear() });
});
app.get('/about', (req, res) => {
    res.render('about', { nombre: 'alberto', anio: new Date().getFullYear() });
});

// app.get('/', (req, res) => {

//     let salida = {
//         nombre: 'alberto',
//         edad: '32',
//         url: req.url
//     }
//     res.send(salida)

//     res.send('Hola Mundo')
// });

// app.get('/data', (req, res) => {

//     res.send('Hola DATA')
// })

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
})