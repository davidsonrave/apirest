const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController.js');
    // router.get('/', (req,res)=>{
    //     res.send('inicio')
    // });
    // router.get('/nosotros', (req, res)=>{
    //     res.send('nosotros')
    // })

module.exports = function (){
    //Agregar nuevos clientes via post 
    router.post('/clientes', clienteController.nuevoCliente); // nombre del controlador clienteController y la funcion importada dek controllers nuevoCliente 



    return router;
}