const mongoose = require("mongoose") // alamacena los daos de las cuidades

const itinerariosSchema = new  mongoose.Schema({
    ciudad: {type: mongoose.Types.ObjectId, ref:'ciudades', required: true},
    itinerario:{type:Object, required:true},
    likes:{type:Array},
    autor:{type: mongoose.Types.ObjectId, ref: 'usuarios'},
    comentarios:[{
        comentario: {type: String},
        usuarioId:{type:mongoose.Types.ObjectId, ref:"usuarios"}
    }]
    //actividades:[{type: mongoose.Types.ObjectId, ref: 'actividades'}]
    
    
})

const Itinerarios = mongoose.model("itinerario", itinerariosSchema)
module.exports = Itinerarios