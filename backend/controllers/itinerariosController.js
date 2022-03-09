const Itinerarios = require("../models/itinerarios")

const itinerariosController = {
    
    obtenerItinerarios: async (req, res) =>{
        let itinerarios
        let error = null
       
        try{
            itinerarios = await Itinerarios.find()
            
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itinerarios},
            success: error ? false : true,
            error : error

        })
        
    },
    
    cargarItinerario: async(req, res)=>{
        const {ciudad, itinerario} = req.body.dataInput
        const {foto, nombre, price, duration, likes, hashtags, comments} = itinerario
        new Itinerarios({
            ciudad: ciudad,
            itinerario: {
                foto: foto,
                nombre:nombre,
                price:price, // 0< x <= 5 billetes
                duration: duration,
                likes: likes,
                hashtags:hashtags,
                comments:comments
            }
            
        }).save()
        .then(respuesta => res.json({respuesta}))
    },

    eliminarItinerario: async(req, res) =>{
        const id = req.params.id
        await Itinerarios.findOneAndDelete({_id:id})
        .then((respuesta)=> res.json({respuesta}))
    },

    actualizarItinerario: async(req, res)=>{
        const id = req.params.id
        const itinerario = req.body.dataInput
        let ciudadActualizado = await Itinerarios.findOneAndReplace({_id:id}, itinerario)
        .then((respuesta)=> res.json({respuesta}))
    },

    obtenerItinerarioID: async (req, res) =>{
        let itinerarioID = req.params.id
        let unItinerario 
        let error = null
        
        try{
            unItinerario = await Itinerarios.findOne({_id:itinerarioID})
        }catch(err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : {unItinerario},
            success: error ? false : true,
            error : error
        })
        
    },

    obtenerItinerariosPorCiudad: async (req, res) =>{
        let ciudadId = req.params.idCiudad
        console.log(ciudadId)
        let itinerarios 
        let error = null
        
        try{
            itinerarios = await Itinerarios.findOne({ciudad:ciudadId})
            console.log(itinerarios)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : [itinerarios],
            success: error ? false : true,
            error : error
        })
        
    }
}

module.exports = itinerariosController