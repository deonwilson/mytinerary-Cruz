const mongoose = require("mongoose") // alamacena los daos de las cuidades

const itinerariosSchema = new  mongoose.Schema({
    ciudad: {type: mongoose.Types.ObjectId, ref:'persona', required: true},
    itinerario:{type:Object, required:true},
    likes:{type:Array},
    autor:{type: mongoose.Types.ObjectId, ref: 'usuarios'},
    comentarios:[{
        comentario: {type: String},
        usurioId:{type:mongoose.Types.ObjectId, ref:"usuarios"}
    }]
    
    
})

const Itinerarios = mongoose.model("itinerario", itinerariosSchema)
module.exports = Itinerarios