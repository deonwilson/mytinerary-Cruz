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
        console.log(req.body)
        const {ciudad, imagen, pais} = req.body.inputNuevoDato

        new Ciudades({
            imagen: imagen,
            ciudad: ciudad,
            pais: pais
            
        }).save()
        .then(respuesta => res.json({respuesta}))
    },

    eliminarCiudad: async(req, res) =>{
        const id = req.params.id
        await Ciudades.findOneAndDelete({_id:id})
    },

    actualizarCiudad: async(req, res)=>{
        const id = req.params.id
        const ciudad = req.body.actualCiudad
        let ciudadActualizado = await Ciudades.findByIdAndUpdate({_id:id}, ciudad)
    }
    
} //req-requiere res-response
module.exports = ciudadesController