const mongoose = require("mongoose") // alamacena los daos de las cuidades

const ciudadesSchema = new  mongoose.Schema({
    imagen:{type:String, require:true},
    nombre:{type:String, require:true},
    pais:{type:String, require:true},
    _id:{type:String, require:true}
    
})

const Ciudades = mongoose.model("ciudades", ciudadesSchema)
module.exports = Ciudades