const Router = require('express').Router()
const validator = require('../config/validador')
const passport = require('../config/passport')

const ciudadesController = require('../controllers/ciudadesControllers')
const itinerariosController =require('../controllers/itinerariosController')
const usuariosController = require('../controllers/usuariosControllers')
const {obtenerCiudades, cargarCiudad, eliminarCiudad, actualizarCiudad, obtenerCuidadID} = ciudadesController
const {obtenerItinerarios, cargarItinerario, eliminarItinerario, actualizarItinerario, obtenerItinerarioID, obtenerItinerariosPorCiudad} = itinerariosController
const {registrarse, iniciarSesion, cerrarSesion, verificarEmail, verificarToken} = usuariosController
/* , signInUser, signOutUser */
//ciudades
Router.route('/ciudades')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/ciudades/:id')
.delete(eliminarCiudad)
.put(actualizarCiudad)
.get(obtenerCuidadID)

//itinerarios

Router.route('/itinerarios')
.get(obtenerItinerarios)
.post(cargarItinerario)
Router.route('/itinerarios/:id')
.delete(eliminarItinerario)
.put(actualizarItinerario)
.get(obtenerItinerarioID)
Router.route('/itinerarios/ciudad/:idCiudad')
.get(obtenerItinerariosPorCiudad)

//Usuarios
Router.route('/autorizacion/signUp')
.post(validator, registrarse)

Router.route('/autorizacion/signIn')
.post(iniciarSesion)

Router.route('/autorizacion/signOut')
.post(cerrarSesion)

//verificacion email
Router.route('/verify/:uniqueString') //RECIBE EL LINK DE USUARIO
.get(verificarEmail) //LLAMA A FUNCION DE VERIFICACIION

Router.route('/autorizacion/signInToken')
.get(passport.authenticate('jwt',{ session:false }), verificarToken)


module.exports = Router