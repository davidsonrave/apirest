const Clientes = require('../models/Clientes.js');//llamamos el modelo

//agrega un nuevo cliente 
exports.nuevoCliente = async (req, res, next)=>{
    const cliente = new Clientes(req.body);

    try {
        // almacenar el registro
        await cliente.save();
        res.json({mensaje : 'Se agrego un nuevo cliente'});

    } catch (error) {
        //si hay un error, console.log y next
        console.log(error);
        next();
        
    }
}

//muestra todos los clientes

exports.mostrarClientes = async (req, res, next)=> {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        //si hay un error, console.log y next
        console.log(error);
        next();
    }
}
//muestra todos los cliente por su Id 
exports.mostrarCliente = async (req, res, next)=> {
   
        const cliente = await Clientes.findById(req.params.idCliente);
       if (!cliente) {// si no existe
        res.json({mensaje: 'Ese cliente no existe '});
        return next()
       } 

    
}