const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        nombre: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'nombre / El NOMBRE debe contener mas de 3 caracteres',
            'string.max':"nombre / El nombre debe contener como maximo 20 caracteres"
        }),
        
        apellido: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'apellido / El apellido debe contener mas de 3 caracteres',
            'string.max':"apellido / El apellido debe contener como maximo 20 caracteres"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'Formato incorrecto de email'
        }),

        contrasenia: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min':'El password debe contener minimo 8 caracteres y contener mayuscula, minuscula y numero',
            'string.pattern':"El password debe ser alphanumerico y contener un numero"
        }),

        foto :joi.string(),

        pais: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'pais / El pais debe contener mas de 3 caracteres',
            'string.max':"pais / El pais debe contener como maximo 20 caracteres"
        }),

        from:joi.string()
    })

    const validacion = schema.validate(req.body.dataUsuario, {abortEarly:false})
       
    if (validacion.error) {
        
        return res.json({success: false, from:"validator", message:validacion.error.details, test: validacion})
        
    }
    
    next()
    
    
}

module.exports = validator