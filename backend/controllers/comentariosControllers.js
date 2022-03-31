/* const Places = require('../models/placesModel') */
const Itinerario = require('../models/itinerarios')
const comentarioControllers = {

    cargarComentario: async (req, res) => {
        const {itinerarioId, comentario} = req.body.comentario
        const usuario = req.user._id
        console.log(itinerarioId)
        console.log(comentario)
        try {
            const nuevoComentario = await Itinerario.findOneAndUpdate({_id:itinerarioId}, {$push: {comentarios: {comentario: comentario, usurioId: usuario}}}, {new: true}).populate("autor", {nombre:1}).populate("comentarios.usurioId", {nombre:1})
            res.json({ success: true, response:{nuevoComentario}, message:"gracias por dejarnos tu comentario" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }

        
    }
   
    
}
module.exports = comentarioControllers