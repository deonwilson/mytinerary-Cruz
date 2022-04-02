const Router = require('express').Router()
const validator = require('../config/validador')
const passport = require('../config/passport')

const ciudadesController = require('../controllers/ciudadesControllers')
const itinerariosController =require('../controllers/itinerariosController')
const comentarioControllers = require('../controllers/comentariosControllers')
const usuariosController = require('../controllers/usuariosControllers')
const { Route } = require('react-router-dom')
const {obtenerCiudades, cargarCiudad, eliminarCiudad, actualizarCiudad, obtenerCuidadID} = ciudadesController
const {obtenerItinerarios, cargarItinerario, eliminarItinerario, actualizarItinerario, obtenerItinerarioID, obtenerItinerariosPorCiudad, meGustaNoMegusta} = itinerariosController
const {cargarComentario, actualizarComentario, eliminarComentario} = comentarioControllers
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

//---------------------------------------------------------------------------> comentarios de itinerarios
Router.route('/itinerarios/comentarios')
.post(passport.authenticate('jwt',{ session:false }), cargarComentario)

Router.route('/itinerarios/comentarios/actualizar')
.put(passport.authenticate('jwt',{ session: false }), actualizarComentario)

Router.route('/itinerarios/comentarios/:id')
.post(passport.authenticate('jwt',{ session: false }), eliminarComentario)

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

//me gusta, no me gusta
Router.route("/likeDislike/:id")
.put(passport.authenticate('jwt',{ session:false }), meGustaNoMegusta)


module.exports = Router