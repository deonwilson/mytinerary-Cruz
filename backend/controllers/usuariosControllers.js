const Usuarios = require('../models/usuarios')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')        
const nodemailer = require('nodemailer') 
const jwt = require('jsonwebtoken')

//funciones auxiliares 
const sendEmail = async (email, uniqueString) => { //FUNCION ENCARGADA DE ENVIAR EL EMAIL

    const transporter = nodemailer.createTransport({ //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
        host: 'smtp.gmail.com',         //DEFINIMOS LO PARAMETROS NECESARIOS
        port: 465,
        secure: true,
        auth: {
            user: "EmpresaChapi@gmail.com",    //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
            pass: "123456789chapi"                          //COREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
        }                                               //CONFIGURACIONES DE GMAIL
    })

    // EN ESTA SECCION LOS PARAMETROS DEL MAIL 
    let sender = "EmpresaChapi@gmail.com"  
    let mailOptions = { 
        from: sender,    //DE QUIEN
        to: email,       //A QUIEN
        subject: "Verificacion de email usuario ", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
        html: `
        <div >
        <h1 style="color:red">Presiona <a href=http://localhost:4000/api/verify/${uniqueString}>aqui</a> para confirma tu email. Gracias </h1>
        </div>
        `
    
    };

    await transporter.sendMail(mailOptions, function (error, response) { //SE REALIZA EL ENVIO
        if (error) { console.log(error) }
        else {
            console.log("Mensaje enviado")

        }
    })
};

//controladores
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
                        usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await usuarioExiste.save()
                        await sendEmail(email, usuarioExiste.uniqueString)
                        
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
                    uniqueString:crypto.randomBytes(15).toString('hex'),
                    emailVerificado:false,
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
                    await sendEmail(email, nuevoUsuario.uniqueString)
    
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
                if (from !== "form-Signup") { 
                    
                    let contraseniaCompatible =  usuarioExiste.contrasenia.filter(pass =>bcryptjs.compareSync(contrasenia, pass))
                    
                    if (contraseniaCompatible.length >0) { //TERERO VERIFICA CONTRASEÑA

                        const usuarioData = {
                            id:usuarioExiste._id,
                            nombre:usuarioExiste.nombre,
                            email: usuarioExiste.email,
                            from:usuarioExiste.from

                        }
                        await usuarioExiste.save()
                        const token = jwt.sign({...usuarioData}, process.env.SECRET_KEY,{expiresIn:60*60*24})

                        res.json({ success: true, 
                                   from:from,
                                   response: {token, usuarioData }, 
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
                        
                        const token = jwt.sign({...usuarioData}, process.env.SECRET_KEY,{expiresIn:60*60*24})

                        res.json({ success: true, 
                            from: from, 
                            response: {token, usuarioData}, 
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
    },
     
    verificarEmail: async (req, res) => {

        const { uniqueString } = req.params; //EXTRAE EL EL STRING UNICO DEL LINK

        const user = await Usuarios.findOne({ uniqueString: uniqueString })
        console.log(user) //BUSCA AL USUARIO CORRESPONDIENTE AL LINK
        if (user) {
            user.emailVerificado = true //COLOCA EL CAMPO emailVerified en true
            await user.save()
            res.redirect("http://localhost:3000/") //REDIRECCIONA AL USUARIO A UNA RUTA DEFINIDA
            //return  res.json({success:true, response:"Su email se ha verificado correctamente"})
        }
        else { res.json({ success: false, response: "Su email no se ha verificado" }) }
    },

    verificarToken:(req, res) => {
        console.log(req.user)
        if(!req.err){
        res.json({success:true,
                  response:{id:req.user.id, nombre:req.user.nombre, apellido:req.user.apellido, email:req.user.email, from:"token"},
                  message:"Bienvenido nuevamente "+req.user.nombre}) 
        }else{
            res.json({success:false,
            message:"Por favor realiza nuevamente signIn"}) 
        }
    }


}
module.exports = UsuariosController

