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
        const {ciudad, itinerarios} = req.body.inputNuevoDato
        const {foto, nombre, price, duration, likes, hashtags, comments} = itinerarios
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
    },

    actualizarItinerario: async(req, res)=>{
        const id = req.params.id
        const ciudad = req.body.actualCiudad
        let ciudadActualizado = await Itinerarios.findByIdAndUpdate({_id:id}, ciudad)
    },

    obtenerItinerarioID: async (req, res) =>{
        let ciudadID = req.params.id
        console.log(ciudadID)
        let unaCiudad 
        let error = null
        
        try{
            unaCiudad = await Itinerarios.findOne({_id:ciudadID})
            console.log(unaCiudad)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : [unaCiudad],
            success: error ? false : true,
            error : error
        })
        
    }
}

module.exports = itinerariosController