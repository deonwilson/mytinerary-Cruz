const Usuarios = require('../models/usuarios')
const bcryptjs = require('bcryptjs')
const UsuariosController = {

    registrarse: async(req, res)=>{ // req.body.dataUsuario
        const {nombre, apellido, email, contrasenia, foto, pais, from} = req.body.dataUsuario
        /* console.log(req.body) */
        try{
            const usuarioExiste = await Usuarios.findOne({email})

            if(usuarioExiste){
                if (usuarioExiste.from.indexOf(from) !== -1) {
                    res.json({ success: false, from:"signup", message: "Ya has realizado tu SignUp de esta forma por favor realiza SignIn" })
                }
                else{
                    const encripatacionContrasenia = bcryptjs.hashSync(contrasenia, 15)
                    usuarioExiste.from.push(from)
                    usuarioExiste.contrasenia.push(encripatacionContrasenia) 
                    if(from === "form-Signup"){ 
                        //PORSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
                        await usuarioExiste.save()
    
                    res.json({
                        success: true, 
                        from:"signup", //RESPONDE CON EL TOKEN Y EL NUEVO USUARIO
                        message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp y agregarlo a tus metodos de SignIN "
                    }) 
                    
                    }else{
                    usuarioExiste.save()
                    
                    res.json({ success: true,
                               from:"signup", 
                               message: "Agregamos "+from+ " a tus medios para realizar signIn" })
                }
                }
            }else{
               
                const contraEncriptada = bcryptjs.hashSync(contrasenia, 15) //LO CREA Y ENCRIPTA LA CONTRASEÑA
                // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
                const nuevoUsuario = await new Usuarios({
                    nombre,
                    apellido,
                    email,
                    contrasenia:[contraEncriptada],
                    foto,
                    pais,
                    emailVerificado:true,
                    from:[from]
                
                })
                

                if (from !== "form-Signup") { //SI LA PETICION PROVIENE DE CUENTA GOOGLE
                    await nuevoUsuario.save()
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "Felicitaciones se ha creado tu usuario con " +from
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
    
                } else{
                    //PASAR EMAIL VERIFICADO A FALSE
                    //ENVIARLE EL E MAIL PARA VERIFICAR
                    await nuevoUsuario.save()
    
                    res.json({
                        success: true, 
                        from:"siggup",
                        message: "Te enviamos un email para validarlo, por favor verifica tu casilla para completar el signUp "
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
                }
            }
        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" }) //CAPTURA EL ERROR
        }
        
    },
    
    iniciarSesion: async (req, res) => { //req.body.dataUsuario

        const { email, contrasenia,  from } = req.body.dataUsuario
        console.log(req.body.dataUsuario)
        try {
            const usuarioExiste = await Usuarios.findOne({ email })

            if (!usuarioExiste) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({ success: false, message: "Tu usuarios no a sido registrado realiza signIn" })

            } else {
                if (from !== "form-Signin") { 
                    
                    let contraseniaCompatible =  usuarioExiste.contrasenia.filter(pass =>bcryptjs.compareSync(contrasenia, pass))
                    
                    if (contraseniaCompatible.length >0) { //TERERO VERIFICA CONTRASEÑA

                        const usuarioData = {
                            nombre:usuarioExiste.nombre,
                            email: usuarioExiste.email,
                            from:usuarioExiste.from

                        }
                        await usuarioExiste.save()

                        res.json({ success: true, 
                                   from:from,
                                   response: {usuarioData }, 
                                   message:"Bienvenido nuevamente "+usuarioData.nombre,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"No has realizado el registro con "+from+"si quieres ingresar con este metodo debes hacer el signUp con " +from
                          })
                    }
                } else { 
                    if(usuarioExiste.emailVerificado){
                        let contraseniaCompatible =  usuarioExiste.contrasenia.filter(pass =>bcryptjs.compareSync(contrasenia, pass))
                        if(contraseniaCompatible.length >0){
                        const usuarioData = {
                            nombre: usuarioExiste.nombre, 
                            email: usuarioExiste.email,
                            from:usuarioExiste.from
                            }
                        
                        res.json({ success: true, 
                            from: from, 
                            response: {usuarioData}, 
                            message:"Bienvenido nuevamente "+usuarioData.nombre,
                          })
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"El usuario o el password no coinciden",
                              })
                        }
                    }else{
                        res.json({ success: false, 
                            from: from, 
                            message:"No has verificado tu email, por favor verifica ti casilla de emails para completar tu signUp"
                          }) 
                    }

                } //SI NO ESTA VERIFICADO
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Algo a salido mal intentalo en unos minutos" })
        }
    },
    
    cerrarSesion: async (req, res) => { // req.body.sesionCerrada 
       console.log(req.body)
        const email = req.body.sesionCerrada
        const user = await Usuarios.findOne({ email })
        await user.save()
        res.json(console.log('sesion cerrada ' + email))
    }


}
module.exports = UsuariosController

