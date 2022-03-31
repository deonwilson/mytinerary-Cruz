const mongoose = require("mongoose") // alamacena los daos de las cuidades

const actividadesSchema = new  mongoose.Schema({
    itinerario: {type: mongoose.Types.ObjectId, ref:'itinerario', required: true},
    foto:{type: String, required: true},
    titulo:{type:String, required:true}
    
})

const Actividades = mongoose.model("actividades", actividadesSchema)
module.exports = Actividades