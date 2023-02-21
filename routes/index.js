const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController.js');
const productosController = require('../controllers/productosController.js');
    // router.get('/', (req,res)=>{
    //     res.send('inicio')
    // });
    // router.get('/nosotros', (req, res)=>{
    //     res.send('nosotros')
    // })

module.exports = function (){
    //Agregar nuevos clientes via post 
    router.post('/clientes', clienteController.nuevoCliente); // nombre del controlador clienteController y la funcion importada dek controllers nuevoCliente 

    //obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes);

    //Muestra un cliente en especifico (ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente);

    //Actualizar Cliente 
    router.put('/clientes/:idCliente', clienteController.actualizarCliente);//voy al controlador y creo esta funcion

    //eliminar cliente 
    router.delete('clientes/:idCliente', clienteController.eliminarCliente);

    /***************PRODUCTOS************************* */
    router.post('/productos', productosController.nuevoProducto );


    return router;
}