const mongoose = require("mongoose") // alamacena los daos de las cuidades

const ciudadesSchema = new  mongoose.Schema({
    imagen:{type:String, required:true},
    nombre:{type:String, required:true},
    pais:{type:String, required:true}
    
})

const Ciudades = mongoose.model("ciudades", ciudadesSchema)
module.exports = Ciudades