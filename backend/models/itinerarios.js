const mongoose = require("mongoose") // alamacena los daos de las cuidades

const itinerariosSchema = new  mongoose.Schema({
    ciudad: {type: mongoose.Types.ObjectId, ref:'persona', required: true},
    itinerario:{type:Object, required:true},
    
    
})

const Itinerarios = mongoose.model("itinerario", itinerariosSchema)
module.exports = Itinerarios