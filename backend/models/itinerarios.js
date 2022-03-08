const mongoose = require("mongoose") // alamacena los daos de las cuidades

const itinerariosSchema = new  mongoose.Schema({
    ciudad:{type:String, required:true},
    itinerario:{type:Object, required:true}
    
    
})

const Itinerarios = mongoose.model("itinerarios", itinerariosSchema)
module.exports = Itinerarios