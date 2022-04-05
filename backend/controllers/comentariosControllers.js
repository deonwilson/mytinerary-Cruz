/* const Places = require('../models/placesModel') */
const Itinerario = require('../models/itinerarios')

const comentarioControllers = {

    cargarComentario: async (req, res) => {
        const {itinerarioId, comentario} = req.body.comentario
        const usuario = req.user._id
        
        try {
            const nuevoComentario = await Itinerario.findOneAndUpdate({_id:itinerarioId}, {$push: {comentarios: {comentario: comentario, usuarioId: usuario}}}, {new: true}).populate("autor", {nombre:1}).populate("comentarios.usuarioId", {nombre:1, color:1})
            res.json({ success: true, response:{nuevoComentario}, message:"gracias por dejarnos tu comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }

        
    },

    actualizarComentario: async (req, res) => {
        const {comentarioId,comentario} = req.body.comentario
        //console.log(comentarioId) //624645f4cba521a2e0e0ce5d
        const user = req.user._id
        try {
            const nuevoComentario = await Itinerario.updateOne({"comentarios._id":comentarioId}, {$set: {"comentarios.$.comentario": comentario}}, {new: true})
            console.log(nuevoComentario)
            res.json({ success: true, response:{nuevoComentario}, message:"tu comentario a sido modificado" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Algo a salido mal intentalo en unos minutos" })
        }

    },

    eliminarComentario: async (req, res) =>{
        const id = req.params.id
        const user = req.user._id
        //console.log(id) //624678812f025337d3636d58
        try {
            const deleteComment = await Itinerario.findOneAndUpdate({"comentarios._id":id}, {$pull: {comentarios: {_id: id}}}, {new: true})
            console.log(deleteComment)
            res.json({ success: true, response:{deleteComment}, message: "has eliminado el comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }
    }

   
    
}
module.exports = comentarioControllers