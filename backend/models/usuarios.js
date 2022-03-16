const mongoose = require("mongoose") 

const usuariosSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    email:{type:String, required:true},
    contrasenia:[{type:String, required:true}],
    foto:{type:String, required: true},
    pais:{type:String, required:true},
    uniqueString:{type:String, required:true},
    emailVerificado:{type:Boolean, required:true}, 
    from:{type:Array}
    
})

const Usuarios = mongoose.model("usuarios", usuariosSchema)
module.exports = Usuarios
