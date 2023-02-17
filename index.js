const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//conectar mongo 
mongoose.Promise = global.Promise;//que utilice promise
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser:true
});


//crea el servidor 
const app = express();

//rutas de la app
app.use('/', routes());

// puerto 
app.listen(5000);