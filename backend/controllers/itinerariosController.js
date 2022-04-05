const { response } = require("express")
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
        //const place = await Places.findOne({_id:id}).populate("autor", {fullName:1}).populate("comments.userID",{fullName:1})
        //res.json({ success: false, response:{place} })
        let ciudadId = req.params.idCiudad
        let itinerarios 
        let error = null
        
        try{//agregue solamente esto en la linea 84 populate("autor", {fullName:1}).populate("comments.userID",{fullName:1})
            itinerarios = await Itinerarios.find({ciudad:ciudadId}).populate("autor", {nombre:1}).populate("comentarios.usuarioId",{nombre:1, color:1}).populate("actividades.actividad", {foto:1, descripcion:1})
            //console.log(itinerarios)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : itinerarios,
            success: error ? false : true,
            error : error
        })
        
    },
    
    meGustaNoMegusta: async (req, res) => { 
        
         const id = req.params.id
         const usuario = req.user.id
         let itinerario
         try{
            itinerario = await Itinerarios.findOne({_id:id})
            
            if(itinerario.likes.includes(usuario)){
                Itinerarios.findOneAndUpdate({ _id:id }, {$pull:{likes:usuario}}, {new:true})
                .then(response => res.json({
                success: true,
                response: response.likes  
                
                }))
                .catch(error => console.log(error))
            }else{
                Itinerarios.findOneAndUpdate({ _id:id }, {$push:{likes:usuario}}, {new:true})
                
                .then(response => res.json({
                success: true,
                response: response.likes    
                }))
                .catch(error => console.log(error))
            }
            
        }catch(err){
            error = err
            res.json({success: false, response: error})
        }
         
     }
}

module.exports = itinerariosController