const Ciudades = require("../models/cuidades")


const ciudadesController = {
    
    obtenerCiudades: async (req, res) =>{
        let ciudades
        let error = null
       
        try{
            ciudades = await Ciudades.find()
            
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {ciudades},
            success: error ? false : true,
            error : error

        })
        
    },
    
    cargarCiudad: async(req, res)=>{
        const {imagen, nombre, pais} = req.body.dataInput
        new Ciudades({
            imagen: imagen,
            nombre: nombre,
            pais: pais
        }).save()
        .then((respuesta) => res.json({respuesta}))
    },

    eliminarCiudad: async(req, res) =>{
        const id = req.params.id
        await Ciudades.findOneAndDelete({_id:id})
        .then((respuesta)=> res.json({respuesta}))
    },
    actualizarCiudad: async(req, res)=>{
        const id = req.params.id
        const ciudad = req.body.dataInput
        console.log(req.body.dataInput)
        let ciudadActualizado = await Ciudades.findOneAndReplace({_id:id}, ciudad)
        .then((respuesta)=> res.json({respuesta}))

        /* 
        const id = req.params.id
        const ciudad = req.body.dataInput

        let ciudadb = await Ciudades.findOneAndUpdate({_id:id}, ciudad)
         console.log(ciudadb)
        */
    },

    obtenerCuidadID: async (req, res) =>{
        let ciudadID = req.params.id
        let unaCiudad 
        let error = null
        
        try{
            unaCiudad = await Ciudades.findOne({_id:ciudadID})
        }catch(err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : [unaCiudad],
            success: error ? false : true,
            error : error
        })
        
    }
    

    
} //req-requiere res-response
module.exports = ciudadesController

