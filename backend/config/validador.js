const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        nombre: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'First name field must only contain letters, no numbers, spaces or special characters are allowed at field: firstName',
            'string.max':"First name field must only contain letters, no numbers, spaces or special characters are allowed at field: firstName"
        }),
        
        apellido: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'Last name field must only contain letters, no numbers, spaces or special characters are allowed at field: lastName',
            'string.max':"Last name field must only contain letters, no numbers, spaces or special characters are allowed at field: lastName"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'You must enter a valid email at field: email'
        }),
        /* .min(8).max(30) */
        contrasenia: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().min(8).max(30).trim().messages({
            'string.min':'The password must be at least 8 and at most 30 characters.',
            'string.pattern':"The password must be at least 8 and at most 30 characters."
        }),

        foto :joi.string(),

        pais: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'El country debe contener mas de 3 caracteres',
            'string.max':"El country debe contener como maximo 20 caracteres"
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