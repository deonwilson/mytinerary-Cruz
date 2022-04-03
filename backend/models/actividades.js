const mongoose = require("mongoose") // alamacena los daos de las cuidades

const actividadesSchema = new  mongoose.Schema({
    foto:{type: String, required: true},
    descripcion:{type:String, required:true}
    
})

const Actividades = mongoose.model("actividades", actividadesSchema)
module.exports = Actividades