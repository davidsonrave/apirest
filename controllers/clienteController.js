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
   
        const cliente = await Clientes.findById(req.params.idCliente);//para obtener el id del cliente
       if (!cliente) {// si no existe
        res.json({mensaje: 'Ese cliente no existe '});
         next()
       } 

       //mostrar cliente 
       res.json(cliente)

    
}

exports.actualizarCliente = async(req, res, next)=>{
    try {// vamos a intentar atualizar si no cae el catch
        const cliente = await Clientes.findOneAndUpdate({_id : req.params.idCliente },//idCliente  se ha definido en la ruta  router.put('/clientes/:idcliente', 
         req.body,{
            new: true //mongo va almacenar lo que hay antes en esta parte le decimos que nos traiga el nuevo
        } );
        res.json(cliente);//nuevo registro
    } catch (error) {
        console.log(error); 
        next(); // para terminar la ejecucion
    }
}

//eliminar cliente por su ID
exports.eliminarCliente = async(req, res, next)=>{
    try {
     await Clientes.findOneAndDelete({_id: req.params.idCliente});
     res.json({mensaje : 'El cliente se ha eliminado '});
    } catch (error) {
        console.log(error);
        next();
}
}